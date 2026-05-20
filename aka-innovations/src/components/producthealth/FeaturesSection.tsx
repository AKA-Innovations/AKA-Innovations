"use client";

import Image from "next/image";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

const FeaturesSection: FC = () => {
  // Left-side entrance
  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  // Right-side entrance
  const slideRight: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="
        relative py-20 overflow-hidden
        bg-(--color-health-bg)
        dark:bg-[#07111F]
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-4 lg:px-12">
        {/* FEATURE 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 mb-20 items-center"
        >
          {/* Phone Mockup */}
          <motion.div
            variants={slideLeft}
            className="relative h-[500px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/illustrations/phone-mockup.svg"
                alt="App Interface"
                width={430}
                height={430}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={containerStagger}
            className="space-y-6"
          >
            <motion.div
              variants={slideRight}
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="/icons/clock-blue.svg"
                alt=""
                width={20}
                height={20}
              />

              <h3
                className="
                  text-[30px]
                  font-inter
                  font-extrabold
                  text-(--color-health-navy)
                  dark:text-white
                "
              >
                Continuity of Care
              </h3>
            </motion.div>

            <motion.p
              variants={slideRight}
              className="
                text-[20px]
                font-inter
                font-medium
                text-(--color-health-slate)
                dark:text-slate-300
                mb-6
              "
            >
              Every patient has a living medical timeline.
            </motion.p>

            <div className="space-y-3">
              {[
                "Visit-wise doctor notes & prescriptions",
                "Symptom history & progress tracking",
                "Accessible across doctors & specializations",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={bulletVariants}
                  className="flex items-start gap-2"
                >
                  <div
                    className="
                      w-2 h-2 rounded-full
                      bg-(--color-health-cyan)
                      mt-2
                    "
                  />

                  <p
                    className="
                      text-[16px]
                      font-inter
                      text-(--color-health-slate)
                      dark:text-slate-400
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={slideRight}
              className="
                bg-(--color-health-off-white)
                dark:bg-slate-900/70
                border-l-4 border-(--color-health-cyan)
                rounded-r-lg
                p-6 mt-8
                shadow-sm
                dark:border-slate-700
              "
            >
              <div
                className="
                  text-[14px]
                  font-inter
                  font-bold
                  tracking-wider
                  uppercase
                  text-(--color-health-navy)
                  dark:text-white
                  mb-2
                "
              >
                Impact
              </div>

              <p
                className="
                  text-[16px]
                  font-inter
                  text-(--color-health-slate)
                  dark:text-slate-400
                  leading-relaxed
                "
              >
                No repeated explanations. Better clinical decisions.
                Strong long-term doctor–patient trust.
              </p>
            </motion.div>

            <motion.p
              variants={slideRight}
              className="
                text-[15px]
                font-inter
                text-(--color-health-navy)
                dark:text-slate-300
                mt-6
              "
            >
              Healthcare that remembers you.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* FEATURE 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 mb-20 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={containerStagger}
            className="space-y-6"
          >
            <motion.div
              variants={slideLeft}
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="/icons/user-purple.svg"
                alt=""
                width={20}
                height={18}
              />

              <h3
                className="
                  text-[29px]
                  font-inter
                  font-extrabold
                  text-(--color-health-navy)
                  dark:text-white
                  leading-tight
                "
              >
                Symptom-Driven Doctor Recommendations
              </h3>
            </motion.div>

            <motion.p
              variants={slideLeft}
              className="
                text-[20px]
                font-inter
                font-medium
                text-(--color-health-slate-dark)
                dark:text-slate-300
                mb-4
              "
            >
              Describe the problem. We find the right doctor.
            </motion.p>

            <motion.p
              variants={slideLeft}
              className="
                text-[16px]
                font-inter
                text-(--color-health-slate)
                dark:text-slate-400
                leading-relaxed
                mb-6
              "
            >
              Instead of forcing patients to guess specializations,
              Health-Connect intelligently recommends:
            </motion.p>

            <div className="space-y-3">
              {[
                "Correct medical specialization",
                "Doctors experienced with similar symptoms",
                "Best-fit doctors for faster, accurate care",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={bulletVariants}
                  className="flex items-start gap-3"
                >
                  <Image
                    src="/icons/checkmark-indigo.svg"
                    alt=""
                    width={14}
                    height={10}
                  />

                  <p
                    className="
                      text-[16px]
                      font-inter
                      text-(--color-health-slate)
                      dark:text-slate-400
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={slideLeft}
              className="flex flex-wrap gap-4 mt-6"
            >
              <span
                className="
                  bg-indigo-100 dark:bg-indigo-500/20
                  text-indigo-700 dark:text-indigo-300
                  text-[14px]
                  font-inter
                  font-medium
                  px-4 py-2
                  rounded-full
                "
              >
                Fewer wrong consultations
              </span>

              <span
                className="
                  bg-indigo-100 dark:bg-indigo-500/20
                  text-indigo-700 dark:text-indigo-300
                  text-[14px]
                  font-inter
                  font-medium
                  px-4 py-2
                  rounded-full
                "
              >
                Higher success rate
              </span>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={slideRight}
            whileHover={{ y: -5 }}
            className="
              bg-white dark:bg-slate-900
              rounded-3xl
              border border-gray-100 dark:border-slate-800
              shadow-xl dark:shadow-black/30
              p-8
              transition-colors duration-300
            "
          >
            <div
              className="
                bg-(--color-health-off-white)
                dark:bg-slate-800
                border border-gray-200 dark:border-slate-700
                rounded-xl
                p-4 mb-6
              "
            >
              <div
                className="
                  text-[12px]
                  font-inter
                  tracking-wider
                  uppercase
                  text-indigo-500 dark:text-indigo-400
                  mb-1
                "
              >
                Input
              </div>

              <p
                className="
                  text-[16px]
                  font-inter
                  font-medium
                  text-(--color-health-navy)
                  dark:text-white
                "
              >
                "Severe headache and blurred vision"
              </p>
            </div>

            <div className="h-px bg-(--color-health-gray-light) dark:bg-slate-700 my-6" />

            <div className="space-y-4 mb-6">
              {[
                {
                  icon: "/icons/checkmark-dark.svg",
                  text: "Full patient history before consult",
                },
                {
                  icon: "/icons/plus-dark.svg",
                  text: "Structured visit notes",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={11}
                    height={14}
                  />

                  <p
                    className="
                      text-[16px]
                      font-inter
                      text-(--color-health-navy)
                      dark:text-slate-300
                    "
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px bg-(--color-health-gray-light) dark:bg-slate-700 my-6" />

            <div
              className="
                bg-indigo-50 dark:bg-indigo-500/10
                border border-indigo-200 dark:border-indigo-500/20
                rounded-xl
                p-4
              "
            >
              <div
                className="
                  text-[12px]
                  font-inter
                  tracking-wider
                  uppercase
                  text-indigo-500 dark:text-indigo-400
                  mb-1
                "
              >
                Recommendation
              </div>

              <p
                className="
                  text-[16px]
                  font-inter
                  font-extrabold
                  text-indigo-900 dark:text-indigo-300
                  mb-3
                "
              >
                Neurologist (Specialist)
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/doctor-avatar.png"
                  alt="Dr. Anjali Rao"
                  width={32}
                  height={32}
                  className="rounded-full"
                />

                <p
                  className="
                    text-[14px]
                    font-inter
                    text-indigo-700 dark:text-indigo-300
                  "
                >
                  Dr. Anjali Rao • 12 Yrs Exp
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Language Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="
              bg-white dark:bg-slate-900
              rounded-3xl
              border border-gray-100 dark:border-slate-800
              shadow-xl dark:shadow-black/30
              p-8
              relative overflow-hidden
            "
          >
            <div
              className="
                absolute top-0 right-0
                w-24 h-24
                bg-orange-50 dark:bg-orange-500/10
                rounded-bl-full
              "
            />

            <h3
              className="
                text-[24px]
                font-inter
                font-extrabold
                text-(--color-health-navy)
                dark:text-white
                mb-3
              "
            >
              Language-First Experience
            </h3>

            <p
              className="
                text-[16px]
                font-inter
                text-(--color-health-slate)
                dark:text-slate-400
                mb-6
              "
            >
              Comfortable communication leads to better care.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Regional language consultations",
                "Patient-friendly summaries",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/checkmark-orange.svg"
                    alt=""
                    width={11}
                    height={9}
                  />

                  <p
                    className="
                      text-[14px]
                      font-inter
                      text-(--color-health-slate-dark)
                      dark:text-slate-300
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="
                text-[15px]
                font-inter
                text-(--color-health-orange-dark)
                dark:text-orange-300
              "
            >
              Healthcare in the language you trust.
            </p>
          </motion.div>

          {/* Doctor Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
            className="
              bg-(--color-health-navy)
              dark:bg-[#020817]
              rounded-3xl
              border border-(--color-health-navy)
              dark:border-slate-800
              shadow-xl dark:shadow-black/30
              p-8
              relative overflow-hidden
            "
          >
            <div
              className="
                absolute bottom-0 left-0
                w-32 h-32
                bg-(--color-health-slate-dark)/50
                dark:bg-slate-700/20
                rounded-tr-full
              "
            />

            <h3
              className="
                text-[24px]
                font-inter
                font-extrabold
                text-white
                mb-3
              "
            >
              Doctor-Centric Experience
            </h3>

            <p
              className="
                text-[16px]
                font-inter
                text-(--color-health-gray)
                dark:text-slate-400
              "
            >
              Doctors get context, not clutter.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;