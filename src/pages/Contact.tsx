import { motion } from 'framer-motion'
import { Mail, Phone, ExternalLink } from 'lucide-react'
import PageTransition from '../components/Layout/PageTransition'

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'divyanshu_j01@yahoo.in',
    href: 'mailto:divyanshu_j01@yahoo.in',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Divyanshu Juneja',
    href: 'https://www.linkedin.com/in/divyanshu-juneja-b64b9b76/',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'divyanshujuneja',
    href: 'https://github.com/divyanshujuneja',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9950038828',
    href: 'tel:+919950038828',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Contact() {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-text-secondary text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          I'm always interested in discussing distributed systems, cloud
          security, AI/ML engineering, or new opportunities. Reach out!
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              custom={i}
              variants={fadeUp}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 60px rgba(124, 58, 237, 0.2)',
              }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-glass border border-glass-border backdrop-blur-sm transition-colors duration-300 hover:border-purple/30 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center shrink-0">
                <contact.icon size={22} className="text-accent" />
              </div>
              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">
                  {contact.label}
                </div>
                <div className="text-text-primary font-medium text-sm">
                  {contact.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
