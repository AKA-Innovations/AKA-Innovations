'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen, ClipboardList, Users, BarChart2, Bell, Calendar,
    DollarSign, Settings, TrendingUp, Award, Bus, MessageSquare,
    CheckCircle, Clock, FileText, PieChart
} from 'lucide-react';

/* ─── Page Content ───────────────────────────────────────── */
const pageContent = {
    badge: "Role-Based Dashboards",
    heading: {
        line1: "Operational Power for",
        line2: "Every Role, Every Day"
    },
    description: "Tailored dashboards for teachers, admins, and students — each built around their specific workflows, not a one-size-fits-all view.",
    floatingBadges: {
        topRight: { title: "Live Alerts", subtitle: "3 new today" },
        bottomLeft: { title: "Performance ↑", subtitle: "vs last quarter" },
        midRight: { title: "Parents notified" }
    }
};

/* ─── Tab Data ─────────────────────────────────────────── */
const tabs = [
    {
        id: 'teacher',
        label: 'Teacher',
        icon: BookOpen,
        accent: '#4F7EF7',
        accentLight: 'rgba(79,126,247,0.12)',
        title: 'Empower Teachers, Reduce Workload',
        description:
            'Built around real classroom routines — attendance, homework, evaluations, and student insights without admin friction.',
        features: [
            { icon: ClipboardList, label: 'Quick Attendance & Marks Entry', value: '2 min avg' },
            { icon: FileText, label: 'Homework & Material Uploads', value: '↑ 34%' },
            { icon: TrendingUp, label: 'Student Performance Tracking', value: 'Live' },
        ],
        // Right-side mock dashboard data
        dashboard: {
            heading: 'Teacher Dashboard',
            stats: [
                { label: 'Classes Today', value: '6', sub: 'Next: 10:30 AM' },
                { label: 'Pending Tasks', value: '4', sub: '2 urgent' },
                { label: 'Avg Score', value: '78%', sub: '↑ from last term' },
            ],
            list: {
                title: 'Today\'s Classes',
                items: [
                    { name: 'Mathematics – X A', time: '08:00', status: 'done' },
                    { name: 'Physics – XII B', time: '10:30', status: 'next' },
                    { name: 'Mathematics – XI C', time: '12:00', status: 'later' },
                    { name: 'Lab Session – X A', time: '14:00', status: 'later' },
                ],
            },
            activity: [
                { label: 'Attendance marked', time: '8:05 AM' },
                { label: 'HW uploaded – Calculus', time: '7:40 AM' },
                { label: 'Result published – X A', time: 'Yesterday' },
            ],
        },
    },
    {
        id: 'admin',
        label: 'Admin',
        icon: Settings,
        accent: '#7C5CFC',
        accentLight: 'rgba(124,92,252,0.12)',
        title: 'Complete Operational Control',
        description:
            'A centralized command system to manage academics, users, fees, transport, and institution-wide workflows.',
        features: [
            { icon: Users, label: 'Role & User Management', value: '1,240 users' },
            { icon: DollarSign, label: 'Fees, Transport & Config', value: '₹12.4L due' },
            { icon: PieChart, label: 'Institution-wide Reports', value: 'Real-time' },
        ],
        dashboard: {
            heading: 'Admin Dashboard',
            stats: [
                { label: 'Total Students', value: '1,842', sub: '+12 this month' },
                { label: 'Fee Collection', value: '82%', sub: '↑ 6% vs last mo.' },
                { label: 'Staff Active', value: '134', sub: '6 on leave' },
            ],
            list: {
                title: 'Pending Actions',
                items: [
                    { name: 'Fee defaulters – Grade 9', time: '12 students', status: 'urgent' },
                    { name: 'Transport route update', time: '3 routes', status: 'next' },
                    { name: 'New admission approvals', time: '8 pending', status: 'later' },
                    { name: 'Staff leave requests', time: '2 pending', status: 'later' },
                ],
            },
            activity: [
                { label: 'Circular published – Sports Day', time: '9:12 AM' },
                { label: 'Fee reminder sent (Auto)', time: '8:00 AM' },
                { label: 'New teacher account created', time: 'Yesterday' },
            ],
        },
    },
    {
        id: 'student',
        label: 'Student',
        icon: Award,
        accent: '#0EC98C',
        accentLight: 'rgba(14,201,140,0.12)',
        title: 'A Smarter Student Experience',
        description:
            'Students stay on top of assignments, results, schedules, and school announcements — all in one focused view.',
        features: [
            { icon: Calendar, label: 'Timetable & Exam Schedule', value: 'Synced' },
            { icon: Bell, label: 'Homework & Due-Date Alerts', value: '3 due' },
            { icon: BarChart2, label: 'Marks & Progress Reports', value: 'Live' },
        ],
        dashboard: {
            heading: 'Student Dashboard',
            stats: [
                { label: 'Attendance', value: '91%', sub: '↑ this week' },
                { label: 'Assignments', value: '3', sub: 'due this week' },
                { label: 'Rank', value: '#7', sub: 'out of 48' },
            ],
            list: {
                title: 'Upcoming',
                items: [
                    { name: 'Math Assignment', time: 'Due Tomorrow', status: 'urgent' },
                    { name: 'Physics Test', time: 'Mon, 10 Mar', status: 'next' },
                    { name: 'Chemistry Lab', time: 'Wed, 12 Mar', status: 'later' },
                    { name: 'English Essay', time: 'Fri, 14 Mar', status: 'later' },
                ],
            },
            activity: [
                { label: 'Result published – Maths Unit 3', time: '10:00 AM' },
                { label: 'New HW – Chemistry Chapter 5', time: '9:30 AM' },
                { label: 'Holiday announced – 15 Mar', time: 'Yesterday' },
            ],
        },
    },
];

