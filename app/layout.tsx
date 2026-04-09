import './globals.css'

import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'

import { NavbarGlass } from '@/components/blocks/NavbarGlass'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Merriweather({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Vanguard Legal Partners | Corporate Law Firm in Chicago',
  description:
    'Vanguard Legal Partners is a Chicago corporate law firm handling mergers & acquisitions, corporate restructuring, securities litigation, and white-collar defense. Request a confidential consultation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground antialiased`}
      >
        <NavbarGlass
          logo="Vanguard Legal Partners"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Request Consultation"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Vanguard Legal Partners"
          description="Corporate counsel for high-stakes decisions. We advise executives and in-house teams through transactions, restructuring, investigations, and securities disputes with disciplined process and trial-ready strategy."
          columns={[
            {
              title: 'Practice Areas',
              links: [
                { label: 'Mergers & Acquisitions', href: '/practice-areas#ma' },
                { label: 'Corporate Restructuring', href: '/practice-areas#restructuring' },
                { label: 'Securities Litigation', href: '/practice-areas#securities' },
                { label: 'White-Collar Defense', href: '/practice-areas#white-collar' },
              ],
            },
            {
              title: 'Firm',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: '(312) 555-0148', href: 'tel:+13125550148' },
                { label: 'intake@vanguardlegalpartners.com', href: 'mailto:intake@vanguardlegalpartners.com' },
                { label: '200 W Madison St, Suite 2100, Chicago, IL', href: '/contact' },
              ],
            },
            {
              title: 'Notices',
              links: [
                { label: 'Attorney Advertising', href: '/about' },
                { label: 'Privacy & Intake Notice', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Vanguard Legal Partners. All rights reserved. Attorney Advertising. Prior results do not guarantee a similar outcome. This website is for informational purposes only and does not constitute legal advice."
        />
      </body>
    </html>
  )
}
