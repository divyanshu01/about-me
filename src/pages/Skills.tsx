import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import { skillCategories } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Skills() {
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
          Technical Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(124, 58, 237, 0.2)',
              }}
              className="group p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-sm transition-colors duration-300 hover:border-purple/30"
            >
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[rgba(124,58,237,0.1)] text-purple border border-purple/20 transition-all duration-300 hover:bg-purple/20 hover:text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
