import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Wrench, Briefcase, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/about', icon: User, label: 'About' },
  { to: '/skills', icon: Wrench, label: 'Skills' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/contact', icon: Mail, label: 'Contact' },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-[rgba(10,10,26,0.8)] backdrop-blur-xl border border-glass-border text-text-primary"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[rgba(10,10,26,0.95)] backdrop-blur-2xl flex flex-col items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-3 text-text-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {navItems.map(({ to, icon: Icon, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-8 py-4 rounded-2xl text-xl font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-purple/20 to-blue/20 text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`
                  }
                >
                  <Icon size={24} />
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
