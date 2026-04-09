import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export default function PracticeAreasPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-muted-foreground">Practice Areas</p>
              <h1 className="mt-2 font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                Corporate law with a litigation-ready edge.
              </h1>
              <p className="mt-4 text-muted-foreground">
                Our practice areas are built for the realities of modern corporate risk: compressed timelines, regulatory
                scrutiny, and reputational exposure. We help decision-makers move quickly while preserving leverage and
                defensibility—because the record often becomes the battleground.
              </p>

              <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg">How we engage</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We can serve as lead counsel or as a focused workstream team (diligence, motion practice, investigation
                  response). In either case, partners remain directly involved.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Legal documents and negotiation materials on a conference table"
                className="w-full h-80 md:h-[28rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <StickyScrollReveal
            content={[
              {
                title: 'Mergers & Acquisitions',
                description:
                  'We advise across the deal lifecycle—from diligence design to negotiation strategy and post-close risk containment. Our drafting anticipates disputes and regulatory questions, not just closing mechanics.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Selected capabilities</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Buy-side and sell-side representation</li>
                      <li>Diligence planning and issue triage</li>
                      <li>Reps & warranties and indemnity strategy</li>
                      <li>Management rollovers and equity incentives</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Corporate Restructuring',
                description:
                  'We help leadership teams preserve value, stabilize stakeholders, and execute restructuring moves with clarity. Documentation and governance are treated as risk controls—not afterthoughts.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Selected capabilities</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Forbearance and amendment negotiations</li>
                      <li>Governance and fiduciary guidance</li>
                      <li>Distressed transactions and asset sales</li>
                      <li>Dispute posture and documentation</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Securities Litigation',
                description:
                  'We defend companies and executives in securities claims with early case assessment and precision motion practice. The goal is leverage early and controlled discovery later.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Selected capabilities</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Class actions and derivative claims</li>
                      <li>Regulatory inquiries and responses</li>
                      <li>Discovery strategy and eDiscovery coordination</li>
                      <li>Settlement strategy and risk modeling</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'White-Collar Defense',
                description:
                  'Crisis counsel for investigations, subpoenas, and parallel proceedings—built around speed, privilege, and narrative control. We help protect operations while the matter is managed.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Selected capabilities</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Internal investigations and reporting</li>
                      <li>Witness preparation and interview defense</li>
                      <li>Agency negotiations and resolution strategy</li>
                      <li>Compliance remediation planning</li>
                    </ul>
                  </div>
                ),
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
                  Our engagement process: structured and fast.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  A conservative, repeatable approach designed to reduce uncertainty. We align early on decision-makers,
                  deadlines, and risk posture—then execute with cadence and documentation discipline.
                </p>

                <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                  <p className="font-[family-name:var(--font-heading)] text-lg">Why this matters</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    In high-stakes matters, the fastest path is often the most structured one. Clear phases reduce
                    rework, prevent misalignment, and keep stakeholders confident under pressure.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: '1) Intake & triage',
                    desc: 'We identify deadlines, decision-makers, and immediate risk controls within the first call.',
                  },
                  {
                    title: '2) Strategy memo',
                    desc: 'A concise plan outlining options, leverage points, and recommended next actions.',
                  },
                  {
                    title: '3) Execution sprint',
                    desc: 'Deal docs, filings, negotiations, or defense actions—run with partner oversight.',
                  },
                  {
                    title: '4) Closeout & risk hardening',
                    desc: 'Post-close obligations, governance updates, and documentation for future defensibility.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">{item.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <FeaturesGrid
                badge="Industries"
                headline="Built for regulated, operationally complex businesses."
                subheadline="We work across sectors where governance, disclosure, and stakeholder dynamics shape outcomes."
                features={[
                  {
                    title: 'Manufacturing & industrials',
                    description: 'Operational risk and supply chain exposure addressed alongside deal mechanics.',
                  },
                  {
                    title: 'Healthcare services',
                    description: 'Governance and reputational risk considered in transaction and dispute posture.',
                  },
                  {
                    title: 'Fintech & financial services',
                    description: 'Regulatory scrutiny and investigation readiness integrated into strategy.',
                  },
                  {
                    title: 'Logistics & services',
                    description: 'Contract, creditor, and operational constraints managed with timeline discipline.',
                  },
                ]}
              />
            </div>
            <div className="bg-card border border-border rounded-lg shadow-xl p-6">
              <p className="font-[family-name:var(--font-heading)] text-xl">A discreet working style</p>
              <p className="mt-3 text-muted-foreground">
                For boards and executive teams, we prioritize confidentiality, practical options, and written guidance
                that can be shared internally. We can coordinate with in-house counsel and existing firms to minimize
                disruption and keep communication controlled.
              </p>
              <div className="mt-6">
                <ParallaxScroll
                  images={[
                    '/images/office.png',
                    '/images/meeting.png',
                    '/images/handshake.png',
                    '/images/team-1.png',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion
            headline="Common questions."
            subheadline="Clear answers to help you move forward with confidence."
            items={[
              {
                question: 'Do you work with in-house counsel and existing firms?',
                answer:
                  'Yes. We frequently serve as lead counsel or as a focused team for a specific workstream (e.g., diligence, motion practice, investigation response). We align on roles early to keep communication clean and avoid duplicative effort.',
              },
              {
                question: 'How quickly can you engage on urgent matters?',
                answer:
                  'For time-sensitive matters, we can typically schedule an initial consultation within 24 hours and begin work immediately after conflict checks and engagement confirmation. If there is a hard deadline, we will map a 48-hour action plan.',
              },
              {
                question: 'What industries do you serve?',
                answer:
                  'We work across industries including manufacturing, healthcare services, fintech, professional services, and logistics—where governance and risk posture matter. We also coordinate with subject-matter specialists where needed.',
              },
              {
                question: 'Do you offer fixed-fee options?',
                answer:
                  'For defined scopes (e.g., discrete diligence packages, investigation response phases), we can propose fixed fees or capped arrangements. For evolving matters, we use budget checkpoints and written change triggers.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="If the stakes are high, the plan must be clear."
        description="Tell us what you’re facing. We’ll outline options and next steps."
        ctaLabel="Request Consultation"
        ctaHref="/contact"
      />
    </div>
  )
}
