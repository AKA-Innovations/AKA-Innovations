"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalBinder } from "@/components/ui/LegalBinder";

const termsContent = {
    title: "Terms & Conditions",
    lastUpdated: "January 13, 2026",
    sections: [
        {
            id: "agreement",
            title: "1. Agreement to Terms",
            type: "text",
            content: [
                'These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong class="font-bold">AKA Innovations</strong> ("we," "us" or "our"), concerning your access to and use of our website and services.',
                'You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.'
            ]
        },
        {
            id: "ip",
            title: "2. Intellectual Property Rights",
            type: "text",
            content: [
                'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.'
            ]
        },
        {
            id: "reps",
            title: "3. User Representations",
            type: "list",
            content: [
                'By using the Site, you represent and warrant that:'
            ],
            listItems: [
                '(1) all registration information you submit will be true, accurate, current, and complete;',
                '(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;',
                '(3) you have the legal capacity and you agree to comply with these Terms of Use;',
                '(4) you are not a minor in the jurisdiction in which you reside;'
            ]
        },
        {
            id: "prohibited",
            title: "4. Prohibited Activities",
            type: "list",
            content: [
                'You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',
                'As a user of the Site, you agree not to:'
            ],
            listItems: [
                'Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
                'Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.'
            ]
        },
        {
            id: "disclaimer",
            title: "5. Disclaimer",
            type: "text",
            content: [
                'THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.'
            ]
        }
    ],
    contact: {
        title: "6. Contact Us",
        company: "AKA Innovations",
        addressLine1: "08 Triveni Tower 3rd Floor, Central Avenue",
        addressLine2: "GandhiPutla, Itwari",
        addressLine3: "Nagpur 440002, India"
    }
};

export default function TermsConditionsPage() {
    const pages = termsContent.sections.map((section) => (
        <div key={section.id} className="space-y-6">
            <h2 className="text-2xl font-bold font-syne uppercase mb-4">{section.title}</h2>
            {section.content.map((paragraph, idx) => (
                <p key={idx} className="font-dm-sans" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            {section.type === "list" && section.listItems && (
                <ul className="list-disc pl-6 space-y-2 font-dm-sans">
                    {section.listItems.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
            )}

            {section.id === "disclaimer" && (
                <>
                    <h2 className="text-2xl font-bold font-syne uppercase mb-4 mt-8">{termsContent.contact.title}</h2>
                    <address className="not-italic mt-4 bg-gray-50 p-6 rounded-lg border border-gray-100 uppercase font-dm-sans">
                        <strong>{termsContent.contact.company}</strong><br />
                        {termsContent.contact.addressLine1}<br />
                        {termsContent.contact.addressLine2}<br />
                        {termsContent.contact.addressLine3}
                    </address>
                </>
            )}
        </div>
    ));

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#e6e8eb]">
            <Header />
            <main className="grow pt-20">
                <LegalBinder
                    title={termsContent.title}
                    lastUpdated={termsContent.lastUpdated}
                    pages={pages}
                />
            </main>
            <Footer />
        </div>
    );
}
