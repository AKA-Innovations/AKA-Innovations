import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#e8eaed] py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              AKA Innovations
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
                href="#"
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
      </div>
    </footer>
  );
}
