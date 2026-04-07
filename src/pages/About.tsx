import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'

const stats = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Multi-Cloud', value: 0, suffix: '', text: 'AWS, Azure, GCP' },
  { label: "NIT Srinagar '17", value: 0, suffix: '', text: 'CSE' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (value === 0) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.max(1, Math.floor(value / 40))
          const timer = setInterval(() => {
            current += step
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 30)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <div ref={ref}>{value > 0 ? `${count}${suffix}` : ''}</div>
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto"
      >
        <motion.h2
          custom={0}
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          <motion.div custom={1} variants={fadeUp} className="flex justify-center md:justify-start">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-purple to-blue p-[3px]">
              <div className="w-full h-full rounded-2xl bg-navy flex items-center justify-center">
                <span className="font-heading text-6xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
                  DJ
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              Principal Backend Engineer with 8+ years of experience designing,
              building, and scaling distributed systems in Go for cloud-native
              security platforms. Currently at Uptycs, building MCP Security
              Posture Management products — including a security gateway that
              sits as a proxy between AI applications and LLMs, with prompt
              injection detection, tool call interception, and policy
              enforcement.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              Previously contributed to cloud security analytics (risk
              prioritization, attack path analysis, CIEM), high-volume data
              ingestion pipelines, and graph database systems at scale. Earlier
              experience includes backend work at Oracle (Fusion Cloud Order
              Management) and Gen/NortonLifeLock (security browser extensions,
              password management).
            </motion.p>
            <motion.p
              custom={4}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              NIT Srinagar (CSE, 2017). Microsoft AZ-900 certified. Currently
              expanding into AI/ML engineering — fine-tuning models, building ML
              inference pipelines, and writing a research paper on LLM-based
              prompt injection detection.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-sm text-center"
            >
              <div className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent mb-2">
                {stat.text ? stat.text : <Counter value={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageTransition>
  )
}
