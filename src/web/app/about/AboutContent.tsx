"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';
import { ArrowLeft } from 'lucide-react';

const mockData = [
    { name: 'Standard', labor: 15 },
    { name: 'AAVE', labor: 89 },
    { name: 'Singlish', labor: 72 },
    { name: 'Indian Eng.', labor: 54 },
    { name: 'Nigerian Eng.', labor: 78 },
];

const driftData = [
    { period: 'Pre-LLM', drift: 12 },
    { period: 'GPT-3', drift: 35 },
    { period: 'ChatGPT', drift: 58 },
    { period: 'GPT-4', drift: 74 },
    { period: 'Current', drift: 88 },
    { period: '2026+', drift: 96 },
];

export default function AboutContent() {
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
                        <Link href="/about" className="text-sm font-medium text-blue-600">About</Link>
                        <Link href="/abstract" className="text-sm font-medium hover:text-blue-600 transition-colors">Abstract</Link>
                        <Link href="/methodology" className="text-sm font-medium hover:text-blue-600 transition-colors">Methodology</Link>
                    </div>
                </div>
            </nav>

            <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-4xl mb-16">
                    <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4 block">
                        About the Project
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                        Visualizing the Invisible Work of Language
                    </h1>
                    <p className="text-xl text-[#86868b] font-light leading-relaxed">
                        We are quantifying the compliance costs of speaking non-standard English in an AI-first world.
                    </p>
                </div>

                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                                Research Question
                            </h2>
                            <p className="text-2xl font-light leading-relaxed text-gray-800">
                                "How do AI-mediated platforms impose uneven linguistic labor on users employing
                                non-standard English varieties in digital work contexts?"
                            </p>
                        </div>
                        <div className="h-[350px] w-full bg-white p-6 rounded-3xl shadow-sm border border-gray-100/50">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={mockData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#86868b', fontSize: 10 }}
                                        interval={0}
                                        height={60}
                                    />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 10 }} />
                                    <Tooltip
                                        cursor={{ fill: '#f5f5f7' }}
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar dataKey="labor" fill="#0071e3" radius={[6, 6, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                            <p className="text-center text-xs text-gray-400 mt-2">Linguistic Labor Index (Estimated Friction)</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="order-2 md:order-1 h-[350px] w-full bg-white p-6 rounded-3xl shadow-sm border border-gray-100/50">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={driftData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="period"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#86868b', fontSize: 10 }}
                                        interval={0}
                                        height={60}
                                    />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 10 }} />
                                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                    <Line type="monotone" dataKey="drift" stroke="#1d1d1f" strokeWidth={3} dot={{ r: 4, fill: '#1d1d1f' }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                            <p className="text-center text-xs text-gray-400 mt-2">Semantic Drift vs. Algorithmic Norms</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                                Core Contribution
                            </h2>
                            <p className="text-xl font-light leading-relaxed text-gray-600 mb-6">
                                A quantitative, platform-level audit of how search engines, social media algorithms,
                                and LLMs enforce professional linguistic norms.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-600">Shifting the burden of standardization onto global and racialized workers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-600">Measuring the "compliance cost" of non-standard English in a post-LLM ecosystem.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
