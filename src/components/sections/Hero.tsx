"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export function Hero() {
  return (
    <section className="min-h-screen bg-sh-blush dark:bg-sh-base relative overflow-hidden pt-20 pb-16">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] bg-sh-plum"
        style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.05] bg-sh-gold"
        style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Pill badge */}
            <motion.div variants={fadeUp} className="inline-block">
              <div className="bg-sh-petal dark:bg-sh-deep text-sh-muted dark:text-sh-rose px-4 py-2 rounded-full text-sm font-lato">
                Beauty Palace · Uyo, Nigeria
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="font-playfair font-700 text-5xl md:text-6xl lg:text-7xl leading-tight text-sh-base dark:text-white">
                We don't just
                <br />
                sell beauty.
                <br />
                We sell{" "}
                <span className="text-sh-plum dark:text-sh-magenta italic">
                  confidence.
                </span>
              </h1>
            </motion.div>

            {/* Sub text */}
            <motion.p
              variants={fadeUp}
              className="font-lato font-light text-sh-muted dark:text-sh-rose text-lg"
            >
              Hair · Wigs · Accessories · Makeup · Jewellery · and more
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                href="https://wa.me/2348080571942"
                variant="primary"
                className="text-base px-8 py-3"
              >
                Order via WhatsApp
              </Button>
              <Button
                href="#story"
                variant="secondary"
                className="text-base px-8 py-3"
              >
                Our Story
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={fadeUp}
              className="font-lato text-sm italic text-sh-muted dark:text-sh-rose pt-4"
            >
              Trusted by 3,000+ women across Nigeria 🌸
            </motion.p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Large decorative circle */}
              <div className="w-full aspect-square rounded-full border-2 border-sh-plum/20 bg-sh-petal dark:bg-sh-deep flex items-center justify-center animate-float relative overflow-hidden">
                {/* Floating pills */}
                <div className="absolute top-12 left-8 bg-sh-plum/10 dark:bg-sh-plum/20 rounded-full px-4 py-2">
                  <span className="font-playfair text-sm font-600 text-sh-plum dark:text-sh-rose">
                    Hair
                  </span>
                </div>
                <div className="absolute top-20 right-6 bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2">
                  <span className="font-playfair text-sm font-600 text-sh-gold">
                    Wigs
                  </span>
                </div>
                <div className="absolute bottom-16 left-4 bg-sh-plum/10 dark:bg-sh-plum/20 rounded-full px-4 py-2">
                  <span className="font-playfair text-sm font-600 text-sh-plum dark:text-sh-rose">
                    Makeup
                  </span>
                </div>
                <div className="absolute bottom-12 right-12 bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2">
                  <span className="font-playfair text-sm font-600 text-sh-gold">
                    Jewellery
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-playfair text-sh-plum dark:text-sh-rose text-3xl font-700">
                      ✨
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
