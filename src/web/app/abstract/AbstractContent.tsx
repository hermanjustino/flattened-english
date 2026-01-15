"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AbstractContent() {
    return (
        <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors">
                        <ArrowLeft size={16} />
                        Back to Overview
                    </Link>
                    <div className="flex gap-8">
                        <Link href="/abstract" className="text-sm font-medium text-blue-600">Abstract</Link>
                        <Link href="/methodology" className="text-sm font-medium hover:text-blue-600 transition-colors">Methodology</Link>
                    </div>
                </div>
            </nav>

            <section className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4 block">
                        Project Abstract
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-12">
                        Flattened English: Measuring Linguistic Labour in AI-Mediated Knowledge Work
                    </h1>

                    <div className="space-y-12 text-xl md:text-2xl text-[#1d1d1f] font-light leading-relaxed">
                        <div>
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-4">Problem Statement</h2>
                            <p>
                                As large language models (LLMs) and AI-mediated platforms become embedded in professional and academic workflows, they increasingly function as gatekeepers of linguistic legitimacy. This project argues that these platforms impose a flattened "prestige English" that operates as a default labor currency, generating asymmetric compliance costs for users of non-standard or regionally grounded varieties.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600 mb-4">Central Research Question</h2>
                            <p className="text-2xl md:text-3xl font-medium text-[#1d1d1f] italic">
                                "How do AI-mediated platforms impose uneven linguistic labour on users writing in non-standard English varieties in digital work contexts?"
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-4">Methodology: Measuring Algorithmic Friction</h2>
                            <p className="mb-6">
                                This study moves beyond identity-based analysis to examine uneven labor across global workers in an AI-saturated ecosystem. The project develops a quantitative audit across search engines, social media, and LLMs, framing linguistic labour through three measurable metrics:
                            </p>
                            <ul className="space-y-4 text-lg md:text-xl">
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-[#1d1d1f]">Semantic Loss:</span>
                                    <span className="text-gray-600">Propositional degradation during algorithmic "standardization."</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-[#1d1d1f]">Reformulation Distance:</span>
                                    <span className="text-gray-600">The mechanical work required to move from natural voice to "legitimate" output.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-[#1d1d1f]">Correction Frequency:</span>
                                    <span className="text-gray-600">The iterative burden of adjusting syntax to satisfy algorithmic norms.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-4">Contribution to Digital Labor Theory</h2>
                            <p>
                                By linking AI language systems to broader platform infrastructures, this research extends the definition of digital labor to include linguistic standardization as invisible work. The findings contribute a technical framework for auditing cultural alignment and labor asymmetries, offering a site of resistance against the algorithmic flattening of human expression in the global knowledge economy.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
