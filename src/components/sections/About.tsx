'use client'
import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { SectionLabel } from '@/components/ui/SectionLabel'

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

export function About() {
  return (
    <section id="about" className="py-24 bg-sh-petal dark:bg-sh-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Logo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative blob */}
            <div
              className="absolute -inset-8 opacity-[0.04] bg-sh-plum"
              style={{ borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%' }}
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
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.div variants={slideLeft}>
              <SectionLabel>About us</SectionLabel>
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-playfair font-700 text-4xl md:text-5xl text-sh-base dark:text-white"
            >
              From a single idea to a trusted name.
            </motion.h2>

            <motion.div variants={slideLeft} className="flex">
              <div className="h-1 w-16 bg-sh-gold rounded-full mb-6" />
            </motion.div>

            <motion.div
              variants={slideLeft}
              className="space-y-4 text-sh-muted dark:text-sh-rose font-lato font-light leading-relaxed"
            >
              <p>
                She's & Hers began as a single idea and grew into one of Uyo's most trusted beauty destinations. Today, we serve thousands of women across Nigeria — online and in-store.
              </p>
              <p>
                We carry wigs, weave-on, hair accessories, makeup, jewellery, bags, wrist-watches, sunglasses and more. Everything a woman needs to look and feel her best.
              </p>
              <p>
                We don't just sell products — we build confidence, create livelihoods, and leave a legacy.
              </p>
            </motion.div>

            {/* Feature pills */}
            <motion.div variants={slideLeft} className="flex flex-wrap gap-3 pt-4">
              <div className="bg-sh-plum/10 dark:bg-sh-plum/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-plum dark:text-sh-rose">Woman-Owned</span>
              </div>
              <div className="bg-sh-gold/10 dark:bg-sh-gold/20 rounded-full px-4 py-2">
                <span className="font-lato text-sm text-sh-muted dark:text-sh-rose">Community Driven</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
