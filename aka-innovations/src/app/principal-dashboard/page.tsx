import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'Principal Dashboard for School Operations | AKA Innovations',
  description: 'Real-time school activity metrics, high-risk alert tags, and coordinator timetable approvals in one secure principal console.',
  alternates: { canonical: '/principal-dashboard' }
};

export default function PrincipalDashboardPage() {
  return <SEOLandingTemplate config={seoPagesConfig.principalDashboard} />;
}
