'use client'

import { motion } from 'framer-motion'

import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7">
              <div className="text-sm text-muted-foreground">Pricing</div>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-tight">
                Transparent engagement options.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                Choose a structure that fits your matter’s urgency and complexity. Every engagement includes senior
                oversight and a clear communication cadence so leadership and in-house teams can plan with confidence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold"
                >
                  Discuss Your Matter
                </a>
                <a
                  href="/practice-areas"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-card text-foreground px-6 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
                >
                  Explore Practice Areas
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/office.png"
                  alt="Asymmetric gold edge band over deep navy grid"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <PricingTable
            headline="Engagement models"
            subheadline="Practical options for executives, founders, and in-house teams."
            tiers={[
              {
                name: 'Advisory Retainer',
                price: '$7,500',
                period: '/mo',
                features: [
                  'Monthly strategy call',
                  'Priority email response',
                  'Deal/restructuring issue spotting',
                  'Document review up to a defined cap',
                ],
                ctaLabel: 'Start Retainer',
                ctaHref: '/contact',
              },
              {
                name: 'Transaction Sprint',
                price: 'From $18,000',
                period: '',
                highlighted: true,
                features: [
                  'Kickoff risk map + timeline',
                  'Diligence tracker and red-flag memo',
                  'Negotiation support and drafting',
                  'Weekly progress reporting',
                ],
                ctaLabel: 'Plan a Sprint',
                ctaHref: '/contact',
              },
              {
                name: 'Litigation & Investigations',
                price: 'Hourly',
                period: '+ budget checkpoints',
                features: [
                  'Early case assessment',
                  'Preservation + collection guidance',
                  'Motion and negotiation strategy',
                  'Budget checkpoints by phase',
                ],
                ctaLabel: 'Request Assessment',
                ctaHref: '/contact',
              },
            ]}
          />
          <p className="mt-8 text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Pricing is indicative and varies by complexity, timeline, and scope. We confirm fees in a written engagement
            letter after intake and a conflict check.
          </p>
        </div>
      </section>

      {/* What’s included (3D cards) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturesCards3D
            badge="Every engagement"
            headline="What’s included in every engagement"
            subheadline="Senior-led, documentation-driven, and built to reduce surprises."
            features={[
              {
                title: 'Partner-led strategy',
                description: 'Direct access to senior counsel; no opaque handoffs.',
                icon: 'Crown',
              },
              {
                title: 'Decision-ready updates',
                description: 'Clear options, risks, and recommended next steps—written for executives.',
                icon: 'ClipboardCheck',
              },
              {
                title: 'Defensible documentation',
                description: 'A record that supports your position in negotiations, audits, or litigation.',
                icon: 'FileText',
              },
              {
                title: 'Confidentiality-first workflow',
                description: 'Secure communications practices and careful intake boundaries.',
                icon: 'Lock',
              },
            ]}
          />
        </div>
      </section>

      {/* Process clarity (Sticky reveal) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <StickyScrollReveal
            content={[
              {
                title: 'Scope definition',
                description:
                  'We define the decision you need to make, the timeline, and the workstreams required—then document assumptions and exclusions.',
              },
              {
                title: 'Budget checkpoints',
                description:
                  'We set phase milestones and check in before the work changes. If the facts shift, you hear it early—not after the invoice.',
              },
              {
                title: 'Executive-ready reporting',
                description:
                  'You receive concise updates focused on options, risk, and next steps—written to support leadership and board communication.',
              },
              {
                title: 'Closeout documentation',
                description:
                  'We memorialize outcomes and deliver a clean record: what was decided, why, and what to monitor going forward.',
              },
            ]}
          />
        </div>
      </section>

      {/* Testimonials (TracingBeam wrapper) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <TestimonialsAnimated
              headline="Budget clarity, not budget surprises."
              subheadline="How clients describe our communication and predictability."
              testimonials={[
                {
                  quote:
                    'They set expectations early and updated us before anything changed. That made the board comfortable.',
                  name: 'Board Chair',
                  role: 'Private equity portfolio company',
                  company: 'Confidential',
                  imageUrl: '/images/team-1.png',
                },
                {
                  quote: 'Every phase had a plan, a budget, and a rationale. We always knew where we stood.',
                  name: 'VP, Legal',
                  role: 'Healthcare services',
                  company: 'Confidential',
                  imageUrl: '/images/team-2.png',
                },
                {
                  quote: 'Direct, candid advice—without drama. Exactly what we needed.',
                  name: 'Founder',
                  role: 'Technology company',
                  company: 'Confidential',
                  imageUrl: '/images/team-3.png',
                },
              ]}
            />
          </TracingBeam>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion
            headline="Pricing FAQs"
            subheadline="A few details that help you choose the right model."
            items={[
              {
                question: 'Can you provide a budget range before engagement?',
                answer:
                  'Yes. After a short intake call, we can provide a phase-based estimate and identify cost drivers and decision gates so you can plan internally.',
              },
              {
                question: 'Do you offer capped fees?',
                answer:
                  'For defined scopes, we can propose capped or phased caps. For open-ended litigation, we use milestone budgeting and checkpoints to keep you informed.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'ACH and major credit cards. Retainers are typically paid upfront prior to commencing work, subject to the engagement letter terms.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <CTAVortex
            headline="Get a scope and budget in one call."
            description="We’ll clarify your objectives, identify the fastest path, and propose an engagement structure."
            ctaLabel="Book Consultation"
            ctaHref="/contact"
          />
        </div>
      </section>
    </div>
  )
}
