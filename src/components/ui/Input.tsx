import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, icon, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-2 flex items-center gap-2">
                        {icon && <span className="text-primary/70 dark:text-gold text-lg">{icon}</span>}
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        className={twMerge(
                            clsx(
                                'w-full bg-background-light dark:bg-background-dark border-0 rounded-lg py-3 px-4 text-primary dark:text-white placeholder-primary/40 dark:placeholder-gray-600 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium shadow-inner',
                                error && 'ring-2 ring-red-500 focus:ring-red-500',
                                className
                            )
                        )}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
                {helperText && !error && <p className="mt-1 text-xs text-primary/60 dark:text-gray-400">{helperText}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
