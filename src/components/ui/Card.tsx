import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'flat' | 'elevated';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'bg-white dark:bg-primary/5 border border-primary/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]',
            flat: 'bg-background-light dark:bg-white/5 border border-transparent',
            elevated: 'bg-white dark:bg-primary/10 shadow-xl border border-primary/10',
        };

        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        'rounded-xl overflow-hidden transition-all duration-300',
                        variants[variant],
                        className
                    )
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
