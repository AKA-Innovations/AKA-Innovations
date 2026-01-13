"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Facebook, Linkedin } from "lucide-react";
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
    description:
      "Aditya is the operational backbone of AKA Innovations, ensuring seamless execution across all projects. He combines strategic resource management with agile methodologies to streamline workflows and optimize delivery timelines. His expertise in cross-functional coordination and client relationship management guarantees that projects stay on track and within budget. Aditya is dedicated to fostering a culture of operational excellence, ensuring that our internal processes translate into superior client outcomes and reliability.",
    icon: AdityaAvatar,
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/aditya-kumar-010823227/",
    },
  },
  {
    id: 2,
    name: "Karan Gangwar",
    role: "Co-Founder & Design Lead",
    description:
      "Karan brings creative vision to life, ensuring that every digital product we build is not only functional but visually stunning and intuitive. With a mastery of UI/UX principles and design systems, he leads our creative direction, transforming complex user requirements into elegant, accessible interfaces. His user-centric approach involves deep empathy and rigorous testing, ensuring that our designs captivate users and drive engagement from the very first interaction.",
    icon: KaranAvatar,
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/karan-gangwar-59aa8b225/",
    },
  },
  {
    id: 3,
    name: "Ayush Sahu",
    role: "Co-Founder & Tech Lead",
    description:
      "As the driving force behind our technical innovations, Ayush specializes in designing high-performance, scalable architectures that power complex digital ecosystems. With deep expertise in full-stack development and cloud infrastructure, he ensures every system we build is robust, secure, and future-proof. His leadership in adopting cutting-edge technologies enables AKA Innovations to deliver enterprise-grade solutions that stand the test of time while maintaining exceptional code quality and efficiency.",
    icon: AyushAvatar,
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/ayush-sahu-62b788225/",
    },
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-swipe every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);

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
    <section id="team" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 overflow-visible">

      {/* Global AmbientBackground handles visuals now */}

      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Meet our team
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We are a team of engineers, designers, and problem-solvers obsessed
          with building meaningful products.
        </p>
      </div>

      {/* Description Card */}
      <div className="relative w-full max-w-3xl mb-16 h-[320px]">
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
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 absolute top-0 left-0 w-full"
          >
            {/* Speech bubble arrow */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white" />

            <p className="text-gray-700 text-center leading-relaxed mb-6">
              {teamMembers[getWrappedIndex(currentIndex)].description}
            </p>

            <div className="text-center">
              <h3 className="text-blue-600 font-semibold text-xl mb-1">
                {teamMembers[getWrappedIndex(currentIndex)].name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {teamMembers[getWrappedIndex(currentIndex)].role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <a
                  href={teamMembers[getWrappedIndex(currentIndex)].social.twitter}
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={teamMembers[getWrappedIndex(currentIndex)].social.facebook}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={teamMembers[getWrappedIndex(currentIndex)].social.linkedin}
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Circular Carousel - Swipeable */}
      <div className="relative w-full mt-32 lg:mt-12 max-w-4xl h-48 md:h-64 flex items-center justify-center mb-8 md:mb-12">
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
                className={`absolute rounded-full border ${isActive ? "border-gray-500" : "border-gray-300"
                  } bg-gray-200 overflow-hidden cursor-pointer`}
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
            className={`h-3 rounded-full transition-all duration-300 ${index === getWrappedIndex(currentIndex)
              ? "w-12 bg-blue-500"
              : "w-3 bg-blue-300 hover:bg-blue-400"
              }`}
            aria-label={`Go to ${member.name}`}
          />
        ))}
      </div>
    </section>
  );
}
