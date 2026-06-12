import React from 'react';
import type { Metadata } from 'next';
import SEOLandingTemplate from '@/components/school-erp/SEOLandingTemplate';
import { seoPagesConfig } from '@/data/seoPagesConfig';

export const metadata: Metadata = {
  title: 'School Attendance Management System with AI | AKA Innovations',
  description: 'Log daily class registers in seconds with optional AI voice inputs. Auto-alert parents of absences instantly.',
  alternates: { canonical: '/attendance-management' }
};

export default function AttendanceManagementPage() {
  return <SEOLandingTemplate config={seoPagesConfig.attendanceManagement} />;
}
