'use client'

import { motion } from 'framer-motion'

import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export default function PracticeAreasPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero (custom, since Hero components are home-only per blueprint assignment) */}
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
              <div className="text-sm text-muted-foreground">Practice Areas</div>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-tight">
                Corporate law, built for complexity.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                A focused practice for leaders navigating transactions, distress, investigations, and securities
                disputes—supported by disciplined process and trial-ready strategy. We partner with executives and
                in-house counsel to move quickly while keeping a defensible record.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold"
                >
                  Schedule a Call
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-card text-foreground px-6 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/office.png"
                  alt="Typography-forward editorial rule lines in navy and gold"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core offerings (TracingBeam + anchors) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <div className="space-y-14">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">Core offerings</h2>
                <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
                  Each practice area follows a proven workflow: assess → plan → execute → document. The goal is simple:
                  help leadership make defensible decisions quickly, with clear risk allocation and communication.
                </p>
              </div>

              {[
                {
                  id: 'ma',
                  title: 'Mergers & Acquisitions',
                  desc: 'From LOI to closing, we protect value through diligence, negotiation, and precise documentation.',
                  bullets: [
                    'Buy-side and sell-side representation',
                    'Diligence planning and risk triage',
                    'Negotiation of reps, warranties, indemnities',
                    'Closing mechanics and post-close integration guidance',
                  ],
                  image: '/images/meeting.png',
                },
                {
                  id: 'restructuring',
                  title: 'Corporate Restructuring',
                  desc: 'Stabilize the enterprise and align stakeholders—without losing control of the narrative.',
                  bullets: [
                    'Distressed M&A and asset sales',
                    'Creditor negotiations and forbearance',
                    'Governance and fiduciary guidance',
                    'Operational turnaround legal support',
                  ],
                  image: '/images/handshake.png',
                },
                {
                  id: 'securities',
                  title: 'Securities Litigation',
                  desc: 'Litigation defense and regulator-facing strategy grounded in facts, timelines, and documentation hygiene.',
                  bullets: [
                    'Securities class action defense support',
                    'Internal investigations and response plans',
                    'Disclosure controls and remediation guidance',
                    'Coordination with PR and crisis teams',
                  ],
                  image: '/images/team-1.png',
                },
                {
                  id: 'white-collar',
                  title: 'White-Collar Defense',
                  desc: 'Discreet, rapid-response counsel for executives and companies facing investigations or allegations.',
                  bullets: [
                    'Government investigations strategy',
                    'Witness preparation and interview readiness',
                    'Document preservation and collection guidance',
                    'Parallel civil/criminal risk coordination',
                  ],
                  image: '/images/team-2.png',
                },
              ].map((area, idx) => (
                <motion.div
                  key={area.id}
                  id={area.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    idx % 2 === 0 ? '' : 'lg:[&>div:first-child]:order-2'
                  }`}
                >
                  <div className="lg:col-span-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl">{area.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{area.desc}</p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                      {area.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                      <img src={area.image} alt={`${area.title} abstract illustration`} className="w-full h-80 object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* How we work (StickyScrollReveal) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <StickyScrollReveal
            content={[
              {
                title: 'Rapid intake',
                description:
                  'Define objectives, constraints, and timelines; establish confidentiality and communication cadence suitable for executives and boards.',
              },
              {
                title: 'Risk map',
                description:
                  'Identify exposures, leverage points, and decision gates; align legal posture with business priorities and stakeholder realities.',
              },
              {
                title: 'Execution plan',
                description:
                  'Assign workstreams, draft strategy, and build documentation that supports negotiations, disclosures, and litigation posture.',
              },
              {
                title: 'Outcome management',
                description:
                  'Negotiate, litigate, or resolve—then memorialize and operationalize next steps to reduce recurrence risk.',
              },
            ]}
          />
        </div>
      </section>

      {/* Representative outcomes (ParallaxScroll) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">Representative outcomes</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Select examples of how disciplined strategy can change leverage and resolution posture. Details are
                generalized to respect confidentiality.
              </p>

              <div className="mt-8 bg-card rounded-3xl shadow-md border border-border p-6">
                <div className="space-y-5">
                  {[
                    {
                      title: 'Cross-border acquisition closing',
                      desc: 'Guided diligence and negotiated risk allocation to support an on-time close under regulatory pressure.',
                      metric: 'Closed within 45 days',
                    },
                    {
                      title: 'Restructuring stabilization',
                      desc: 'Negotiated stakeholder alignment and documentation for a turnaround path while preserving governance control.',
                      metric: 'Avoided insolvency filing',
                    },
                    {
                      title: 'Securities dispute resolution',
                      desc: 'Built an early factual record and motion strategy that accelerated settlement leverage.',
                      metric: 'Resolved pre-discovery',
                    },
                    {
                      title: 'White-collar response',
                      desc: 'Rapid-response planning, preservation, and interview prep to reduce operational disruption.',
                      metric: 'Business continuity maintained',
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-[family-name:var(--font-heading)] text-lg">{item.title}</div>
                        <div className="text-sm text-primary">{item.metric}</div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ParallaxScroll
                images={[
                  '/images/team-3.png',
                  '/images/office.png',
                  '/images/meeting.png',
                  '/images/handshake.png',
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion
            headline="Common questions"
            subheadline="Clear answers for executives and in-house teams."
            items={[
              {
                question: 'Do you work with in-house counsel?',
                answer:
                  'Yes. We frequently partner with internal legal teams, providing targeted support where stakes, speed, or specialized litigation posture requires it. We can integrate into your workflow and reporting cadence.',
              },
              {
                question: 'How quickly can you engage?',
                answer:
                  'For time-sensitive matters, we can typically schedule an initial call within 24 hours and provide an engagement letter shortly thereafter, subject to a conflict check.',
              },
              {
                question: 'What information should we prepare for the first call?',
                answer:
                  'A brief timeline, key documents (if available), stakeholders involved, and your primary objective. We’ll guide you on what to share safely and what to reserve for after conflicts and scope are confirmed.',
              },
              {
                question: 'Do you offer fixed fees?',
                answer:
                  'For defined scopes (for example, discrete diligence packages or policy reviews), we can propose fixed or phased fee structures. Litigation is typically hourly with budget checkpoints by phase.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
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
