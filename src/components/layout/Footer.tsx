import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-10 pb-8 px-6 rounded-t-3xl relative overflow-hidden mt-auto">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-7xl mx-auto">
                <h3 className="font-display font-bold text-xl mb-2">Join the Exclusive Circle</h3>
                <p className="text-primary/20 text-blue-100 text-sm mb-6 max-w-xs mx-auto">
                    Get curated travel tips and secret deals directly to your inbox.
                </p>

                <form className="flex flex-col gap-3 max-w-xs mx-auto mb-8">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border-0 focus:ring-2 focus:ring-gold focus:outline-none placeholder:text-slate-400 text-sm"
                    />
                    <button
                        type="button"
                        className="w-full bg-gold hover:bg-gold-hover text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-black/20 uppercase tracking-wide text-sm"
                    >
                        Subscribe
                    </button>
                </form>

                <div className="border-t border-white/10 my-6"></div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="text-white/70 hover:text-gold transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm1.49 5.293a1 1 0 111.415 1.414 1 1 0 01-1.414-1.414zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" fillRule="evenodd"></path></svg>
                    </a>
                    {/* ... other social icons simplified for brevity ... */}
                </div>

                <div className="flex justify-center gap-6 text-xs text-white/50 mb-4">
                    <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                    <span>|</span>
                    <Link href="#" className="hover:text-white transition-colors">Datenschutz</Link>
                </div>
                <p className="text-[10px] text-white/30">© 2023 tom-book.de</p>
            </div>
        </footer>
    );
};
