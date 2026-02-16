
import React from 'react';

export default function ImpressumPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-serif mb-8 text-slate-800 dark:text-white">Impressum</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Max Mustermann<br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                    <p>
                        Telefon: +49 (0) 123 44 55 66<br />
                        E-Mail: info@tom-book.de
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE999999999
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Redaktionell verantwortlich</h2>
                    <p>
                        Max Mustermann<br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            https://ec.europa.eu/consumers/odr/
                        </a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>
            </div>
        </div>
    );
}
