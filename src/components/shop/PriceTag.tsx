
"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

interface PriceTagProps {
    asin?: string;
    fallbackPrice?: string | number;
    className?: string;
}

export const PriceTag = ({ asin, fallbackPrice, className }: PriceTagProps) => {
    const [price, setPrice] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        if (!asin) {
            // Just use fallback if no ASIN
            if (fallbackPrice) {
                const formatted = typeof fallbackPrice === 'number'
                    ? `€${fallbackPrice.toFixed(2)}`
                    : fallbackPrice.toString().startsWith('€') || fallbackPrice.toString().endsWith('€')
                        ? fallbackPrice.toString()
                        : `€${fallbackPrice}`;
                setPrice(formatted);
            }
            return;
        }

        const fetchPrice = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/get-price?asin=${asin}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.price) {
                        setPrice(data.price);
                        setLastUpdated(new Date().toLocaleString('de-DE', {
                            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        }));
                    } else if (fallbackPrice) {
                        const formatted = typeof fallbackPrice === 'number'
                            ? `€${fallbackPrice.toFixed(2)}`
                            : fallbackPrice.toString();
                        setPrice(formatted);
                    }
                } else {
                    // If API fails, fall back
                    if (fallbackPrice) {
                        const formatted = typeof fallbackPrice === 'number'
                            ? `€${fallbackPrice.toFixed(2)}`
                            : fallbackPrice.toString();
                        setPrice(formatted);
                    }
                }
            } catch (err) {
                console.error('Failed to fetch price', err);
                if (fallbackPrice) {
                    const formatted = typeof fallbackPrice === 'number'
                        ? `€${fallbackPrice.toFixed(2)}`
                        : fallbackPrice.toString();
                    setPrice(formatted);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPrice();
    }, [asin, fallbackPrice]);

    return (
        <div className={clsx("flex flex-col", className)}>
            {loading ? (
                <div className="h-7 w-24 bg-slate-200 dark:bg-slate-700 animate-pulse rounded mb-1"></div>
            ) : (
                <span className="block text-lg font-bold text-primary dark:text-white leading-tight">
                    {price || 'Preis prüfen'}
                </span>
            )}

            {lastUpdated && (
                <span className="text-[10px] text-slate-400 leading-tight">
                    Stand: {lastUpdated} <br /> Preise können variieren.
                </span>
            )}
        </div>
    );
};
