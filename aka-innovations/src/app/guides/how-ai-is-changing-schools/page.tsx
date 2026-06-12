import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'How AI Is Changing School Management Software | AKA Innovations',
  description: 'Learn about the impact of automation, role-based agents, and strict sandbox controls in modern campus software.',
  alternates: { canonical: '/guides/how-ai-is-changing-schools' }
};

export default function HowAIIsChangingSchoolsGuidePage() {
  return <SEOLandingTemplate config={seoPagesConfig.howAiIsChangingSchools} />;
}
