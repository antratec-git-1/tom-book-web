import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

        const variants = {
            primary: 'bg-accent text-primary hover:bg-[#c5a028] shadow-lg shadow-black/20 active:scale-[0.98]',
            secondary: 'bg-primary text-white hover:bg-primary/90 shadow-md active:scale-[0.98]',
            outline: 'border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98]',
            ghost: 'text-primary hover:bg-primary/10 active:scale-[0.95]',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        baseStyles,
                        variants[variant],
                        sizes[size],
                        fullWidth && 'w-full',
                        className
                    )
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
