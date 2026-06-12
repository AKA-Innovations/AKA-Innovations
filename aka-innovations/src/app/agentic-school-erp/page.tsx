import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'Agentic School ERP Category Operations | AKA Innovations',
  description: 'Next-generation school management system powered by secure, actionable AI agents. Delegate administrative tasks safely.',
  alternates: { canonical: '/agentic-school-erp' }
};

export default function AgenticSchoolERPPage() {
  return <SEOLandingTemplate config={seoPagesConfig.agenticSchoolErp} />;
}
