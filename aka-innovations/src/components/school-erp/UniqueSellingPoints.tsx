'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Based on Real Workflow Study',
    desc: "We didn't just code visuals; we sat with school admins for 3 months to understand actual daily problems.",
  },
  {
    title: 'Modular & Scalable',
    desc: 'Start with 2 modules or 10. The system grows as your institution grows, from 500 to 50,000 students.',
  },
  {
    title: 'Zero-Training Interface',
    desc: 'If you can use Facebook or WhatsApp, you can use our ERP. No complex manuals required.',
  },
];

const UniqueSellingPoints = () => {
  return (
    <section
      className="
        py-24
        bg-white dark:bg-[#0B1120]
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Why This ERP is <br />
              <span className="text-blue-600 dark:text-blue-400">
                Different
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Most ERPs are bloated, slow, and hard to use. We prioritized
              speed, simplicity, and actual problem-solving over feature
              checklists.
            </p>

            <div className="grid gap-8">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {reason.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:w-1/2 relative">
            {/* Background Glow */}
            <div
              className="
                aspect-square
                bg-slate-50 dark:bg-slate-900/60
                rounded-full
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[80%]
                -z-10
                transition-colors duration-300
              "
            />

            {/* Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  bg-white dark:bg-slate-900
                  p-6 rounded-2xl
                  shadow-xl dark:shadow-black/30
                  border border-slate-100 dark:border-slate-800
                  transform translate-y-8
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  3x
                </div>

                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Faster Data Entry
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="
                  bg-white dark:bg-slate-900
                  p-6 rounded-2xl
                  shadow-xl dark:shadow-black/30
                  border border-slate-100 dark:border-slate-800
                  transform -translate-y-4
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  0%
                </div>

                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Data Redundancy
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="
                  bg-white dark:bg-slate-900
                  p-6 rounded-2xl
                  shadow-xl dark:shadow-black/30
                  border border-slate-100 dark:border-slate-800
                  transform translate-y-4
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100%
                </div>

                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Parent Satisfaction
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className="
                  bg-white dark:bg-slate-900
                  p-6 rounded-2xl
                  shadow-xl dark:shadow-black/30
                  border border-slate-100 dark:border-slate-800
                  transform -translate-y-8
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  24/7
                </div>

                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Uptime & Support
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPoints;