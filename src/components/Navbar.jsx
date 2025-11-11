import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bolt, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#about', label: 'About' },
  ]

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Bolt className="w-5 h-5 text-blue-600" />
          CollaBridge
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-full bg-slate-900 text-white">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
