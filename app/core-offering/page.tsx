import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTABanner } from '@/components/blocks/CTABanner'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function CoreOfferingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-muted-foreground">Corporate Counsel</p>
              <h1 className="mt-2 font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                Corporate counsel for transactions, disputes, and investigations.
              </h1>
              <p className="mt-4 text-muted-foreground">
                A single partner-led team that can structure the deal, manage the record, and defend the outcome—built
                for boards, executives, and funds. We combine transactional execution with a litigation-ready posture so
                the work holds up after the decision is made.
              </p>

              <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg">Where we add leverage</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We help leadership teams move from “what is happening?” to “what do we decide?”—then document the
                  rationale so the outcome is defensible to stakeholders, regulators, and courts.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Corporate counsel advising leadership team"
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
                title: 'Deal leadership',
                description:
                  'From LOI to closing—terms, diligence, and negotiation posture handled with precision. We focus on risk allocation that remains enforceable under pressure.',
              },
              {
                title: 'Value preservation',
                description:
                  'Stabilize stakeholders and navigate distress with defensible documentation and disciplined communication.',
              },
              {
                title: 'Market integrity defense',
                description:
                  'Securities disputes and investigations managed with early leverage and clean narratives.',
              },
              {
                title: 'Crisis response',
                description:
                  'White-collar defense and investigation response designed for speed, privilege protection, and control.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <FeaturesGrid
              badge="Representative matters"
              headline="Representative matters (anonymized)."
              subheadline="Illustrative examples of how we approach high-stakes work."
              features={[
                {
                  title: 'Accelerated acquisition close',
                  description:
                    'Designed a diligence triage system and negotiated risk allocation to close under a compressed timeline while preserving post-close remedies.',
                },
                {
                  title: 'Creditor negotiation and stabilization',
                  description:
                    'Built a documentation-first negotiation strategy to align stakeholders, extend runway, and reduce litigation exposure.',
                },
                {
                  title: 'Securities claim defense posture',
                  description:
                    'Executed early case assessment and motion strategy to narrow claims and control discovery scope.',
                },
                {
                  title: 'Investigation response plan',
                  description:
                    'Implemented privilege protocol, coordinated interviews, and managed agency communications to reduce operational disruption.',
                },
              ]}
            />
          </TracingBeam>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialsAnimated
            headline="Client experience, in their words."
            subheadline="Authoritative guidance with practical execution."
            testimonials={[
              {
                quote: 'They translated complexity into a plan our board could approve in one meeting.',
                name: 'Chair',
                role: 'Private company board',
                company: 'Confidential',
                imageUrl: '/images/team-1.png',
              },
              {
                quote: 'Fast, disciplined, and exceptionally clear on risk. Exactly what we needed.',
                name: 'CFO',
                role: 'Logistics company',
                company: 'Confidential',
                imageUrl: '/images/team-2.png',
              },
              {
                quote: 'Their documentation and negotiation posture changed the leverage dynamic immediately.',
                name: 'VP, Legal',
                role: 'Services firm',
                company: 'Confidential',
                imageUrl: '/images/team-3.png',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Bring us the hard problems."
        description="If the matter touches enterprise value or executive exposure, we’ll help you move with confidence."
        ctaLabel="Request Confidential Intake"
        ctaHref="/contact"
      />
    </div>
  )
}
