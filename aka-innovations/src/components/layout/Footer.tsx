import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/assets/logo.svg"; // Import SVG as component
import Image from "next/image";
import { FooterMetrics } from "./FooterMetrics";

export function Footer() {
  return (
    <footer className="bg-[#e8eaed] py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="AKA Innovations Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span>AKA Innovations</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
              Building intelligent solutions for the modern enterprise. Scale your business with our cutting-edge tech.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aka-innovations"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/#hero"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="hover:text-gray-900 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="hover:text-gray-900 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-gray-900 transition-colors"
                >
                  Why us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/producthealth"
                  className="hover:text-gray-900 transition-colors"
                >
                  Product Health Check
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  Web Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-gray-900 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Visitor Metrics */}
        <FooterMetrics />

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} AKA Innovations. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
