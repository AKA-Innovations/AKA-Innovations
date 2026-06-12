import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'Compare Legacy ERPs vs Agentic Platforms | AKA Innovations',
  description: 'Understand the core features gap between standard cloud logging software and actionable dual-operating school management ERPs.',
  alternates: { canonical: '/compare/traditional-school-erp' }
};

export default function TraditionalSchoolERPComparePage() {
  return <SEOLandingTemplate config={seoPagesConfig.traditionalSchoolErp} />;
}
