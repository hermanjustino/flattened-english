"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
import Link from 'next/link';
import {
  ArrowRight
} from 'lucide-react';

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

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-tight uppercase">
            Flattened English
          </div>
          <div className="flex gap-8">
            <Link href="/abstract" className="text-sm font-medium hover:text-blue-600 transition-colors">Abstract</Link>
            <Link href="/methodology" className="text-sm font-medium hover:text-blue-600 transition-colors">Methodology</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4 block">
            Project AI Journalist 2.0
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
            Flattened English
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-light leading-relaxed max-w-3xl">
            An automated platform measuring linguistic labor in AI-mediated knowledge work.
          </p>
          <div className="flex gap-6 mt-8">
            <Link href="/abstract" className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0077ed] transition-colors flex items-center gap-2">
              Read Abstract <ArrowRight size={18} />
            </Link>
            <Link href="/methodology" className="bg-white text-[#0071e3] border border-[#0071e3] px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Methodology
            </Link>
          </div>
          <p className="text-xl md:text-2xl text-[#86868b] font-light mt-8">
            By Herman Justino
          </p>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-8"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1d1d1f]">
              LLMs impose a flattened, prestige English that creates unequal linguistic labor costs
              across global workers who participate in digital knowledge economies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Global Labor Currency</h3>
                <p className="text-[#86868b] leading-relaxed">
                  This is not about race alone, it is about whose English is treated as default
                  labor currency in AI-mediated work.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Asymmetric Compliance</h3>
                <p className="text-[#86868b] leading-relaxed">
                  LLMs impose asymmetric compliance costs, shifting the burden of standardization
                  onto non-native and dialect speakers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Extension Note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Automated Platform</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This project is evolving into an <strong>automated tracking platform</strong>. By continuously monitoring
                <em> search trends</em> and <em>social media</em> algorithms, we quantify the real-time pressure of
                linguistic standardization across the digital ecosystem.
              </p>
              <div className="flex items-center text-blue-600 font-medium cursor-pointer hover:underline">
                View System Architecture <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Core */}
      <section className="bg-[#f5f5f7] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            <div className="h-[350px] w-full bg-white p-6 rounded-3xl shadow-sm">
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
            <div className="order-2 md:order-1 h-[350px] w-full bg-white p-6 rounded-3xl shadow-sm">
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