import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-blue to-purple/20" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0

            return (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 md:flex ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-purple to-blue shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  />
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-sm hover:border-purple/30 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-text-primary">
                          {exp.company}
                        </h3>
                        <p className="text-accent font-medium text-sm">
                          {exp.role}
                        </p>
                      </div>
                      <span className="text-text-secondary text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-purple mt-1.5 shrink-0">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </PageTransition>
  )
}
