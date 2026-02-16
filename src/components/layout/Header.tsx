"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Home uses a transparent header initially (over video), others use sticky/glass
    const headerClass = isHome
        ? 'fixed top-0 left-0 right-0 z-50 text-white'
        : 'sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/5 dark:border-white/5 text-primary dark:text-white';

    return (
        <>
            <header className={clsx(headerClass, 'transition-all duration-300')}>
                <div className="relative px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
                    {/* Logo - Hanging / Overlapping Style */}
                    <div className="relative z-50">
                        <Link href="/" className="block">
                            <img
                                src="/logo.png"
                                alt="tom-book.de Logo"
                                className="h-32 md:h-40 w-auto object-contain drop-shadow-lg"
                                style={{ transform: 'translateY(10%)' }}
                            />
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className={clsx(
                            "p-2 rounded-full transition-colors backdrop-blur-sm ml-auto",
                            isHome
                                ? "hover:bg-white/10 border border-white/20"
                                : "hover:bg-primary/5 dark:hover:bg-white/10 border border-primary/10 dark:border-white/10"
                        )}
                    >
                        <span className="material-icons-outlined text-2xl">menu</span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary/5 dark:hover:bg-white/5"
                    >
                        <span className="material-icons-outlined text-3xl">close</span>
                    </button>

                    <nav className="flex flex-col gap-8 text-center">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Home</Link>
                        <Link href="/planner" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Reiseplaner</Link>
                        <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Shop</Link>
                        <Link href="/safe" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Travel-Safe</Link>
                        <Link href="/inspiration" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Inspiration</Link>
                    </nav>
                </div>
            )}
        </>
    );
};
