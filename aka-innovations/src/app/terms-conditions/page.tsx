"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalBinder } from "@/components/ui/LegalBinder";

export default function TermsConditionsPage() {
    const pages = [
        // Page 1: Agreement
        <div key="agreement" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">1. Agreement to Terms</h2>
            <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <span className="font-bold">AKA Innovations</span> ("we," "us" or "our"), concerning your access to and use of our website and services.
            </p>
            <p>
                You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
        </div>,

        // Page 2: Intellectual Property
        <div key="ip" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">2. Intellectual Property Rights</h2>
            <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
            </p>
        </div>,

        // Page 3: User Representations
        <div key="reps" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">3. User Representations</h2>
            <p>
                By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>(1) all registration information you submit will be true, accurate, current, and complete;</li>
                <li>(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                <li>(3) you have the legal capacity and you agree to comply with these Terms of Use;</li>
                <li>(4) you are not a minor in the jurisdiction in which you reside;</li>
            </ul>
        </div>,

        // Page 4: Prohibited Activities
        <div key="prohibited" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">4. Prohibited Activities</h2>
            <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p>As a user of the Site, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
            </ul>
        </div>,

        // Page 5: Disclaimer & Contact
        <div key="disclaimer" className="space-y-6">
            <h2 className="text-2xl font-bold uppercase mb-4">5. Disclaimer</h2>
            <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
            </p>

            <h2 className="text-2xl font-bold uppercase mb-4 mt-8">6. Contact Us</h2>
            <address className="not-italic mt-4 bg-gray-50 p-6 rounded-lg border border-gray-100 uppercase">
                <strong>AKA Innovations</strong><br />
                08 Triveni Tower 3rd Floor, Central Avenue<br />
                GandhiPutla, Itwari<br />
                Nagpur 440002, India
            </address>
        </div>

    ];

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#e6e8eb]">
            <Header />
            <main className="grow pt-20">
                <LegalBinder
                    title="Terms & Conditions"
                    lastUpdated="January 13, 2026"
                    pages={pages}
                />
            </main>
            <Footer />
        </div>
    );
}
