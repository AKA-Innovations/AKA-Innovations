'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Smartphone, Users, ShieldCheck,
    Bell, TrendingUp, CheckCircle, AlertCircle,
    Bus, BookOpen, DollarSign, Award, Clock,
    Wifi, BarChart2, CalendarCheck
} from 'lucide-react';
import Link from 'next/link';

/* ─── Stagger helpers ────────────────────────────────────── */
const stagger = (i: number, base = 0.08) => ({ delay: i * base + 0.15 });

/* ─── Page Content ───────────────────────────────────────── */
const pageContent = {
    statusBar: {
        systemStatus: "All systems operational",
        connection: "Secure Connection"
    },
    tickers: [
        'Sports Day — Friday 14 Mar',
        'Term 2 Results published',
        'New transport routes added',
        'Parent meeting — Sat 10 AM',
        'Library hours extended',
    ],
    heroSection: {
        badge: "Used Daily · Not a Demo Product",
        headline: {
            line1: "One System.",
            line2: "Every School Day.",
            line3: "Zero Friction."
        },
        subheading: "Attendance, exams, fees, homework, transport, parent communication — handled from a single secure platform built for real school operations.",
        ctaPrimary: "See It in Action",
        ctaSecondary: "Explore Modules",
        trustStrip: [
            { icon: "Smartphone", label: 'Student & Parent Apps' },
            { icon: "Users", label: 'Teacher & Admin Portals' },
            { icon: "ShieldCheck", label: 'Secure & Reliable' }
        ]
    },
    dashboard: {
        header: {
            title: "School Command Center",
            subtitle: "Live overview • March 2026"
        },
        stats: [
            { label: 'Students Enrolled', value: '2,184', delta: '+12', color: '#60A5FA' },
            { label: 'Attendance Today', value: '93%', delta: '↑ 4%', color: '#34D399' },
            { label: 'Fees Collected', value: '₹8.4L', delta: 'This month', color: '#A78BFA' },
            { label: 'Active Staff', value: '138', delta: '4 on leave', color: '#FCD34D' }
        ],
        attendanceData: {
            title: "Weekly Attendance",
            delta: "↑ 6% this week",
            days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            bars: [72, 68, 81, 78, 89, 84, 93]
        },
        activityFeed: {
            title: "Live Activity",
            items: [
                { iconId: "CheckCircle", color: '#34D399', label: 'Attendance marked — Grade 9', time: '8:05 AM' },
                { iconId: "DollarSign", color: '#60A5FA', label: 'Fee collected — ₹4,200', time: '8:40 AM' },
                { iconId: "AlertCircle", color: '#F87171', label: 'Fee overdue — 3 students', time: '9:10 AM' },
                { iconId: "Bus", color: '#A78BFA', label: 'Bus #12 route updated', time: '9:30 AM' },
                { iconId: "BookOpen", color: '#FCD34D', label: 'HW uploaded — Mathematics', time: '9:55 AM' }
            ]
        },
        floatingPills: {
            notification: { title: "Parent Alert Sent", subtitle: "Bus #12 delayed · 2 min ago" },
            score: { title: "Avg Score ↑ 11%", subtitle: "Term 2 vs Term 1" },
            busTracker: { title: "Bus #12 · Live", subtitle: "En route to school" },
            fee: { title: "₹1.2L collected", subtitle: "Today · Auto-receipts sent" },
            exam: { title: "Exam Tomorrow", subtitle: "Maths — Grade 10" }
        },
        scrollNudge: "Explore"
    }
};

const iconMap: Record<string, React.ElementType> = {
    Smartphone, Users, ShieldCheck, CheckCircle, DollarSign, AlertCircle, Bus, BookOpen
};

