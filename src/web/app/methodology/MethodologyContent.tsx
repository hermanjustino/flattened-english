"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Database, Search, Cpu } from 'lucide-react';

export default function MethodologyContent() {
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
                        <Link href="/abstract" className="text-sm font-medium hover:text-blue-600 transition-colors">Abstract</Link>
                        <Link href="/methodology" className="text-sm font-medium text-blue-600">Methodology</Link>
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
                        Research Methodology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-12">
                        Mapping Friction in the Linguistic Ecosystem
                    </h1>

                    <div className="space-y-12 text-xl md:text-2xl text-[#1d1d1f] font-light leading-relaxed">
                        <p>
                            The project develops a quantitative audit that combines social media data, search behavior, and LLM interaction.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Social Data</h3>
                                <p className="text-base text-[#86868b]">Analyzing captions and comments for dialect markers.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <Search size={24} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Search Behavior</h3>
                                <p className="text-base text-[#86868b]">Tracking semantic drift in algorithmic retrieval.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">LLM Interaction</h3>
                                <p className="text-base text-[#86868b]">Measuring reformulation distance in prompts.</p>
                            </div>
                        </div>

                        <p>
                            Methodologically, the project frames linguistic labour as measurable friction: <strong>semantic loss, reformulation distance, and correction frequency</strong>. These
                            metrics are analysed across platforms to identify where and how standardization pressure is most acute. This project does not aim to authenticate speaker
                            identity, the study focuses on linguistic features circulating in digital labour environments, acknowledging the already AI-saturated conditions under
                            which contemporary language is produced.
                        </p>

                        <p className="bg-[#f5f5f7] p-8 md:p-12 rounded-3xl">
                            By linking AI language systems to search engines and social platforms, this research extends debates on digital labor beyond data labeling and content
                            moderation to include linguistic standardization as a form of invisible work. The findings contribute a technical framework for auditing cultural
                            alignment and labor asymmetries in AI-mediated knowledge economies.
                        </p>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
