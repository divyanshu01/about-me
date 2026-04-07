import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Projects() {
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
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)',
              }}
              className="group p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-sm transition-colors duration-300 hover:border-purple/30 relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple to-blue opacity-60 group-hover:opacity-100 transition-opacity" />

              <h3 className="font-heading text-xl font-bold text-text-primary mb-3 mt-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-lg bg-[rgba(124,58,237,0.1)] text-purple border border-purple/20"
                  >
                    {tag}
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
