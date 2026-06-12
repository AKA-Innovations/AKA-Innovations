import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'Manual Administration vs AI Operating Systems | AKA Innovations',
  description: 'Side-by-side math comparing school hours spent on manual entries vs zero-click AI-driven workflows.',
  alternates: { canonical: '/compare/manual-vs-ai-school' }
};

export default function ManualVsAISchoolComparePage() {
  return <SEOLandingTemplate config={seoPagesConfig.manualVsAiSchool} />;
}
