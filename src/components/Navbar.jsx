import { useState } from 'react'
import { Menu, X, Car, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Financing', href: '#financing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/90 text-white shadow-lg shadow-red-600/30">
                <Car size={18} />
              </span>
              <div className="leading-tight">
                <p className="font-semibold tracking-wide">Motion Motors</p>
                <p className="text-xs text-gray-400 -mt-0.5">Premium Dealership</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white">
                <Phone size={16} className="text-red-500" />
                <span>(123) 456‑7890</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow shadow-red-600/30 hover:bg-red-500">
                <MapPin size={16} /> Visit Us
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-gray-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+1234567890" className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/5">
                <span className="inline-flex items-center gap-2"><Phone size={16} className="text-red-500"/>(123) 456‑7890</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
