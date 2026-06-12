import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'What Is School ERP? The Definitive Guide | AKA Innovations',
  description: 'An educational guide breaking down Student Information Systems, Cloud databases, and school automation tools.',
  alternates: { canonical: '/guides/what-is-school-erp' }
};

export default function WhatIsSchoolERPGuidePage() {
  return <SEOLandingTemplate config={seoPagesConfig.whatIsSchoolErp} />;
}
