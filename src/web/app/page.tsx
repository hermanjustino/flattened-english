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
import { 
  Activity, 
  Globe, 
  Layers, 
  ShieldAlert,
  Search,
  MessageSquare
} from 'lucide-react';

const mockData = [
  { name: 'Standard English', score: 98, labor: 2 },
  { name: 'AAVE', score: 64, labor: 85 },
  { name: 'Singlish', score: 71, labor: 62 },
  { name: 'Indian English', score: 78, labor: 45 },
  { name: 'Nigerian English', score: 69, labor: 72 },
];

const driftData = [
  { month: 'Jan', drift: 10 },
  { month: 'Feb', drift: 15 },
  { month: 'Mar', drift: 28 },
  { month: 'Apr', drift: 35 },
  { month: 'May', drift: 42 },
  { month: 'Jun', drift: 58 },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-apple-gray-700">
            Flattened English
          </h1>
          <p className="text-xl text-apple-gray-400 mt-2 max-w-2xl font-light">
            Measuring Linguistic Labor in AI-Mediated Knowledge Work
          </p>
        </motion.div>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Platform Audit Score', value: '62/100', icon: ShieldAlert, color: 'text-orange-500' },
          { label: 'Avg. Linguistic Labor', value: '+42%', icon: Activity, color: 'text-blue-500' },
          { label: 'Domains Tracked', value: '12', icon: Globe, color: 'text-purple-500' },
          { label: 'Inference Bias', value: 'High', icon: Layers, color: 'text-red-500' },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass p-6 rounded-3xl card-shadow"
          >
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-2xl bg-white/50 ${metric.color}`}>
                <metric.icon size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-apple-gray-400">{metric.label}</p>
              <p className="text-2xl font-semibold text-apple-gray-700 mt-1">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-[2rem] card-shadow min-h-[400px]"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-apple-gray-700">Linguistic Labor Index</h3>
            <span className="text-xs font-medium px-3 py-1 bg-apple-gray-100 rounded-full text-apple-gray-500">
              By Variety
            </span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#86868b', fontSize: 12 }} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar 
                  dataKey="labor" 
                  fill="#1d1d1f" 
                  radius={[10, 10, 10, 10]} 
                  barSize={40} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-[2rem] card-shadow min-h-[400px]"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-apple-gray-700">Linguistic Drift over Time</h3>
            <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-500 rounded-full">
              Standardization Pressure
            </span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={driftData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#86868b', fontSize: 12 }} 
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="drift" 
                  stroke="#0071e3" 
                  strokeWidth={4} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Feed / Recent Audits */}
      <section className="space-y-6 pb-20">
        <h2 className="text-2xl font-semibold text-apple-gray-700 flex items-center gap-2">
          <Activity size={24} className="text-apple-gray-400" />
          Live Audit Feed
        </h2>
        <div className="space-y-4">
          {[
            { platform: 'TikTok Search', topic: 'AAVE Expression', status: 'Suppressed', icon: Search },
            { platform: 'Semantic Scholar', topic: 'Academic Standardization', status: 'High Drift', icon: Globe },
            { platform: 'GPT-4o', topic: 'Professional Norms', status: 'Enforced', icon: MessageSquare },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="glass p-5 rounded-2xl flex items-center justify-between hover:bg-white/80 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-apple-gray-50 rounded-xl text-apple-gray-500">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-apple-gray-700">{item.platform}</p>
                  <p className="text-sm text-apple-gray-400">{item.topic}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold px-3 py-1 bg-apple-gray-100 rounded-full text-apple-gray-600">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}