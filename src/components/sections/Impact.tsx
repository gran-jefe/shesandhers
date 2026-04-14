'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '3,000+', label: 'Clients Served' },
  { number: '2', label: 'Locations' },
  { number: '∞', label: 'Confidence Sold' },
  { number: '100%', label: 'Woman-Owned' },
]

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export function Impact() {
  return (
    <section
      id="impact"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-sh-base/85" style={{ backdropFilter: 'blur(8px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-playfair italic text-2xl md:text-3xl text-white mb-2"
        >
          &quot;Beauty is business, and business is ministry.&quot;
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-lato text-sm text-sh-gold mb-12 tracking-widest uppercase"
        >
          — Dr. Sheila Charles, Founder
        </motion.p>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-sh-deep/80 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="font-playfair font-800 text-4xl text-sh-gold mb-2">
                {stat.number}
              </div>
              <div className="font-lato font-light text-sm text-sh-rose">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-lato font-light text-xs text-sh-rose/60 italic"
        >
          Employing women · Partnering with local artisans · Keeping value in Uyo, Nigeria
        </motion.p>
      </div>
    </section>
  )
}
