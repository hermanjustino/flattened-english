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
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";

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
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
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
            <Link href="/abstract">
              <LiquidGlassCard
                borderRadius="9999px"
                className="px-8 py-3 bg-[#0071e3] text-white font-medium flex items-center gap-2 hover:bg-[#0077ed] transition-colors"
                glowIntensity="sm"
                shadowIntensity="sm"
              >
                Read Abstract
              </LiquidGlassCard>
            </Link>
            <Link href="/methodology">
              <LiquidGlassCard
                borderRadius="9999px"
                className="px-8 py-3 bg-white text-[#0071e3] border border-[#0071e3] font-medium hover:bg-blue-50 transition-colors"
                glowIntensity="xs"
                shadowIntensity="xs"
              >
                Methodology
              </LiquidGlassCard>
            </Link>
          </div>
          <p className="text-xl md:text-2xl text-[#86868b] font-light mt-8">
            By Herman Justino
          </p>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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
        </div>
      </section>
    </main>
  );
}