"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/producthealth" },
  { name: "About us", href: "/#about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHealthPage = pathname === "/producthealth";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="container mx-auto px-12 h-20 flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-2">
          {isHealthPage ? (
            <>
              <span className="">AKA Innovations / </span>
              <span className="text-(--color-health-cyan)">Health-Connect</span>
            </>
          ) : (
            "AKA Innovations"
          )}
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  isActive || (item.href === "/producthealth" && isHealthPage)
                    ? "text-[#634c9f] font-semibold"
                    : "text-[#1a1a1a] hover:text-[#634c9f]"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Action */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border border-[#634c9f] text-[#634c9f] px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#634c9f] hover:text-white transition-all hover:opacity-90 hover:cursor-pointer" >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-2 transition-colors",
                      isActive ? "text-primary" : "hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <button className="bg-primary text-primary-foreground w-full py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
