'use client'

import { motion } from 'framer-motion'

import { HeroGradientBlob } from '@/components/blocks/HeroGradientBlob'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { ContactForm } from '@/components/blocks/ContactForm'
import { CTAVortex } from '@/components/blocks/CTAVortex'

import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroGradientBlob
        badge="Chicago Corporate Counsel"
        headline="Authoritative counsel for boardroom decisions and courtroom pressure."
        subheadline="Vanguard Legal Partners is a Chicago corporate law firm guiding executives through mergers & acquisitions, restructuring, securities litigation, and white-collar defense—discreetly, decisively, and with trial-ready rigor."
        primaryCta={{ label: 'Request a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Explore Practice Areas', href: '/practice-areas' }}
      />

      {/* Trust + quick context */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl leading-tight">
                Corporate risk moves fast. Your counsel should, too.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We advise leadership teams when timing, optics, and documentation matter. Whether you are negotiating
                a change-of-control transaction, stabilizing a distressed balance sheet, responding to an investigation,
                or defending securities-related claims, our work is structured for executive decision-making: clear
                options, defined decision gates, and a record that holds up under scrutiny.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Chicago-based counsel', desc: 'Local presence with national reach for complex matters.' },
                  { title: 'Trial-ready strategy', desc: 'Negotiation posture informed by litigation reality.' },
                  { title: 'Executive confidentiality', desc: 'Disciplined intake and need-to-know workflows.' },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="bg-card text-card-foreground rounded-3xl shadow-md border border-border p-5"
                  >
                    <div className="font-[family-name:var(--font-heading)] text-lg">{b.title}</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/office.png"
                  alt="Abstract architectural lines in deep navy with gold accents"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <div className="font-[family-name:var(--font-heading)] text-xl">Discreet. Decisive. Documented.</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Our approach is built for high-sensitivity environments: board updates, regulator-facing timelines,
                    tight deal windows, and matters where a misstep becomes a headline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice areas (bento) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between gap-6 flex-col md:flex-row"
          >
            <div>
              <div className="text-sm text-muted-foreground">Focused practice</div>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                Focused practice. Comprehensive coverage.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                Four core disciplines built for complex corporate risk—structured to move fast when timing matters.
                Each engagement is partner-led and designed to produce decision-ready guidance.
              </p>
            </div>
          </motion.div>

          <div className="mt-10">
            <BentoGrid className="mx-auto">
              <BentoGridItem
                title="Mergers & Acquisitions"
                description="Deal strategy, diligence, negotiation, and closing—built to protect value and control risk."
              />
              <BentoGridItem
                title="Corporate Restructuring"
                description="Stabilize operations, renegotiate obligations, and navigate distressed transactions with clarity."
              />
              <BentoGridItem
                title="Securities Litigation"
                description="Defense of securities claims, internal investigations, and regulator-facing response playbooks."
              />
              <BentoGridItem
                title="White-Collar Defense"
                description="Crisis counsel for executives and companies—discreet, disciplined, and court-tested."
              />
            </BentoGrid>

            <div className="mt-8 bg-card text-card-foreground rounded-3xl shadow-md border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl">A workflow you can rely on</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We run matters with a consistent cadence: assess the facts, map risk and leverage, execute against a
                    timeline, and document the rationale. That structure reduces surprises and keeps leadership aligned.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/practice-areas"
                      className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
                    >
                      View all practice areas
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <img
                    src="/images/meeting.png"
                    alt="Abstract courthouse stone texture with subtle grid"
                    className="w-full h-64 object-cover rounded-3xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work (sticky reveal) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <StickyScrollReveal
            content={[
              {
                title: 'Rapid intake',
                description:
                  'We define objectives, constraints, and timelines, then establish a confidentiality-first communication cadence suitable for executives and in-house teams.',
              },
              {
                title: 'Risk map',
                description:
                  'We identify exposures, leverage points, and decision gates—aligning legal posture with business priorities and stakeholder realities.',
              },
              {
                title: 'Execution plan',
                description:
                  'We assign workstreams, draft strategy, and build a defensible document trail that supports negotiations, disclosures, and litigation posture.',
              },
              {
                title: 'Outcome management',
                description:
                  'We negotiate, litigate, or resolve—then memorialize the outcome and operationalize next steps to reduce recurrence risk.',
              },
            ]}
          />
        </div>
      </section>

      {/* Case results stats */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                Results framed by discretion.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Representative outcomes and performance signals—shared with respect for confidentiality and client
                sensitivity. We focus on leverage, documentation, and decision speed so leadership can act with control.
              </p>
              <div className="mt-8 bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/handshake.png"
                  alt="Chicago skyline abstraction in deep navy"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-card text-card-foreground rounded-3xl shadow-md border border-border p-8">
                <StatsCounter
                  stats={[
                    { label: 'Deal value advised', value: 2.4, suffix: 'B+' },
                    { label: 'Matters resolved pre-trial', value: 70, suffix: '%+' },
                    { label: 'Average response time', value: 24, suffix: 'h' },
                    { label: 'Industries served', value: 15, suffix: '+' },
                  ]}
                />
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  These figures are representative and aggregated. Matters vary by jurisdiction, posture, and client
                  objectives; we discuss realistic expectations during intake.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Attorneys (team grid) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <TeamGrid
            headline="Senior-led representation—no handoffs."
            subheadline="Your matter is led by partners who have negotiated, litigated, and advised through high-visibility outcomes."
            members={[
              {
                name: 'Evelyn Hart, J.D.',
                role: 'Managing Partner • M&A + Securities',
                bio: 'Leads complex transactions and board advisory with a litigation-informed risk lens.',
                imageUrl: '/images/team-1.png',
              },
              {
                name: 'Marcus Delaney, J.D.',
                role: 'Partner • Restructuring',
                bio: 'Counsels companies and creditors through distressed transactions and operational turnarounds.',
                imageUrl: '/images/team-2.png',
              },
              {
                name: 'Nina Patel, J.D.',
                role: 'Partner • White-Collar Defense',
                bio: 'Crisis response, investigations, and defense strategy for executives and regulated entities.',
                imageUrl: '/images/team-3.png',
              },
            ]}
          />

          <div className="mt-10">
            <a
              href="/about#attorneys"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card text-foreground px-5 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
            >
              Meet the team
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials (wrapped with tracing beam) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <div className="space-y-10">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                  Trusted by leaders when the stakes rise.
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                  Executive feedback focused on clarity, speed, and control under pressure. We aim to reduce uncertainty
                  and increase leverage—without theatrics.
                </p>
              </div>

              <TestimonialsAnimated
                headline="Client feedback"
                subheadline="Representative comments from executives and in-house leaders."
                testimonials={[
                  {
                    quote:
                      'Vanguard gave us a precise risk map, negotiated firmly, and kept the process moving without surprises.',
                    name: 'General Counsel',
                    role: 'Mid-market manufacturing company',
                    company: 'Confidential',
                    imageUrl: '/images/team-1.png',
                  },
                  {
                    quote:
                      'They were calm, strategic, and trial-ready. That posture changed the entire trajectory of our dispute.',
                    name: 'CEO',
                    role: 'Publicly traded services firm',
                    company: 'Confidential',
                    imageUrl: '/images/team-2.png',
                  },
                  {
                    quote:
                      'When we needed an immediate response, they built a plan in hours—not days—and executed it.',
                    name: 'Chief Compliance Officer',
                    role: 'Financial services',
                    company: 'Confidential',
                    imageUrl: '/images/team-3.png',
                  },
                ]}
              />
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                Request a confidential consultation.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tell us what’s happening. We’ll respond promptly and outline next steps. If your matter is urgent, call
                directly and we’ll route you to the right partner.
              </p>

              <div className="mt-8 bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/team-1.png"
                  alt="Abstract gold-and-navy texture suggesting discretion and authority"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-card text-card-foreground rounded-3xl shadow-md border border-border p-8">
                <ContactForm
                  headline="Consultation request"
                  subheadline="Do not include sensitive personal information. Submitting this form does not create an attorney-client relationship."
                  contactInfo={[
                    { label: 'Phone', value: '(312) 555-0148' },
                    { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                    { label: 'Address', value: '200 W Madison St, Suite 2100, Chicago, IL' },
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <CTAVortex
            headline="Need counsel that’s decisive under pressure?"
            description="We’ll help you move from uncertainty to a clear plan—with documentation that holds up."
            ctaLabel="Request a Consultation"
            ctaHref="/contact"
          />
        </div>
      </section>
    </div>
  )
}
