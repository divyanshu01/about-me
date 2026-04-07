import { NavLink } from 'react-router-dom'
import { Home, User, Wrench, Briefcase, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/about', icon: User, label: 'About' },
  { to: '/skills', icon: Wrench, label: 'Skills' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/contact', icon: Mail, label: 'Contact' },
]

export default function Sidebar() {
  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-center gap-2 z-50 bg-[rgba(10,10,26,0.7)] backdrop-blur-xl border-r border-[rgba(255,255,255,0.06)]">
      <div className="absolute top-6 font-heading text-lg font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
        DJ
      </div>
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-[rgba(124,58,237,0.15)] text-purple shadow-[0_0_20px_rgba(124,58,237,0.2)]'
                : 'text-text-secondary hover:text-text-primary hover:bg-[rgba(255,255,255,0.05)]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-r-full bg-gradient-to-b from-purple to-blue" />
              )}
              <Icon size={20} />
              <span className="text-[10px] mt-1 font-medium">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