/* ─── Status badge colours ──────────────────────────────── */
const statusMap: Record<string, { dot: string; bg: string; label: string }> = {
    done: { dot: '#0EC98C', bg: 'rgba(14,201,140,0.10)', label: 'Done' },
    next: { dot: '#4F7EF7', bg: 'rgba(79,126,247,0.10)', label: 'Next' },
    later: { dot: '#AAB0C0', bg: 'rgba(170,176,192,0.10)', label: 'Later' },
    urgent: { dot: '#F7604F', bg: 'rgba(247,96,79,0.10)', label: 'Urgent' },
};

/* ─── Floating card variants ────────────────────────────── */
const floatA = { animate: { y: [0, -14, 0] }, transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' as const } };
const floatB = { animate: { y: [0, 18, 0] }, transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' as const } };
const floatC = { animate: { y: [0, -10, 0] }, transition: { duration: 11, repeat: Infinity, ease: 'easeInOut' as const } };

/* ════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════ */
export default function DashboardHighlights() {
    const [activeTab, setActiveTab] = useState('teacher');
    const current = tabs.find(t => t.id === activeTab)!;
    const { accent, accentLight, dashboard: dash } = current;

    return (
        <section className="relative py-28 bg-[#F0F2F8] overflow-hidden">

            {/* ── Ambient blobs ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.7, 0.55] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ background: `radial-gradient(ellipse at 30% 50%, ${accent}22 0%, transparent 70%)` }}
                    className="absolute inset-0"
                />
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-[#c5cfe8]/30"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ══════════════ LEFT ══════════════ */}
                    <div>
                        {/* Pill badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full
                                       bg-white border border-[#DDE2EE] shadow-sm text-xs font-semibold tracking-wide font-dm-sans"
                            style={{ color: accent }}
                        >
                            <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
                            {pageContent.badge}
                        </motion.div>

                        <h2 className="text-4xl font-extrabold text-[#1C2237] mb-4 leading-tight font-syne">
                            {pageContent.heading.line1}<br />
                            <span style={{ color: accent }}>{pageContent.heading.line2}</span>
                        </h2>
                        <p className="text-[#6B7492] mb-10 max-w-md leading-relaxed font-dm-sans">
                            {pageContent.description}
                        </p>

                        {/* Tab switcher */}
                        <div className="inline-flex gap-1 p-1 mb-10 rounded-2xl bg-white border border-[#DDE2EE] shadow-sm">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="relative px-5 py-2.5 rounded-xl text-sm font-semibold
                                                   flex items-center gap-2 transition-colors duration-200 font-dm-sans"
                                        style={{ color: isActive ? '#fff' : '#6B7492' }}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-xl"
                                                style={{ background: tab.accent }}
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <Icon className="w-4 h-4 relative z-10 shrink-0" />
                                        <span className="relative z-10">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3 className="text-2xl font-bold text-[#1C2237] mb-3 font-syne">{current.title}</h3>
                                <p className="text-[#6B7492] max-w-md mb-8 leading-relaxed font-dm-sans">{current.description}</p>

                                <div className="space-y-4">
                                    {current.features.map((f, i) => {
                                        const FIcon = f.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                                className="flex items-center gap-4 p-4 bg-white rounded-2xl
                                                           border border-[#DDE2EE] shadow-sm"
                                            >
                                                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                                    style={{ background: accentLight }}>
                                                    <FIcon className="w-5 h-5" style={{ color: accent }} />
                                                </div>
                                                <span className="text-[#1C2237] font-medium flex-1 font-dm-sans">{f.label}</span>
                                                <span className="text-xs font-bold px-3 py-1 rounded-full font-dm-sans"
                                                    style={{ background: accentLight, color: accent }}>
                                                    {f.value}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* ══════════════ RIGHT – MOCK DASHBOARD ══════════════ */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -20 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            {/* ── Main card ── */}
                            <div className="relative bg-white rounded-[28px] border border-[#DDE2EE]
                                            shadow-[0_40px_100px_-30px_rgba(28,34,55,0.18)]
                                            overflow-hidden"
                            >
                                {/* Header bar */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F2F8]"
                                    style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}06)` }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                                            style={{ background: accent }}>
                                            {React.createElement(current.icon, { className: 'w-4 h-4 text-white' })}
                                        </div>
                                        <span className="font-bold text-[#1C2237] font-syne">{dash.heading}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-[#F7604F]" />
                                        <span className="w-3 h-3 rounded-full bg-[#F7C04F]" />
                                        <span className="w-3 h-3 rounded-full bg-[#0EC98C]" />
                                    </div>
                                </div>

                                <div className="p-6 space-y-5">
                                    {/* Stats row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {dash.stats.map((s, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.07 + 0.15 }}
                                                className="rounded-2xl p-4"
                                                style={{ background: i === 0 ? `linear-gradient(135deg, ${accent}, ${accent}CC)` : '#F6F8FC' }}
                                            >
                                                <p className="text-xs mb-1 font-dm-sans" style={{ color: i === 0 ? 'rgba(255,255,255,0.75)' : '#6B7492' }}>
                                                    {s.label}
                                                </p>
                                                <p className="text-xl font-extrabold leading-none font-syne" style={{ color: i === 0 ? '#fff' : '#1C2237' }}>
                                                    {s.value}
                                                </p>
                                                <p className="text-[11px] mt-1 font-dm-sans" style={{ color: i === 0 ? 'rgba(255,255,255,0.6)' : '#AAB0C0' }}>
                                                    {s.sub}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* List */}
                                    <div className="bg-[#F6F8FC] rounded-2xl p-4">
                                        <p className="text-xs font-semibold text-[#6B7492] mb-3 uppercase tracking-wider">
                                            {dash.list.title}
                                        </p>
                                        <div className="space-y-2">
                                            {dash.list.items.map((item, i) => {
                                                const st = statusMap[item.status];
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.06 + 0.25 }}
                                                        className="flex items-center justify-between bg-white
                                                                   rounded-xl px-4 py-2.5 border border-[#EEF0F7]"
                                                    >
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: st.dot }} />
                                                            <span className="text-sm font-medium text-[#1C2237]">{item.name}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs text-[#AAB0C0]">{item.time}</span>
                                                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                                                                style={{ background: st.bg, color: st.dot }}>
                                                                {st.label}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Activity feed */}
                                    <div>
                                        <p className="text-xs font-semibold text-[#6B7492] mb-2.5 uppercase tracking-wider flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5" />Recent Activity
                                        </p>
                                        <div className="space-y-2">
                                            {dash.activity.map((a, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: i * 0.07 + 0.35 }}
                                                    className="flex items-center justify-between text-sm"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
                                                        <span className="text-[#1C2237]">{a.label}</span>
                                                    </div>
                                                    <span className="text-[11px] text-[#AAB0C0]">{a.time}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accent}, ${accent}44)` }} />
                            </div>

                            {/* ── Floating badge – top right ── */}
                            <motion.div {...floatA}
                                className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-xl
                                           border border-[#DDE2EE] px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                                    style={{ background: accentLight }}>
                                    <Bell className="w-4 h-4" style={{ color: accent }} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#1C2237] font-dm-sans">{pageContent.floatingBadges.topRight.title}</p>
                                    <p className="text-[11px] text-[#AAB0C0] font-dm-sans">{pageContent.floatingBadges.topRight.subtitle}</p>
                                </div>
                            </motion.div>

                            {/* ── Floating badge – bottom left ── */}
                            <motion.div {...floatB}
                                className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl
                                           border border-[#DDE2EE] px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                                    style={{ background: 'rgba(14,201,140,0.12)' }}>
                                    <TrendingUp className="w-4 h-4 text-[#0EC98C]" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#1C2237] font-dm-sans">{pageContent.floatingBadges.bottomLeft.title}</p>
                                    <p className="text-[11px] text-[#AAB0C0] font-dm-sans">{pageContent.floatingBadges.bottomLeft.subtitle}</p>
                                </div>
                            </motion.div>

                            {/* ── Floating badge – mid right ── */}
                            <motion.div {...floatC}
                                className="absolute top-1/2 -translate-y-1/2 -right-8 bg-white rounded-2xl
                                           shadow-xl border border-[#DDE2EE] px-4 py-3 flex items-center gap-2"
                            >
                                <MessageSquare className="w-4 h-4" style={{ color: accent }} />
                                <p className="text-xs font-semibold text-[#1C2237] font-dm-sans">{pageContent.floatingBadges.midRight.title}</p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}