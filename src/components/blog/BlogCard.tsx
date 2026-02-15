"use client";

import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    tag: string;
    tagColor?: string;
}

export const BlogCard = ({ title, description, image, tag, tagColor = 'bg-primary/90' }: BlogCardProps) => {
    return (
        <article className="group mb-12">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 shadow-xl">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <span className={`${tagColor} text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm font-bold mb-3 inline-block`}>
                        {tag}
                    </span>
                    <h2 className="text-2xl text-white font-bold mb-2 font-display">{title}</h2>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-serif">
                {description}
            </p>
            <button className="w-full bg-primary text-slate-100 dark:text-slate-900 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:bg-primary/80 dark:bg-accent hover:bg-primary/90">
                <span className="uppercase tracking-widest text-xs">Plan this Trip</span>
                <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
        </article>
    );
};
