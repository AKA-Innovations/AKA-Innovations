import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'School Management System Software India | AKA Innovations',
  description: 'CBSE, ICSE, and local Board-compliant school operating systems. Reconcile fee structures, registrations, and grades audits in India.',
  alternates: { canonical: '/school-management-system-india' }
};

export default function SchoolManagementSystemIndiaPage() {
  return <SEOLandingTemplate config={seoPagesConfig.schoolManagementSystemIndia} />;
}
