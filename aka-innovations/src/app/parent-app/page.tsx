import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'Unified School Parent Companion Mobile App | AKA Innovations',
  description: 'Native white-labeled applications for parent communication tracking, academic reports updates, and secure fees payments.',
  alternates: { canonical: '/parent-app' }
};

export default function ParentAppPage() {
  return <SEOLandingTemplate config={seoPagesConfig.parentApp} />;
}
