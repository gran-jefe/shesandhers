"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-sh-blush dark:bg-sh-base">
      <div className="max-w-3xl mx-auto px-6 text-center">
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
          <motion.div variants={fadeUp}>
            <SectionLabel>Get in touch</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair italic font-700 text-4xl md:text-5xl text-sh-base dark:text-white"
          >
            Ready to look and feel your{" "}
            <span className="text-sh-plum dark:text-sh-magenta">best?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-lato font-light text-sh-muted dark:text-sh-rose text-lg"
          >
            Reach out via WhatsApp to place orders, ask questions, or just say
            hello.
          </motion.p>

          {/* WhatsApp Button */}
          <motion.div variants={fadeUp} className="pt-4">
            <Button
              href="https://wa.me/2348080571942"
              variant="primary"
              className="text-base px-8 py-3 text-lg"
            >
              Chat with us on WhatsApp
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="space-y-3 pt-8 border-t border-sh-border dark:border-sh-deep mt-8"
          >
            <p className="font-lato text-sm text-sh-muted dark:text-sh-rose">
              Follow us on social
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href="#"
                className="text-sh-muted dark:text-sh-rose hover:text-sh-plum dark:hover:text-sh-magenta transition-colors font-lato"
              >
                Facebook: She's & Her's _ Beauty Palace
              </a>
              <span className="hidden sm:inline text-sh-muted dark:text-sh-rose">
                ·
              </span>
              <a
                href="#"
                className="text-sh-muted dark:text-sh-rose hover:text-sh-plum dark:hover:text-sh-magenta transition-colors font-lato"
              >
                Instagram: She's & Her's _ Beauty Palace
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.p
            variants={fadeUp}
            className="font-lato text-sm italic text-sh-muted dark:text-sh-rose/60 pt-4"
          >
            📍 Uyo, Nigeria — Online & In-store
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
