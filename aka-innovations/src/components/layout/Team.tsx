"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Facebook, Linkedin } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "aleven",
    role: "CEO, AKA Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/team/member1.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO, AKA Innovation",
    description:
      "Passionate about technology and innovation, Sarah leads our technical team with expertise in AI and machine learning. She has over 10 years of experience in building scalable solutions and mentoring developers.",
    image: "/team/member2.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Design, AKA Innovation",
    description:
      "Michael brings creative vision to life with stunning user experiences. With a background in both design and psychology, he ensures every product we build is intuitive and beautiful.",
    image: "/team/member3.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "VP of Engineering, AKA Innovation",
    description:
      "Emily drives our engineering excellence with a focus on quality and performance. Her leadership has helped scale our products to serve millions of users worldwide.",
    image: "/team/member4.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);

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

    setCurrentIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % teamMembers.length
        : prev === 0
        ? teamMembers.length - 1
        : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Calculate visible circles (current, prev, next)
  const activeIndex = currentIndex;
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({ member: teamMembers[index], offset: i, index });
    }
    return visible;
  };

  const circleConfig = (offset: number) => {
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
    <section className="relative min-h-screen w-full bg-[#e8eaed] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Header */}
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
              {teamMembers[currentIndex].description}
            </p>

            <div className="text-center">
              <h3 className="text-blue-600 font-semibold text-xl mb-1">
                {teamMembers[currentIndex].name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {teamMembers[currentIndex].role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <a
                  href={teamMembers[currentIndex].social.twitter}
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={teamMembers[currentIndex].social.facebook}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={teamMembers[currentIndex].social.linkedin}
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
      <div className="relative w-full max-w-4xl h-64 flex items-center justify-center mb-12">
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
          {getVisibleMembers().map(({ member, offset, index }) => {
            const isActive = offset === 0;
            const { size, x, zIndex, opacity } = circleConfig(offset);

            return (
              <motion.div
                key={index}
                animate={{ x, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => offset !== 0 && goToSlide(index)}
                style={{ width: size, height: size, zIndex }}
                className={`absolute rounded-full border ${
                  isActive ? "border-gray-500" : "border-gray-300"
                } bg-gray-200 overflow-hidden cursor-pointer`}
              >
                <div className="w-full h-full flex items-center justify-center bg-[#e0e0e0] text-gray-700 font-semibold text-xl">
                  {member.name.charAt(0)}
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
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
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
