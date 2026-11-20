import { Link, useLocation, useNavigate } from 'react-router-dom'
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
      <img
        src="/assets/logo.png"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 object-contain"
      />
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
  const location = useLocation()
  const navigate = useNavigate()

  const handleFooterLink = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const sectionId = href.replace('/#', '')
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(href)
      }
    } else if (href === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-16">
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
                        onClick={(e) => handleFooterLink(e, item.href)}
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
            {siteContent.global.companyName} beroperasi dengan standar kepatuhan dan tata kelola perusahaan yang transparan.
          </p>
        </div>
      </Container>
    </footer>
  )
}
