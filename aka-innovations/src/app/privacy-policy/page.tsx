"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalBinder } from "@/components/ui/LegalBinder";

export default function PrivacyPolicyPage() {
    const pages = [
        // Page 1: Intro
        <div key="intro" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">1. Introduction</h2>
            <p>
                Welcome to AKA Innovations ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us.
            </p>
            <p>
                This Privacy Policy applies to all information collected through our website (such as akainnovations.com), and/or any related services, sales, marketing or events (we refer to them collectively in this Privacy Policy as the "Services").
            </p>
            <p>
                Please read this privacy notice carefully as it will help you better understand what we do with the information that we collect.
            </p>
        </div>,

        // Page 2: Information We Collect
        <div key="collection" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">2. Information We Collect</h2>
            <p>
                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </p>
            <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                <li><strong>Credentials:</strong> We collect passwords, password hints, and similar security information used for authentication and account access.</li>
            </ul>
        </div>,

        // Page 3: How We Use Information
        <div key="use" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">3. How We Use Your Information</h2>
            <p>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <p>We use the information we collect or receive:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
            </ul>
        </div>,

        // Page 4: Data Security
        <div key="security" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">4. Data Security</h2>
            <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
            <p>
                You should only access the services within a secure environment.
            </p>
        </div>,

        // Page 5: Contact
        <div key="contact" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">5. Contact Us</h2>
            <p>
                If you have questions or comments about this policy, you may contact us via the Contact page or by post to:
            </p>
            <div className="mt-8 p-6 border border-gray-900 bg-gray-50/50 text-sm">
                <p className="font-bold uppercase tracking-wider mb-2">AKA Innovations</p>
                <p>08 Triveni Tower 3rd Floor, Central Avenue</p>
                <p>GandhiPutla, Itwari</p>
                <p>Nagpur 440002, India</p>
            </div>
        </div>
    ];

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#e6e8eb]">
            <Header />
            <main className="grow pt-20">
                <LegalBinder
                    title="Privacy Policy"
                    lastUpdated="January 13, 2026"
                    pages={pages}
                />
            </main>
            <Footer />
        </div>
    );
}
