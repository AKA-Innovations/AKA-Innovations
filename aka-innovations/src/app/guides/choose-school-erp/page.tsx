import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'How to Choose the Best School ERP Software | AKA Innovations',
  description: 'An evaluation checklist for decision makers covering data security, migration costs, and optional AI guardrails.',
  alternates: { canonical: '/guides/choose-school-erp' }
};

export default function ChooseSchoolERPGuidePage() {
  return <SEOLandingTemplate config={seoPagesConfig.chooseSchoolErp} />;
}
