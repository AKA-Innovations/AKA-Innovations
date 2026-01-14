"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

// Team Avatars
import AdityaAvatar from "@/assets/team/aditya.png";
import KaranAvatar from "@/assets/team/karan.jpeg";
import AyushAvatar from "@/assets/team/ayush.png";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Aditya Kumar",
    role: "Co-Founder & Operations Lead",
    credibility: "Experience scaling operational workflows for early-stage startups using agile methodologies. Focused on resource optimization, client communication cycles, and ensuring project delivery milestones are met with precision. Background in cross-functional team coordination.",
    icon: AdityaAvatar,
    linkedin: "https://www.linkedin.com/in/aditya-kumar-010823227/",
  },
  {
    id: 2,
    name: "Karan Gangwar",
    role: "Co-Founder & Product Engineer",
    credibility: "Experience building full-stack web applications, scalable dashboards, and internal tools across healthcare, SaaS, and public-sector platforms. Strong focus on system design, UI/UX clarity, and translating business requirements into reliable software. Has worked on production systems using React, Spring Boot, AWS, and modern frontend stacks.",
    icon: KaranAvatar,
    linkedin: "https://www.linkedin.com/in/karan-gangwar-59aa8b225/",
  },
  {
    id: 3,
    name: "Ayush Sahu",
    role: "Co-Founder & Tech Lead",
    credibility: "Specialized in cloud-native architectures and backend scalability. Experience designing secure API ecosystems and database schemas for data-intensive applications. Deep expertise in Next.js, Node.js environment, and verified security practices for enterprise integration.",
    icon: AyushAvatar,
    linkedin: "https://www.linkedin.com/in/ayush-sahu-62b788225/",
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-swipe every 10 seconds (slower for reading)
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => prev + newDirection);
  };

  const getWrappedIndex = (index: number) => {
    return ((index % teamMembers.length) + teamMembers.length) % teamMembers.length;
  };

  const goToSlide = (index: number) => {
    const currentWrapped = getWrappedIndex(currentIndex);
    let diff = index - currentWrapped;

    // Adjust diff to find shortest path
    if (diff > teamMembers.length / 2) diff -= teamMembers.length;
    else if (diff < -teamMembers.length / 2) diff += teamMembers.length;

    if (diff === 0) return;

    setDirection(diff > 0 ? 1 : -1);
    setCurrentIndex(currentIndex + diff);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate visible circles (current, prev, next)
  const activeIndex = currentIndex;
  const getVisibleMembers = () => {
    const visible = [];
    const range = isMobile ? 1 : 2; // Show fewer items on mobile
    for (let i = -range; i <= range; i++) {
      const virtualIndex = activeIndex + i;
      const index = getWrappedIndex(virtualIndex);
      visible.push({
        member: teamMembers[index],
        offset: i,
        index,
        key: virtualIndex,
      });
    }
    return visible;
  };

  const circleConfig = (offset: number) => {
    if (isMobile) {
      // Mobile Configuration (Tighter packing, smaller icons)
      switch (offset) {
        case -1:
          return { size: 90, x: -90, zIndex: 3, opacity: 0.7 };
        case 0:
          return { size: 140, x: 0, zIndex: 10, opacity: 1 };
        case 1:
          return { size: 90, x: 90, zIndex: 3, opacity: 0.7 };
        default:
          return { size: 0, x: 0, zIndex: 0, opacity: 0 };
      }
    }

    // Desktop Configuration
    switch (offset) {
      case -2:
        return { size: 160, x: -260, zIndex: 1, opacity: 1 };
      case -1:
        return { size: 200, x: -150, zIndex: 3, opacity: 1 };
      case 0:
        return { size: 280, x: 0, zIndex: 10, opacity: 1 };
      case 1:
        return { size: 200, x: 150, zIndex: 3, opacity: 1 };
      case 2:
        return { size: 160, x: 260, zIndex: 1, opacity: 1 };
      default:
        return { size: 0, x: 0, zIndex: 0, opacity: 0 };
    }
  };

  return (
    <section id="team" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 overflow-hidden">

      {/* Small Team Disclaimer */}
      <div className="mb-16 text-center max-w-2xl mx-auto bg-blue-50/50 border border-blue-100 p-6 rounded-2xl backdrop-blur-sm">
        <p className="text-gray-800 font-medium text-lg leading-relaxed">
          &ldquo;We are a small, focused engineering team that works directly with founders and decision-makers — no handoffs, no middle layers.&rdquo;
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg">
          Meet the engineers building your product.
        </p>
      </div>

      {/* Description Card */}
      <div className="relative w-full max-w-3xl mb-16 h-[380px] md:h-[320px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 absolute top-0 left-0 w-full flex flex-col items-center text-center"
          >

            <div className="mb-4">
              <h3 className="text-gray-900 font-bold text-2xl mb-1">
                {teamMembers[getWrappedIndex(currentIndex)].name}
              </h3>
              <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wide">
                {teamMembers[getWrappedIndex(currentIndex)].role}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
              {teamMembers[getWrappedIndex(currentIndex)].credibility}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-auto">
              <a
                href={teamMembers[getWrappedIndex(currentIndex)].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-[#0077b5] transition-colors text-sm font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Circular Carousel - Swipeable */}
      <div className="relative w-full mt-12 max-w-4xl h-48 md:h-64 flex items-center justify-center mb-8 md:mb-12">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="flex items-center justify-center w-full cursor-grab active:cursor-grabbing"
        >
          {getVisibleMembers().map(({ member, offset, index, key }) => {
            const isActive = offset === 0;
            const { size, x, zIndex, opacity } = circleConfig(offset);

            return (
              <motion.div
                key={key}
                animate={{ x, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => offset !== 0 && goToSlide(index)}
                style={{ width: size, height: size, zIndex }}
                className={`absolute rounded-full border-4 ${isActive ? "border-white shadow-xl scale-105" : "border-gray-100 grayscale-[0.5]"
                  } bg-gray-200 overflow-hidden cursor-pointer transition-all duration-300`}
              >
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <Image src={member.icon} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="flex space-x-3">
        {teamMembers.map((member, index) => (
          <button
            key={member.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === getWrappedIndex(currentIndex)
              ? "w-8 bg-gray-800"
              : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to ${member.name}`}
          />
        ))}
      </div>
    </section>
  );
}