export default function Hero() {
    /* Parallax cursor glow */
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const gx = useSpring(mx, { stiffness: 60, damping: 20 });
    const gy = useSpring(my, { stiffness: 60, damping: 20 });

    const handleMouse = (e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
    };

    /* Ticker */
    const [tickerIdx, setTickerIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setTickerIdx(i => (i + 1) % pageContent.tickers.length), 3000);
        return () => clearInterval(id);
    }, []);

    /* Live clock */
    const [time, setTime] = useState('');
    useEffect(() => {
        const tick = () =>
            setTime(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    /* Bus progress */
    const busProgress = useMotionValue(20);
    useEffect(() => {
        let dir = 1;
        const id = setInterval(() => {
            const prev = busProgress.get();
            const next = prev + dir * 0.8;
            if (next >= 85) dir = -1;
            if (next <= 15) dir = 1;
            busProgress.set(next);
        }, 60);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            onMouseMove={handleMouse}
            className="relative min-h-screen overflow-hidden bg-[#080D1A] flex flex-col"
        >
            {/* ── Cursor glow ── */}
            <motion.div
                className="pointer-events-none absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-0"
                style={{
                    left: gx, top: gy,
                    background: 'radial-gradient(circle, rgba(79,126,247,0.13) 0%, transparent 70%)',
                }}
            />

            {/* ── Grid texture ── */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* ── Ambient blobs ── */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-32 -left-32 w-[55vw] h-[55vw] rounded-full"
                    style={{ background: 'radial-gradient(circle, #1D3A8A55 0%, transparent 65%)' }}
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
                    className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full"
                    style={{ background: 'radial-gradient(circle, #5B21B644 0%, transparent 65%)' }}
                />
            </div>

            {/* ── Top status bar ── */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 border-b border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            >
                <div className="container mx-auto px-6 py-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4 text-white/40 font-dm-sans">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {pageContent.statusBar.systemStatus}
                        </span>
                        <span className="hidden sm:block">|</span>
                        <span className="hidden sm:flex items-center gap-1.5">
                            <Wifi className="w-3 h-3" />
                            {pageContent.statusBar.connection}
                        </span>
                    </div>

                    {/* Ticker */}
                    <div className="overflow-hidden h-5 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={tickerIdx}
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -16, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/50 font-medium"
                            >
                                📌 &nbsp;{pageContent.tickers[tickerIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-1.5 text-white/40 font-mono">
                        <Clock className="w-3 h-3" />
                        {time}
                    </div>
                </div>
            </motion.div>

            {/* ── Main content ── */}
            <div className="container mx-auto px-6 pt-20 pb-12 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center relative z-10">

                {/* ════ LEFT ════ */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8
                                   border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                            {pageContent.heroSection.badge}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <h1
                        className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 font-syne"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="block text-white"
                        >
                            {pageContent.heroSection.headline.line1}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.42 }}
                            className="block"
                            style={{
                                background: 'linear-gradient(120deg, #60A5FA 0%, #A78BFA 50%, #60A5FA 100%)',
                                backgroundSize: '200%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'shimmer 4s linear infinite',
                            }}
                        >
                            {pageContent.heroSection.headline.line2}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.54 }}
                            className="block text-white/30 text-4xl md:text-5xl mt-1"
                        >
                            {pageContent.heroSection.headline.line3}
                        </motion.span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="text-white/50 text-lg max-w-[480px] mb-10 leading-relaxed font-dm-sans"
                    >
                        {pageContent.heroSection.subheading}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 }}
                        className="flex flex-wrap gap-4 mb-14"
                    >
                        <Link
                            href="#contact"
                            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                                       font-semibold text-white overflow-hidden transition-all duration-300
                                       hover:shadow-[0_0_40px_rgba(96,165,250,0.35)] font-dm-sans"
                            style={{
                                background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                            }}
                        >
                            <span className="relative z-10">{pageContent.heroSection.ctaPrimary}</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <motion.span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
                            />
                        </Link>

                        <Link
                            href="#features"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold
                                       border border-white/10 text-white/70 hover:text-white hover:border-white/25
                                       bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur transition-all duration-300 font-dm-sans"
                        >
                            {pageContent.heroSection.ctaSecondary}
                        </Link>
                    </motion.div>

                    {/* Trust strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap gap-6"
                    >
                        {pageContent.heroSection.trustStrip.map((item, i) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div key={i} className="flex items-center gap-2 text-sm text-white/35 font-dm-sans">
                                    <Icon className="w-4 h-4 text-blue-400/70" />
                                    {item.label}
                                </div>
                            )
                        })}
                    </motion.div>
                </motion.div>

                {/* ════ RIGHT – DASHBOARD MOSAIC ════ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative h-[620px]"
                >

                    {/* ── Main dashboard card ── */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-x-8 top-0 bottom-0 rounded-[28px] overflow-hidden z-10
                                   border border-white/[0.08]"
                        style={{
                            background: 'linear-gradient(160deg, #0F172A 0%, #0D1526 100%)',
                            boxShadow: '0 40px 100px -20px rgba(37,99,235,0.35), 0 0 0 1px rgba(255,255,255,0.04)',
                        }}
                    >
                        {/* Card top bar */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]"
                            style={{ background: 'rgba(255,255,255,0.02)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <BarChart2 className="w-4 h-4 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold font-syne">
                                        {pageContent.dashboard.header.title}
                                    </p>
                                    <p className="text-white/30 text-[11px]">{pageContent.dashboard.header.subtitle}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                            </div>
                        </div>

                        <div className="p-5 space-y-4">
                            {/* Stat grid */}
                            <div className="grid grid-cols-4 gap-3">
                                {pageContent.dashboard.stats.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={stagger(i, 0.07)}
                                        className="rounded-2xl p-3.5 border border-white/[0.06]"
                                        style={{ background: `${s.color}0F` }}
                                    >
                                        <p className="text-[10px] text-white/40 mb-1.5 leading-tight">{s.label}</p>
                                        <p className="text-lg font-extrabold text-white leading-none mb-1 font-syne">{s.value}</p>
                                        <p className="text-[10px] font-semibold" style={{ color: s.color }}>{s.delta}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Attendance chart */}
                            <div className="rounded-2xl p-4 border border-white/[0.06] bg-white/[0.02]">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs font-semibold text-white/60">{pageContent.dashboard.attendanceData.title}</p>
                                    <span className="text-[11px] font-bold text-emerald-400">{pageContent.dashboard.attendanceData.delta}</span>
                                </div>
                                <div className="flex items-end gap-2 h-20">
                                    {pageContent.dashboard.attendanceData.bars.map((v, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${v}%` }}
                                                transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: 'easeOut' }}
                                                className="w-full rounded-t-lg"
                                                style={{
                                                    background: v >= 85
                                                        ? 'linear-gradient(to top, #2563EB, #60A5FA)'
                                                        : 'linear-gradient(to top, #1E3A5F, #2B4F8A)',
                                                    minHeight: 4,
                                                    maxHeight: '100%',
                                                }}
                                            />
                                            <span className="text-[9px] text-white/25">{pageContent.dashboard.attendanceData.days[i]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activity feed */}
                            <div className="rounded-2xl p-4 border border-white/[0.06] bg-white/[0.02]">
                                <p className="text-xs font-semibold text-white/60 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    {pageContent.dashboard.activityFeed.title}
                                </p>
                                <div className="space-y-2.5">
                                    {pageContent.dashboard.activityFeed.items.map((item, i) => {
                                        const Icon = iconMap[item.iconId];
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={stagger(i, 0.08)}
                                                className="flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} />
                                                    <span className="text-[12px] text-white/60 font-dm-sans">{item.label}</span>
                                                </div>
                                                <span className="text-[10px] text-white/25 shrink-0 ml-2 font-dm-sans">{item.time}</span>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Floating pill – top left (Notification) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -left-6 top-16 z-20 rounded-2xl px-4 py-3
                                   border border-white/[0.08] shadow-2xl backdrop-blur-xl
                                   flex items-center gap-3"
                        style={{
                            y: useSpring(useMotionValue(0), { stiffness: 40, damping: 15 }),
                            animation: 'float1 9s ease-in-out infinite',
                            background: 'rgba(15,23,42,0.85)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                        }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
                            <Bell className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold font-dm-sans">{pageContent.dashboard.floatingPills.notification.title}</p>
                            <p className="text-white/40 text-[11px] font-dm-sans">{pageContent.dashboard.floatingPills.notification.subtitle}</p>
                        </div>
                    </motion.div>

                    {/* ── Floating pill – top right (Score) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.85 }}
                        className="absolute -right-6 top-24 z-20 rounded-2xl px-4 py-3
                                   border border-white/[0.08] backdrop-blur-xl
                                   flex items-center gap-3"
                        style={{
                            background: 'rgba(15,23,42,0.85)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            animation: 'float2 12s ease-in-out infinite',
                        }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-emerald-400/10 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold font-dm-sans">{pageContent.dashboard.floatingPills.score.title}</p>
                            <p className="text-white/40 text-[11px] font-dm-sans">{pageContent.dashboard.floatingPills.score.subtitle}</p>
                        </div>
                    </motion.div>

                    {/* ── Floating mini card – Bus tracking ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="absolute -right-6 bottom-28 z-20 w-[200px] rounded-2xl p-4
                                   border border-white/[0.08] backdrop-blur-xl"
                        style={{
                            background: 'rgba(15,23,42,0.9)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            animation: 'float3 11s ease-in-out infinite',
                        }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <Bus className="w-3.5 h-3.5 text-purple-400" />
                            <p className="text-[11px] font-semibold text-white/60 font-dm-sans">{pageContent.dashboard.floatingPills.busTracker.title}</p>
                        </div>
                        <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                animate={{ width: ['20%', '75%', '40%', '80%'] }}
                                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute left-0 top-0 h-full rounded-full"
                                style={{ background: 'linear-gradient(to right, #7C3AED, #A78BFA)' }}
                            />
                        </div>
                        <p className="text-[10px] text-white/30 mt-1.5 font-dm-sans">{pageContent.dashboard.floatingPills.busTracker.subtitle}</p>
                    </motion.div>

                    {/* ── Floating pill – bottom left (Fee) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                        className="absolute -left-6 bottom-20 z-20 rounded-2xl px-4 py-3
                                   border border-white/[0.08] backdrop-blur-xl
                                   flex items-center gap-3"
                        style={{
                            background: 'rgba(15,23,42,0.9)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            animation: 'float1 10s ease-in-out infinite reverse',
                        }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-blue-400/10 flex items-center justify-center shrink-0">
                            <DollarSign className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold font-dm-sans">{pageContent.dashboard.floatingPills.fee.title}</p>
                            <p className="text-white/40 text-[11px] font-dm-sans">{pageContent.dashboard.floatingPills.fee.subtitle}</p>
                        </div>
                    </motion.div>

                    {/* ── Floating pill – center right (Exam) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.95 }}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 rounded-2xl px-4 py-3
                                   border border-white/[0.08] backdrop-blur-xl
                                   flex items-center gap-3"
                        style={{
                            background: 'rgba(15,23,42,0.9)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            animation: 'float2 13s ease-in-out infinite 2s',
                        }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-red-400/10 flex items-center justify-center shrink-0">
                            <CalendarCheck className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold font-dm-sans">{pageContent.dashboard.floatingPills.exam.title}</p>
                            <p className="text-white/40 text-[11px] font-dm-sans">{pageContent.dashboard.floatingPills.exam.subtitle}</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* ── Scroll nudge ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="relative z-10 flex justify-center pb-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                >
                    <span className="text-[11px] text-white/25 tracking-widest uppercase font-dm-sans">{pageContent.dashboard.scrollNudge}</span>
                    <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
                        <span className="w-1 h-2 rounded-full bg-white/30" />
                    </div>
                </motion.div>
            </motion.div>

            {/* ── Keyframes ── */}
            <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(18px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
        </section>
    );
}