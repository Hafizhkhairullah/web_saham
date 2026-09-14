import { Link } from 'react-router-dom'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Container from './Container'
import { siteContent, parseText } from '../../config/siteContent'

// Reusing the logo from Navbar
function NexaBursaLogo() {
  return (
    <Link
      to="/"
      aria-label={`${siteContent.global.companyName} - kembali ke beranda`}
      className="flex items-center gap-2.5 shrink-0"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#E11D2E" />
        <rect x="8" y="14" width="3" height="10" rx="1" fill="white" />
        <rect x="8.5" y="10" width="2" height="5" rx="0.5" fill="white" />
        <rect x="8.5" y="23" width="2" height="3" rx="0.5" fill="white" />
        <rect x="14" y="9" width="3" height="14" rx="1" fill="white" />
        <rect x="14.5" y="6" width="2" height="4" rx="0.5" fill="white" />
        <rect x="14.5" y="22" width="2" height="3" rx="0.5" fill="white" />
        <rect x="20" y="12" width="3" height="12" rx="1" fill="white" opacity="0.85" />
        <rect x="20.5" y="8" width="2" height="5" rx="0.5" fill="white" opacity="0.85" />
        <rect x="20.5" y="23" width="2" height="2" rx="0.5" fill="white" opacity="0.85" />
      </svg>
      <span
        className="text-[17px] font-bold tracking-tight"
        style={{ color: 'var(--white)' }}
      >
        {siteContent.global.logoTextPart1}<span style={{ color: 'var(--red-bright)' }}>{siteContent.global.logoTextPart2}</span>
      </span>
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Deskripsi */}
          <div className="lg:col-span-2">
            <NexaBursaLogo />
            <p className="mt-6 text-[var(--gray-light)] text-sm leading-relaxed max-w-sm">
              {siteContent.footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="text-[var(--gray-light)] hover:text-[var(--red-primary)] transition-colors" aria-label="Facebook">
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-[var(--gray-light)] hover:text-[var(--red-primary)] transition-colors" aria-label="Twitter">
                <TwitterLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-[var(--gray-light)] hover:text-[var(--red-primary)] transition-colors" aria-label="Instagram">
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a href="#" className="text-[var(--gray-light)] hover:text-[var(--red-primary)] transition-colors" aria-label="LinkedIn">
                <LinkedinLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Navigasi Links */}
          {siteContent.footer.links.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[var(--white)] font-semibold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="text-[var(--gray-light)] hover:text-[var(--red-primary)] text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-[var(--gray-light)] hover:text-[var(--red-primary)] text-sm transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--gray-dark)] text-sm">
            {parseText(siteContent.footer.copyright)}
          </p>
          <p className="text-[var(--gray-dark)] text-xs text-center md:text-right max-w-2xl">
            {siteContent.global.companyName} terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK).
          </p>
        </div>
      </Container>
    </footer>
  )
}
