"use client";

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const SafeDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Search Section */}
            <div className="relative mb-8">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <span className="material-icons-round text-primary/40 text-xl">search</span>
                </div>
                <input
                    type="text"
                    placeholder="Where are you traveling to?"
                    className="w-full bg-white dark:bg-primary/10 border-none rounded-xl py-4 pl-12 pr-4 text-sm font-medium text-primary dark:text-white placeholder-primary/40 dark:placeholder-white/30 shadow-sm focus:ring-2 focus:ring-accent-gold transition-all"
                />
            </div>

            {/* Destination Brief */}
            <div className="rounded-xl overflow-hidden relative h-48 group shadow-lg">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfxEUNkqZyYWs-ZLePmYxUbAS7fqyKwJKIaRyeE21xm2aip_wF-8_-pqIspIOF6WUIkEWnp38Dm93m2Nq1Zxdc27tVj6sxLAHEbSFEBxq5GQORmCQcWFitcFHZytZ-BcS54B2fLN0RLQQZs3tA8bVSQE3ZKQ2Lo-CfDPTleqCyXcEndbqIwaMwlWnAXhCIHLyvsK5zdhFf3ZmRodvCRLmmUdntL2TL1PANptran_TGixvMH9ZqpdT_WpJwCCnAtVrg87z51hq-ZTE"
                    alt="Luxury resort"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em]">Current selection</span>
                            <h3 className="text-white text-xl font-bold">Maldives, Asia</h3>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-md px-2 py-1 rounded-full border border-green-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <span className="text-[10px] font-bold text-white uppercase">Safe to visit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 gap-4">
                {/* Visa Info Card */}
                <Card className="p-5 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 dark:bg-primary/30 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-accent-gold">description</span>
                    </div>
                    <h4 className="font-bold text-primary dark:text-white text-sm mb-1">Visa Entry</h4>
                    <p className="text-xs text-primary/60 dark:text-white/60 mb-4 flex-grow">Visa on arrival (30 days) required for EU & US citizens.</p>
                    <a href="#" className="text-[10px] font-bold text-primary dark:text-gold uppercase tracking-wider flex items-center gap-1">
                        Details <span className="material-icons-round text-xs">open_in_new</span>
                    </a>
                </Card>

                {/* Vaccinations */}
                <Card className="p-5 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 dark:bg-primary/30 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-accent-gold">vaccines</span>
                    </div>
                    <h4 className="font-bold text-primary dark:text-white text-sm mb-1">Health</h4>
                    <p className="text-xs text-primary/60 dark:text-white/60 mb-4 flex-grow">Recommended: Hep A, Typhoid. COVID-19 cert optional.</p>
                    <a href="#" className="text-[10px] font-bold text-primary dark:text-gold uppercase tracking-wider flex items-center gap-1">
                        Check CDC <span className="material-icons-round text-xs">open_in_new</span>
                    </a>
                </Card>

                {/* Travel Insurance */}
                <Card className="p-5 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 dark:bg-primary/30 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-accent-gold">verified_user</span>
                    </div>
                    <h4 className="font-bold text-primary dark:text-white text-sm mb-1">Insurance</h4>
                    <p className="text-xs text-primary/60 dark:text-white/60 mb-4 flex-grow">Premium coverage active. Includes med-evac and delay cover.</p>
                    <a href="#" className="text-[10px] font-bold text-primary dark:text-gold uppercase tracking-wider flex items-center gap-1">
                        Policy <span className="material-icons-round text-xs">arrow_forward</span>
                    </a>
                </Card>

                {/* Customs & Laws */}
                <Card className="p-5 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 dark:bg-primary/30 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-accent-gold">gavel</span>
                    </div>
                    <h4 className="font-bold text-primary dark:text-white text-sm mb-1">Local Laws</h4>
                    <p className="text-xs text-primary/60 dark:text-white/60 mb-4 flex-grow">Strict rules on imports. Respect local customs in Malé.</p>
                    <a href="#" className="text-[10px] font-bold text-primary dark:text-gold uppercase tracking-wider flex items-center gap-1">
                        Briefing <span className="material-icons-round text-xs">arrow_forward</span>
                    </a>
                </Card>
            </div>

            {/* Emergency Support */}
            <div>
                <h3 className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest mb-4">Concierge Support</h3>
                <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full border-2 border-accent-gold p-0.5">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEmb8vR4auzj1LFHjvytrERF1jG_yOLkwB5tBhd7xeWmnkMIduJqTmCbyVYYZ_7_8tTAhdeFc1b-IIJzy9HqvgMZNaZlk1qLKt1S9voSAobw-2YdcTbNxMWthMBL2qJ7TRzf9BrLECUZF_gOmVXFvHmkNuEDDEF5vi52AIN9gTftENamoKPOnf1CSOm3M_7JIs8vAvgmCZ0aVFuXsIKa9Lk9E20TmOycY_rf-JJ1NswhpyUiB6N7JlDHR0hiRUSRElFWAeDyWGaWQ"
                                    alt="Concierge"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xs text-white/70 font-medium">Your Personal Assistant</p>
                                <p className="text-sm font-bold">Elena Vance</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="bg-accent-gold hover:bg-accent-gold/90 text-primary py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                                <span className="material-icons-round text-sm">phone</span> Call Now
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                                <span className="material-icons-round text-sm">chat_bubble</span> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden bg-white dark:bg-primary/20 border border-primary/5 dark:border-primary/10 shadow-sm">
                <div className="p-4 flex items-center justify-between border-b border-primary/5 dark:border-primary/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 dark:text-white/60">Local Embassy</span>
                    <span className="text-[10px] text-accent-gold font-bold">0.8 mi away</span>
                </div>
                <div className="h-32 bg-primary/10 relative">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSFrdle-9WDRe9BjkijWClVUel69OQVj8yk0aXDxAew8WoX_I5MoTGdMjT_ek9MtmqckMkxoYGBjNGRIn9UjNcmnN6lDaJIcci-dNQK2kMPF3mmmzb_VDlo_zgro8spSzSq2bnc0x_jeFMcIpVl7i037dsof_nznTBiQtmK87I1VEGVlwwUhcgnUB5XP7g5YmpKfoOn7dHWeXS_che5LGNREfLMCLqCRhV1gBPvs1105RFmTmo_H-pwijJ6w5GZOKLoibIlvS5WyY"
                        alt="Map"
                        className="w-full h-full object-cover opacity-50 dark:opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
