import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'AI School ERP Software & Automation | AKA Innovations',
  description: 'A complete school ERP featuring optional AI automation. Seamlessly switch between traditional dashboards and autonomous AI agents.',
  alternates: { canonical: '/ai-school-erp' }
};

export default function AISchoolERPPage() {
  return <SEOLandingTemplate config={seoPagesConfig.aiSchoolErp} />;
}
