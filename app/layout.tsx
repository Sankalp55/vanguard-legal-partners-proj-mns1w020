import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Merriweather } from 'next/font/google'
import { NavbarGlass } from '@/components/blocks/NavbarGlass'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vanguard Legal Partners | Corporate Law Firm in Chicago',
  description:
    'Vanguard Legal Partners is a Chicago corporate law firm handling mergers & acquisitions, corporate restructuring, securities litigation, and white-collar defense. Partner-led, authoritative counsel for high-stakes matters.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground`}>
        <NavbarGlass
          logo="Vanguard Legal Partners"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Corporate Counsel', href: '/core-offering' },
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Consultation"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Vanguard Legal Partners"
          description="Corporate counsel built for high-stakes decisions. Partner-led representation for transactions, restructuring, securities litigation, and white-collar defense—designed for speed, clarity, and defensibility."
          columns={[
            {
              title: 'Firm',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'Pricing', href: '/pricing' },
              ],
            },
            {
              title: 'Capabilities',
              links: [
                { label: 'Corporate Counsel', href: '/core-offering' },
                { label: 'Request Consultation', href: '/contact' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: 'intake@vanguardlegalpartners.com', href: 'mailto:intake@vanguardlegalpartners.com' },
                { label: '(312) 555-0147', href: 'tel:+13125550147' },
                { label: 'Chicago, IL', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Vanguard Legal Partners. All rights reserved. Attorney advertising. Past results do not guarantee future outcomes. Contacting the firm does not create an attorney-client relationship."
        />
      </body>
    </html>
  )
}
