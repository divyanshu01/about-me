import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'

const roles = [
  'Principal Software Engineer',
  'Backend & Distributed Systems',
  'Cloud Security',
  'AI/ML Engineering',
]

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const speed = isDeleting ? 30 : 60
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <motion.p
        variants={itemVariants}
        className="text-text-secondary text-lg md:text-xl mb-4 font-light tracking-wide"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple via-blue to-accent bg-clip-text text-transparent leading-tight"
      >
        Divyanshu Juneja
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="h-10 md:h-12 flex items-center justify-center mb-6"
      >
        <span className="text-xl md:text-2xl text-accent font-heading font-medium">
          {displayText}
          <span className="animate-pulse ml-0.5 text-purple">|</span>
        </span>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-text-secondary text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
      >
        Building secure, scalable systems at the intersection of cloud
        infrastructure and AI.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/projects"
          className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple to-blue text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-105"
        >
          View My Work
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 px-8 py-4 rounded-xl border border-glass-border bg-glass text-text-primary font-semibold text-base backdrop-blur-sm transition-all duration-300 hover:border-purple/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:scale-105"
        >
          <MessageCircle size={18} />
          Get In Touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <Link to="/about" aria-label="Go to About page">
          <div className="w-6 h-10 rounded-full border-2 border-text-secondary/40 flex justify-center pt-2 cursor-pointer hover:border-purple/60 transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-purple animate-pulse" />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
