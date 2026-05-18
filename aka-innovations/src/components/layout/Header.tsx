"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About us", href: "/#team" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHealthPage = pathname === "/producthealth";
  const isSchoolErpPage = pathname === "/school-erp";
  const isProductPage = isHealthPage || isSchoolErpPage;
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const productLinks = [
    {
      title: "School ERP",
      href: "/school-erp",
      desc: "Complete digital ecosystem for modern educational institutions.",
      icon: "🎓"
    },
    {
      title: "Health Connect",
      href: "/producthealth",
      desc: "AI-powered health monitoring and management system.",
      icon: "🏥"
    }
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hidden ? "hidden" : "visible",
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-white/10"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative">
        <Link href="/" className="text-md lg:text-2xl font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2 z-20">
          <Image
            src="/logo.svg"
            alt="AKA Innovations Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          {!isProductPage && <span>AKA Innovations</span>}
          {isHealthPage && (
            <>
              <span className="text-md lg:text-2xl ml-2 text-slate-400">/</span>
              <span className="text-md lg:text-2xl text-[--color-health-cyan]">Health-Connect</span>
            </>
          )}
          {isSchoolErpPage && (
            <>
              <span className="text-md lg:text-2xl ml-2 text-slate-400">/</span>
              <span className="text-md lg:text-2xl text-blue-600">School ERP</span>
            </>
          )}
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 h-full">
          {navItems.map((item) => {
            if (item.name === "Products") {
              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredProduct(true)}
                  onMouseLeave={() => setHoveredProduct(false)}
                >
                  <Link
                    href="/products"
                    className={cn(
                      "text-[15px] font-medium transition-colors flex items-center gap-1",
                      (pathname === "/products" || pathname === "/school-erp" || pathname === "/producthealth") || hoveredProduct
                        ? "text-[#634c9f] dark:text-[#A78BFA] font-semibold"
                        : "text-[#1a1a1a] dark:text-slate-200 hover:text-[#634c9f] dark:hover:text-[#A78BFA]"
                    )}
                  >
                    Products
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", hoveredProduct ? "rotate-180" : "")} />
                  </Link>

                  <AnimatePresence>
                    {hoveredProduct && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[400px]"
                      >
                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                          <div className="flex flex-col gap-2">
                            {productLinks.map((product) => (
                              <Link
                                key={product.href}
                                href={product.href}
                                className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                                  {product.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {product.title}
                                  </div>
                                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-tight mt-1">
                                    {product.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  isActive
                    ? "text-[#634c9f] dark:text-[#A78BFA] font-semibold"
                    : "text-[#1a1a1a] dark:text-slate-200 hover:text-[#634c9f] dark:hover:text-[#A78BFA]"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Action */}
        <div className="flex items-center gap-4 z-20">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5 text-gray-200" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
          )}

          <Link href="/contact">
            <button className="hidden md:block border border-[#634c9f] dark:border-[#A78BFA] text-[#634c9f] dark:text-[#A78BFA] px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#634c9f] hover:text-white dark:hover:bg-[#A78BFA] dark:hover:text-slate-900 transition-all hover:opacity-90 hover:cursor-pointer" >
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-black dark:text-white" /> : <Menu className="h-5 w-5 text-black dark:text-white" />}
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
            className="md:hidden border-b border-border bg-white dark:bg-slate-900 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-2 w-full">
              {navItems.map((item) => {
                if (item.name === "Products") {
                  return (
                    <div key={item.name} className="flex flex-col gap-2 py-2">
                      <Link
                        href="/products"
                        className={cn(
                          "text-lg font-medium px-2 transition-colors",
                          pathname === "/products" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        Products
                      </Link>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                        {productLinks.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className={cn(
                              "text-base font-medium py-2 px-2 transition-colors rounded-lg",
                              pathname === product.href ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-2 px-2 rounded-lg transition-colors",
                      isActive ? "bg-slate-50 dark:bg-slate-800 text-[#634c9f] dark:text-[#A78BFA]" : "text-[#1a1a1a] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                <button className="w-full border border-[#634c9f] dark:border-[#A78BFA] text-[#634c9f] dark:text-[#A78BFA] px-6 py-3 rounded-xl text-base font-medium hover:bg-[#634c9f] hover:text-white dark:hover:bg-[#A78BFA] dark:hover:text-slate-900 transition-all">
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
