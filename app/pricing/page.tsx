import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { AnimatedTabs } from '@/components/ui/effects/AnimatedTabs'

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-muted-foreground">Pricing</p>
              <h1 className="mt-2 font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                Transparent structures for serious matters.
              </h1>
              <p className="mt-4 text-muted-foreground">
                We tailor pricing to scope, urgency, and risk—while keeping decision-makers informed at every stage.
                Where possible, we recommend phased budgeting so boards and executives can approve spend at clear
                decision points.
              </p>

              <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg">What you can expect</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Written scope and assumptions before work begins</li>
                  <li>Budget checkpoints and change triggers for evolving matters</li>
                  <li>Decision-ready updates designed for leadership teams</li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Professional fee structure and matter planning documents"
                className="w-full h-80 md:h-[28rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <PricingTable
            headline="Common engagement models."
            subheadline="Choose a structure aligned to your matter’s complexity and timeline."
            tiers={[
              {
                name: 'Advisory Retainer',
                price: 'From $7,500/mo',
                period: 'monthly',
                features: [
                  'Priority response window',
                  'Contract and governance review',
                  'Monthly risk and action summary',
                  'Preferred rates for expanded matters',
                ],
                ctaLabel: 'Start Advisory',
                ctaHref: '/contact',
              },
              {
                name: 'Transaction Sprint',
                price: 'From $18,000',
                period: 'per transaction',
                features: [
                  'Diligence plan + issue tracker',
                  'Negotiation support on key terms',
                  'Core transaction documents',
                  'Closing coordination checklist',
                ],
                ctaLabel: 'Discuss a Deal',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Defense & Investigations',
                price: 'Custom',
                period: 'phased',
                features: [
                  'Rapid response intake',
                  'Privilege and document strategy',
                  'Agency communications support',
                  'Phased budgeting options',
                ],
                ctaLabel: 'Request Defense Intake',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                  Phased budgeting (recommended for complex matters).
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Complex matters rarely move in a straight line. Phasing creates decision points so leadership can
                  approve spend as facts develop—without losing momentum when timelines compress.
                </p>

                <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                  <p className="font-[family-name:var(--font-heading)] text-lg">Budget control, not friction</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We set thresholds and trigger approvals before expanding scope. That keeps matters predictable and
                    avoids surprises—especially in investigations and disputes.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                <AnimatedTabs
                  tabs={[
                    {
                      title: 'Phase-based',
                      value: 'phase-based',
                      content: (
                        <div className="space-y-4">
                          {[
                            { title: 'Phase 1: Assessment', description: 'Fact gathering, timeline mapping, and strategy memo.' },
                            {
                              title: 'Phase 2: Execution',
                              description: 'Negotiations, filings, motion practice, or investigation workstreams.',
                            },
                            {
                              title: 'Phase 3: Resolution',
                              description: 'Closing, settlement, remediation, and governance hardening.',
                            },
                          ].map((p) => (
                            <div key={p.title} className="border border-border rounded-lg p-4">
                              <p className="font-[family-name:var(--font-heading)]">{p.title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                    {
                      title: 'Hourly',
                      value: 'hourly',
                      content: (
                        <div className="space-y-4">
                          {[
                            {
                              title: 'Hourly billing',
                              description:
                                'Appropriate for evolving scopes, with weekly updates and budget checkpoints.',
                            },
                            {
                              title: 'Budget checkpoints',
                              description:
                                'We set thresholds and trigger approvals before expanding scope.',
                            },
                          ].map((p) => (
                            <div key={p.title} className="border border-border rounded-lg p-4">
                              <p className="font-[family-name:var(--font-heading)]">{p.title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturesCards3D
            badge="Value"
            headline="What pricing includes."
            subheadline="No surprises—just structured execution and clear communication."
            features={[
              {
                title: 'Partner-led oversight',
                description: 'Senior attention on strategy, negotiation posture, and key deliverables.',
              },
              {
                title: 'Decision-ready updates',
                description: 'Concise summaries that translate legal complexity into actions.',
              },
              {
                title: 'Risk documentation',
                description: 'Written rationale for key choices to support governance and defensibility.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion
            headline="Pricing FAQs."
            subheadline="How we keep matters predictable."
            items={[
              {
                question: 'Can you cap fees?',
                answer:
                  'Yes—when scope is defined or can be phased. We’ll propose caps per phase with clear assumptions and change triggers so leadership can approve spend with confidence.',
              },
              {
                question: 'Do you offer success fees?',
                answer:
                  'In select transaction contexts, we can discuss hybrid structures. Defense matters are typically not suitable for success fees given ethical and practical constraints.',
              },
              {
                question: 'How do you handle urgent weekend work?',
                answer:
                  'We can staff urgent matters quickly; any premium rates or special arrangements are confirmed in writing before work begins. We also align on a short action plan to avoid unnecessary churn.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Get a fee estimate aligned to your timeline."
        description="Share scope, deadlines, and decision-makers. We’ll propose a structure that keeps the matter controlled."
        ctaLabel="Get a Fee Estimate"
        ctaHref="/contact"
      />
    </div>
  )
}
