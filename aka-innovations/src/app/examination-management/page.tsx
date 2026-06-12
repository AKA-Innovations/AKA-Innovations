import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'School Examination & Grading Software Systems | AKA Innovations',
  description: 'Reconcile seating charts, generate conflict-free exam timetables, and format board-compliant grading cards automatically.',
  alternates: { canonical: '/examination-management' }
};

export default function ExaminationManagementPage() {
  return <SEOLandingTemplate config={seoPagesConfig.examinationManagement} />;
}
