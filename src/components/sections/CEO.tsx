"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function CEO() {
  return (
    <section
      id="story"
      className="bg-sh-base py-24 border-t-2 border-b-2 border-sh-gold"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - CEO Quote */}
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
            {/* Quote mark */}
            <motion.div
              variants={fadeUp}
              className="text-9xl text-sh-gold/20 font-playfair leading-none"
            >
              "
            </motion.div>

            {/* CEO Statement */}
            <motion.div variants={fadeUp} className="space-y-6">
              <h3 className="font-playfair font-700 text-white text-2xl md:text-3xl">
                Our Story – She's & Hers
              </h3>

              <p className="font-playfair italic text-white text-lg md:text-xl leading-relaxed">
                She's & Hers was born from one simple truth:{" "}
                <span className="text-sh-gold">
                  when a woman feels beautiful, she becomes bold.
                </span>
              </p>

              <p className="font-lato text-white text-lg leading-relaxed">
                We started with wigs and weave-ons because we were tired of
                watching women dim their light over bad hair days. We added
                makeup, jewelry, bags, and sunglasses because confidence is{" "}
                <span className="font-bold">head-to-toe!</span>
              </p>

              <p className="font-lato text-white text-lg leading-relaxed">
                We don't just sell beauty products. We sell confidence that comes
                with the feeling you get when you catch your reflection and
                think,{" "}
                <span className="italic">"There she is."</span>
              </p>

              <p className="font-lato text-white text-lg leading-relaxed">
                From Uyo, Nigeria to everywhere, She's & Hers exists for every
                woman who's done shrinking. For the student, the CEO, the mom,
                the dreamer, every woman!
              </p>

              <p className="font-lato text-white text-lg leading-relaxed">
                This isn't about changing you. It's about revealing you.
              </p>

              <p className="font-playfair italic text-sh-gold text-lg md:text-xl font-600">
                She's & Hers. For you. For the she and everything hers...
              </p>
            </motion.div>

            {/* Attribution */}
            <motion.div
              variants={fadeUp}
              className="pt-8 border-t border-sh-gold/20"
            >
              <div className="mb-4 h-0.5 w-10 bg-sh-gold" />
              <p className="font-playfair font-600 text-white text-lg">
                Dr. Sheila Charles
              </p>
              <p className="font-lato text-sm text-sh-rose">
                Founder & CEO, She's & Hers
              </p>
            </motion.div>
          </motion.div>

          {/* Right - CEO Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-xl aspect-square rounded-2xl overflow-hidden ring-2 ring-sh-plum/40 bg-sh-deep flex items-center justify-center">
              <img
                src="/images/ceo.jpg"
                alt="Dr. Sheila Charles, CEO"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Fallback if image doesn't load */}
              <style>{`
                img[alt="Dr. Sheila Charles, CEO"]:not([src*="ceo.jpg"]),
                img[alt="Dr. Sheila Charles, CEO"][src=""] {
                  display: none !important;
                }
              `}</style>
              <div className="font-playfair text-4xl text-sh-gold text-center">
                Dr. SC
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
