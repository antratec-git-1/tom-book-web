
import Papa from 'papaparse';

export interface Product {
    id: string;
    category: string;
    title: string;
    description: string;
    price: string | number;
    imageUrl: string;
    amazonUrl: string;
    isFeatured: boolean;
}

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1ewp-_lMryq8YSQlNOjehg99duPC6z2m1l29REk3me0M/export?format=csv';

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL, {
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheet CSV: ${response.statusText}`);
        }

        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse<Product>(csvText, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true, // Automatically convert numbers and booleans
                transformHeader: (header) => {
                    // Normalize headers to camelCase just in case, though the prompt says to map specific columns.
                    // prompt columns: id, category, title, description, price, imageUrl, amazonUrl, isFeatured
                    // We assume the sheet headers match these or close to them. 
                    // Let's implement a safe mapping if needed, or assume direct fit.
                    // For now, assuming headers in CSV match the interface keys.
                    return header.trim();
                },
                complete: (results) => {
                    if (results.errors.length) {
                        console.error('CSV Parsing errors:', results.errors);
                    }
                    // Filter out any rows that might be missing critical data
                    const validProducts = results.data.filter(p => p.id && p.title);
                    resolve(validProducts as Product[]);
                },
                error: (error: Error) => {
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error('Error fetching/parsing product data:', error);
        return []; // Return empty array as fallback
    }
}
