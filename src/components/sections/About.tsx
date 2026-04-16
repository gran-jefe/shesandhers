"use client";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="py-24 bg-sh-petal dark:bg-sh-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Logo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative blob */}
            <div
              className="absolute -inset-8 opacity-[0.04] bg-sh-plum"
              style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%" }}
            />
            <div className="relative rounded-3xl bg-sh-plum/10 dark:bg-sh-base p-8 flex flex-col items-center justify-center min-h-96">
              <div className="mb-6">
                <Logo variant="auto" size="lg" />
              </div>
              <div className="bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2 text-center">
                <span className="font-lato text-xs text-sh-muted dark:text-sh-rose font-light">
                  Est. in Uyo, Nigeria
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.div variants={slideLeft}>
              <SectionLabel>About us</SectionLabel>
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-playfair font-700 text-4xl md:text-5xl text-sh-base dark:text-white"
            >
              This is about us
            </motion.h2>

            <motion.div variants={slideLeft} className="flex">
              <div className="h-1 w-16 bg-sh-gold rounded-full mb-6" />
            </motion.div>

            <motion.div
              variants={slideLeft}
              className="space-y-4 text-sh-muted dark:text-sh-rose font-lato font-light leading-relaxed"
            >
              <p>
                Through <span className="italic">She's & Hers</span>, We are
                redefining beauty and confidence in women, while building a
                business that creates economic opportunity and impact.
              </p>
              <p>
                From a single idea, we have grown She's & Hers into a trusted
                name in <span className="italic">hair, accessories, makeup, and Jewelry</span>.
                Over the years, we've served 3000+ clients, expanded to
                online/physical locations.
              </p>
              <p>
                We directly employ women and young women, and partner with local
                suppliers and artisans, keeping value in our local community,
                here in Uyo Nigeria.
              </p>
              <p>
                Our impact goes beyond products. We don't just sell hairs,
                makeup, and Jewelry — we sell confidence.
              </p>
              <p>
                She's & Hers proves that beauty is business, and business is
                ministry.
              </p>
              <p>
                We are not just creating looks, — We are creating livelihoods
                and legacy and have proven that a woman-owned brand can set
                industry standards for excellence and impact.
              </p>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              variants={slideLeft}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="bg-sh-plum/10 dark:bg-sh-plum/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-plum dark:text-sh-rose">
                  100% Woman-Owned
                </span>
              </div>
              <div className="bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-gold">
                  3,000+ Clients Served
                </span>
              </div>
              <div className="bg-sh-plum/10 dark:bg-sh-plum/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-plum dark:text-sh-rose">
                  Community Focused
                </span>
              </div>
              <div className="bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-gold">
                  Industry Standards
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
