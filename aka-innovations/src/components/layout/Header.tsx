"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/producthealth" },
  { name: "About us", href: "/#team" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHealthPage = pathname === "/producthealth";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative">
        <Link href="/" className="text-md lg:text-2xl font-bold text-[#1a1a1a] flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="AKA Innovations Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          {!isHealthPage && <span>AKA Innovations</span>}
          {isHealthPage && (
            <>
              <span className="text-md lg:text-2xl ml-2">/ </span>
              <span className="text-md lg:text-2xl text-(--color-health-cyan)">Health-Connect</span>
            </>
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
          <Link href="/contact">
            <button className="hidden md:block border border-[#634c9f] text-[#634c9f] px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#634c9f] hover:text-white transition-all hover:opacity-90 hover:cursor-pointer" >
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
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
            className="md:hidden border-b border-border bg-background flex items-center justify-center text-black/80 font-medium bg-white"
          >
            <nav className="flex flex-col p-4 gap-4 w-full text-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-2 transition-colors",
                      isActive ? "text-[#634c9f]" : "hover:text-[#634c9f]"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 border border-[#634c9f] text-[#634c9f] px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#634c9f] hover:text-white transition-all">
                  Contact Us
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
