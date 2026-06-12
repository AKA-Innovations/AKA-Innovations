import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'School Fee & Finance Management Software | AKA Innovations',
  description: 'Online payment gateways integration, automated balance dues alerts, tax-compliant receipt generation, and billing logs.',
  alternates: { canonical: '/school-fee-management' }
};

export default function SchoolFeeManagementPage() {
  return <SEOLandingTemplate config={seoPagesConfig.schoolFeeManagement} />;
}
