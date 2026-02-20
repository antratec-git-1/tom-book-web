"use client";

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import clsx from 'clsx';
import Link from 'next/link';
import { Product } from '@/lib/googleSheets';
import { PriceTag } from './PriceTag';

interface ProductGridProps {
    products: Product[];
}

const getAsinFromUrl = (url: string) => {
    const match = url.match(/\/dp\/([A-Z0-9]{10})/);
    return match ? match[1] : undefined;
};

export const ProductGrid = ({ products }: ProductGridProps) => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // Derive unique categories from products
    const categories = useMemo(() => {
        const uniqueCats = Array.from(new Set(products.map(p => p.category).filter(Boolean)));
        return ['All', ...uniqueCats];
    }, [products]);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <>
            {/* Category Tabs */}
            <div className="px-6 mb-6">
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                "flex-shrink-0 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200",
                                activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100"
                                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 px-4 pb-12">
                {filteredProducts.map((product) => {
                    const asin = product.amazonUrl ? getAsinFromUrl(product.amazonUrl) : undefined;
                    return (
                        <Card key={product.id} className="group flex flex-col hover:shadow-md transition-shadow relative">
                            <div className="aspect-square bg-slate-50 dark:bg-slate-700 relative overflow-hidden flex items-center justify-center p-4">
                                <a
                                    href={product.amazonUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    {product.imageUrl ? (
                                        <img
                                            src={product.imageUrl}
                                            alt={product.title}
                                            className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-slate-300">
                                            <span className="material-icons-round text-4xl">image_not_supported</span>
                                        </div>
                                    )}
                                </a>
                                <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-primary dark:text-white uppercase tracking-wider pointer-events-none">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-3 flex flex-col flex-grow">
                                <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-1 leading-snug line-clamp-2">
                                    {product.title}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                                    {product.description || "Handpicked essential for your next trip."}
                                </p>
                                <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <PriceTag asin={asin} fallbackPrice={product.price} className="mb-3" />
                                    <Link
                                        href={product.amazonUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-primary hover:bg-primary/90 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-sm shadow-primary/20"
                                    >
                                        Bei Amazon prüfen
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Affiliate Disclosure */}
            <div className="mt-8 mb-4 px-4">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center leading-relaxed">
                    * tom-book.de is a participant in the Amazon Services LLC Associates Program. As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
                </p>
            </div>
        </>
    );
};
