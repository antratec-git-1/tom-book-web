"use client";

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { clsx } from 'clsx';

// Step definitions
const steps = [
    'Destination',
    'Dates',
    'Type',
    'Budget',
    'Extras',
    'Message'
];

const validationSchema = Yup.object().shape({
    destination: Yup.string().required('Bitte geben Sie ein Reiseziel an'),
    startDate: Yup.date().required('Startdatum erforderlich'),
    endDate: Yup.date().min(Yup.ref('startDate'), 'Enddatum muss nach Startdatum liegen').required('Enddatum erforderlich'),
    travelType: Yup.string().required('Bitte wählen Sie eine Reiseart'),
    budget: Yup.array().of(Yup.number()).min(2),
    message: Yup.string(),
});

export const MultiStepForm = () => {
    const [step, setStep] = useState(0);

    // We can show all steps at once as per the provided HTML design (single page form), 
    // or strictly multi-step. The design in premium_travel_planner/code.html shows ALL sections visible.
    // However, the "Introduction" says "Reiseplanung".
    // "Bottom Action Bar" has "Anfrage senden".
    // So it looks like a single long scrolling form.
    // I will implement it as a single page form as per the HTML reference, but with nice scroll/layout.

    return (
        <Formik
            initialValues={{
                destination: '',
                startDate: '',
                endDate: '',
                travelType: 'Pauschal',
                budget: [1500, 3500],
                extras: [] as string[],
                message: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form submitted:', values);
                // Simulate API call
                alert('Vielen Dank! Ihre Anfrage wurde simuliert abgesendet.');
            }}
        >
            {({ values, errors, touched, setFieldValue, handleChange }) => (
                <Form className="space-y-8 pb-32">

                    {/* Introduction */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-primary dark:text-white">Reiseplanung</h2>
                        <p className="text-primary/60 dark:text-gray-400 text-sm leading-relaxed">
                            Gestalten Sie Ihren perfekten Urlaub. Teilen Sie uns Ihre Wünsche mit, und wir kümmern uns um den Rest.
                        </p>
                    </div>

                    {/* Section 1: Destination */}
                    <Card className="p-6 relative overflow-hidden group hover:shadow-lg">
                        {/* Decorative Background Blob */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

                        <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-4 flex items-center gap-2">
                            <span className="material-icons-round text-primary/70 dark:text-gold text-lg">flight_takeoff</span>
                            Wohin soll die Reise gehen?
                        </label>
                        <Input
                            name="destination"
                            placeholder="z.B. Malediven, Toskana, Kapstadt..."
                            value={values.destination}
                            onChange={handleChange}
                            error={touched.destination && errors.destination ? errors.destination : undefined}
                        />
                    </Card>

                    {/* Section 2: Dates */}
                    <Card className="p-6">
                        <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-4 flex items-center gap-2">
                            <span className="material-icons-round text-primary/70 dark:text-gold text-lg">calendar_month</span>
                            Wann möchten Sie reisen?
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-primary/50 dark:text-gray-500 uppercase">Früheste Anreise</span>
                                <Input
                                    name="startDate"
                                    type="date"
                                    value={values.startDate}
                                    onChange={handleChange}
                                    error={touched.startDate && errors.startDate ? errors.startDate as string : undefined}
                                />
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-primary/50 dark:text-gray-500 uppercase">Späteste Rückreise</span>
                                <Input
                                    name="endDate"
                                    type="date"
                                    value={values.endDate}
                                    onChange={handleChange}
                                    error={touched.endDate && errors.endDate ? errors.endDate as string : undefined}
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Section 3: Travel Type */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-primary dark:text-gray-200 px-1 flex items-center gap-2">
                            <span className="material-icons-round text-primary/70 dark:text-gold text-lg">category</span>
                            Bevorzugte Reiseart
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { id: 'Kreuzfahrt', icon: 'directions_boat', label: 'Kreuzfahrt' },
                                { id: 'Pauschal', icon: 'beach_access', label: 'Pauschal' },
                                { id: 'Individual', icon: 'explore', label: 'Individual' }
                            ].map((type) => (
                                <label key={type.id} className="cursor-pointer group relative">
                                    <input
                                        type="radio"
                                        name="travelType"
                                        value={type.id}
                                        checked={values.travelType === type.id}
                                        onChange={handleChange}
                                        className="peer sr-only"
                                    />
                                    <div className="h-full flex flex-col items-center justify-center p-3 bg-white dark:bg-primary/5 rounded-xl border border-primary/5 dark:border-white/5 shadow-sm transition-all duration-300 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary peer-checked:shadow-md hover:bg-background-light dark:hover:bg-white/5">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 dark:bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-primary dark:text-white">
                                            <span className="material-icons-round">{type.icon}</span>
                                        </div>
                                        <span className="text-xs font-semibold text-center text-primary dark:text-gray-200">{type.label}</span>
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity text-primary">
                                        <span className="material-icons-round text-sm">check_circle</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: Budget (Slider Placeholder) */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <label className="block text-sm font-medium text-primary dark:text-gray-200 flex items-center gap-2">
                                <span className="material-icons-round text-primary/70 dark:text-gold text-lg">account_balance_wallet</span>
                                Budget p.P.
                            </label>
                            <span className="text-primary font-bold text-lg dark:text-gold">
                                € {values.budget[0]} - € {values.budget[1]}
                            </span>
                        </div>
                        {/* Note: Native range slider for simplicity as no heavy UI lib installed yet for multi-range */}
                        <div className="space-y-4">
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="100"
                                value={values.budget[1]}
                                onChange={(e) => setFieldValue('budget', [values.budget[0], parseInt(e.target.value)])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <div className="flex justify-between text-xs text-primary/40 dark:text-gray-500 font-medium">
                                <span>€ 0</span>
                                <span>€ 10.000+</span>
                            </div>
                        </div>
                    </Card>

                    {/* Section 5: Extras */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-primary dark:text-gray-200 px-1 flex items-center gap-2">
                            <span className="material-icons-round text-primary/70 dark:text-gold text-lg">star</span>
                            Wünsche & Extras
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {[
                                'Mietwagen', 'Rail & Fly', 'Versicherung', 'Parkplatz am Airport', 'Direktflug'
                            ].map((extra) => (
                                <label key={extra} className="inline-flex cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="extras"
                                        value={extra}
                                        checked={values.extras.includes(extra)}
                                        onChange={handleChange}
                                        className="peer sr-only"
                                    />
                                    <span className="px-4 py-2 rounded-full bg-white dark:bg-primary/5 border border-primary/10 dark:border-white/10 text-primary dark:text-gray-300 text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-primary/5 dark:hover:bg-white/5 shadow-sm">
                                        {extra}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Section 6: Message */}
                    <Card className="p-6">
                        <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-3 flex items-center gap-2">
                            <span className="material-icons-round text-primary/70 dark:text-gold text-lg">favorite</span>
                            Was ist dir im Urlaub besonders wichtig?
                        </label>
                        <textarea
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-background-light dark:bg-background-dark border-0 rounded-lg py-3 px-4 text-primary dark:text-white placeholder-primary/40 dark:placeholder-gray-600 focus:ring-2 focus:ring-primary/20 text-sm leading-relaxed resize-none shadow-inner"
                            placeholder="Beschreiben Sie hier besondere Wünsche, Zimmerpräferenzen oder Aktivitäten..."
                        />
                    </Card>

                    {/* Bottom Action Bar */}
                    <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-primary/5 dark:border-white/5 z-40 safe-area-bottom">
                        <div className="max-w-lg mx-auto">
                            <Button
                                type="submit"
                                fullWidth
                                className="bg-gradient-to-r from-gold to-yellow-500 hover:from-gold-hover hover:to-yellow-600 border-none"
                            >
                                <span className="mr-2">Anfrage senden</span>
                                <span className="material-icons-round text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
