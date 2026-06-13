'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-navy font-bold text-lg tracking-tight">
          Nam Nguyen
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-navy font-bold border-b-2 border-navy pb-0.5'
                    : 'text-gray-600 hover:text-navy'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  isActive ? 'text-navy font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
