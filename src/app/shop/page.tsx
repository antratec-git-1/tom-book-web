
import { ProductGrid } from "@/components/shop/ProductGrid";
import { getProducts } from "@/lib/googleSheets";

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <main className="flex-grow pt-8 min-h-screen bg-background-light dark:bg-background-dark">
            {/* Hero / Intro */}
            <div className="px-6 pb-4">
                <h2 className="text-3xl font-bold text-primary dark:text-white leading-tight mb-2">Curated for your next journey.</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Handpicked essentials to ensure comfort, safety, and connectivity wherever you go.</p>
            </div>

            <ProductGrid products={products} />
        </main>
    );
}
