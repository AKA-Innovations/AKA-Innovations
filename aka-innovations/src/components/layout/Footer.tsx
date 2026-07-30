import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FooterMetrics } from "./FooterMetrics";

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/90 py-16 border-t border-slate-200 dark:border-slate-800 transition-colors font-geist">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Single Unified 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="AKA Innovations Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span>AKA Innovations</span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Building intelligent solutions for the modern enterprise. Scale your business with our cutting-edge tech.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-1">
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/akainnovations.com"
                className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Why us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (with Indented Sub-Links under School ERP) */}
          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">Products</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              
              {/* Product 1: School ERP with Indented Sub-links */}
              <li>
                <Link href="/school-erp" className="font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                  🎓 School ERP Ecosystem
                </Link>
                
                {/* Indented Sub-links Tree */}
                <ul className="pl-3.5 mt-2 border-l-2 border-slate-300 dark:border-slate-700 space-y-1.5 text-[11px]">
                  <li>
                    <Link href="/ai-school-erp" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • AI School ERP
                    </Link>
                  </li>
                  <li>
                    <Link href="/agentic-school-erp" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Agentic AI Engine
                    </Link>
                  </li>
                  <li>
                    <Link href="/attendance-management" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Attendance System
                    </Link>
                  </li>
                  <li>
                    <Link href="/examination-management" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Exam & Grading
                    </Link>
                  </li>
                  <li>
                    <Link href="/school-fee-management" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Fee & Financials
                    </Link>
                  </li>
                  <li>
                    <Link href="/parent-app" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Parent Mobile App
                    </Link>
                  </li>
                  <li>
                    <Link href="/principal-dashboard" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • Principal Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/school-management-system-india" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors block">
                      • CBSE / ICSE India ERP
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Product 2: Health-Connect */}
              <li className="pt-2">
                <Link href="/producthealth" className="font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors block">
                  🏥 Health-Connect App
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Web Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/healthcare-software-development" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Healthcare Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Guides */}
          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">Legal & Guides</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <Link href="/guides/what-is-school-erp" className="hover:text-slate-900 dark:hover:text-white transition-colors block">
                  What is School ERP?
                </Link>
              </li>
              <li>
                <Link href="/compare/traditional-school-erp" className="hover:text-slate-900 dark:hover:text-white transition-colors block">
                  Traditional vs AI ERP
                </Link>
              </li>
              <li>
                <Link href="/guides/choose-school-erp" className="hover:text-slate-900 dark:hover:text-white transition-colors block">
                  How to Choose ERP
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Visitor Metrics */}
        <FooterMetrics />

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} AKA Innovations. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
