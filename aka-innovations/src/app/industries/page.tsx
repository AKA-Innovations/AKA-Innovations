import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryDetailGrid } from "@/components/industries/IndustryDetailGrid";

export const metadata: Metadata = {
    title: "Industries We Serve | AKA Innovations",
    description: "Explore the diverse industries we transform with digital engineering. From Finance to Healthcare, we build solutions that scale.",
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-[#f5f5f7]">
            <Header />

            <main className="grow pt-32 pb-20">
                {/* Simple Text Hero */}
                <section className="text-center px-4 mb-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                        Transforming <span className="text-[#634c9f]">Industries</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We bring deep domain expertise and engineering excellence to solve complex challenges across key global sectors.
                    </p>
                </section>

                <IndustryDetailGrid />
            </main>

            <Footer />
        </div>
    );
}
