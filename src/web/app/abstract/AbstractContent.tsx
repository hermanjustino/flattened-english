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

                    <div className="space-y-8 text-xl md:text-2xl text-[#1d1d1f] font-light leading-relaxed">
                        <p>
                            As large language models (LLMs) and AI-mediated platforms become embedded in professional, academic, and creative workflows, they increasingly function
                            as gatekeepers of linguistic legitimacy. While prior research has documented cultural bias in LLM outputs, less attention has been paid to the labour
                            required of users to make their language legible to these systems. This project argues that LLMs and adjacent AI-mediated platforms impose a flattened
                            form of “prestige English” that operates as a default labor currency, generating asymmetric compliance costs for users who employ non-standard or
                            regionally grounded English varieties.
                        </p>

                        <p>
                            Rather than framing linguistic preference solely through identity, this study examines how uneven linguistic labor emerges across global knowledge
                            workers operating in a post-LLM linguistic ecosystem. An ecosystem in which human expression is increasingly shaped, corrected, and standardized through
                            algorithmic interaction. In this context, language becomes a site of invisible work: users must repeatedly adjust syntax, vocabulary, and discourse style
                            to satisfy algorithmic norms in order to access information, visibility, or professional legitimacy.
                        </p>

                        <div className="pt-12 mt-12 border-t border-gray-100">
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-6">Central Research Question</h2>
                            <p className="text-2xl md:text-3xl font-medium text-[#1d1d1f]">
                                How do AI-mediated platforms impose uneven linguistic labour on users writing in non-standard English varieties in digital work contexts?
                            </p>
                        </div>

                        <p>
                            Methodologically, the project frames linguistic labour as measurable friction: semantic loss, reformulation distance, and correction frequency. These metrics are
                            analysed across platforms to identify where and how standardization pressure is most acute. This project does not aim to authenticate speaker identity, the study
                            focuses on linguistic features circulating in digital labour environments, acknowledging the already AI-saturated conditions under which contemporary language is produced.
                            By linking AI language systems to search engines and social platforms, this research extends debates on digital labor beyond data labeling and content moderation
                            to include linguistic standardization as a form of invisible work. The findings contribute a technical framework for auditing cultural alignment and labor asymmetries
                            in AI-mediated knowledge economies.
                        </p>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
