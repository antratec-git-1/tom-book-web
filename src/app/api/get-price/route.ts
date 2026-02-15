
import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

// Simple in-memory cache: Map<ASIN, { price: string, timestamp: number }>
const priceCache = new Map<string, { price: string; timestamp: number }>();
const CACHE_DURATION = 3600 * 1000; // 1 hour in ms

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const asin = searchParams.get('asin');

    if (!asin) {
        return NextResponse.json({ error: 'ASIN is required' }, { status: 400 });
    }

    // Check cache
    const cached = priceCache.get(asin);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return NextResponse.json({
            price: cached.price,
            cached: true,
            timestamp: new Date(cached.timestamp).toISOString()
        });
    }

    try {
        const url = `https://www.amazon.de/dp/${asin}`;

        // Fetch with headers to mimic a browser
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
            },
            next: { revalidate: 0 } // Don't use Next.js fetch cache for this, we manage it manually or let the browser do it
        });

        if (!response.ok) {
            throw new Error(`Amazon responded with ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Try multiple selectors for price (Amazon changes these often)
        let price =
            $('#price_inside_buybox').text().trim() ||
            $('.a-price .a-offscreen').first().text().trim() ||
            $('#priceblock_ourprice').text().trim() ||
            $('#priceblock_dealprice').text().trim() ||
            $('.a-text-price .a-offscreen').first().text().trim();

        // Clean up price string (e.g., "22,99€" -> "22,99 €")
        // Sometimes it comes as "22,99 €" or "€22.99"
        if (price) {
            // Basic cleanup if needed, but keeping original format is usually safer for currency symbols
            priceCache.set(asin, { price, timestamp: Date.now() });
            return NextResponse.json({
                price,
                cached: false,
                timestamp: new Date().toISOString()
            });
        } else {
            // If scraping fails (CAPTCHA etc), return error or null
            // For now, let's return null so UI handles fallback
            return NextResponse.json({ error: 'Price not found' }, { status: 404 });
        }

    } catch (error) {
        console.error(`Error fetching price for ASIN ${asin}:`, error);
        return NextResponse.json({ error: 'Failed to fetch price' }, { status: 500 });
    }
}
