'use client'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Our Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-sh-base border-t-2 border-sh-gold">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo & Tagline */}
          <div className="text-center md:text-left">
            <Logo variant="dark" size="sm" />
            <p className="font-lato text-xs text-sh-rose/60 mt-4 leading-relaxed">
              Beauty is business, and business is ministry.
            </p>
          </div>

          {/* Center - Nav Links */}
          <div className="flex flex-col items-center justify-center space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-lato text-sm text-sh-rose/60 hover:text-sh-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Contact */}
          <div className="text-center md:text-right space-y-3">
            <a
              href="https://wa.me/2348080571942"
              className="flex items-center justify-center md:justify-end gap-2 font-lato text-sm text-sh-rose/60 hover:text-sh-gold transition-colors"
            >
              <Phone size={16} />
              +234 808 057 1942
            </a>
            <div className="font-lato text-sm text-sh-rose/60">
              📍 Uyo, Nigeria
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sh-deep pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-lato text-sh-rose/60">
          <p>© 2025 She&apos;s & Hers Beauty Palace. All rights reserved.</p>
          <a
            href="https://granjefe.com"
            className="hover:text-sh-rose transition-colors"
          >
            Built with ❤️ by Gran Jefe
          </a>
        </div>
      </div>
    </footer>
  );
}
