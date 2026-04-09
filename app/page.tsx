import { HeroGradientBlob } from '@/components/blocks/HeroGradientBlob'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { ContactForm } from '@/components/blocks/ContactForm'
import { CTABanner } from '@/components/blocks/CTABanner'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroGradientBlob
        badge="Chicago Corporate Counsel"
        headline="Vanguard counsel for boardroom-critical moments."
        subheadline="Chicago corporate law firm advising executives, funds, and founders through M&A, restructuring, securities litigation, and white-collar defense—with disciplined strategy and courtroom readiness."
        primaryCta={{ label: 'Request a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Explore Practice Areas', href: '/practice-areas' }}
      />

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground">
                When timelines compress and exposure rises, executives need counsel that is both transactional and
                litigation-aware. We run lean teams, lead with partners, and build a defensible record—so decisions can
                be made quickly, communicated clearly, and sustained under scrutiny.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card text-card-foreground border border-border rounded-lg shadow-xl p-5">
                  <p className="font-[family-name:var(--font-heading)] text-lg">Partner-led, end-to-end</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    No handoffs. The partner you meet is the partner driving strategy, negotiation posture, and key
                    deliverables.
                  </p>
                </div>
                <div className="bg-card text-card-foreground border border-border rounded-lg shadow-xl p-5">
                  <p className="font-[family-name:var(--font-heading)] text-lg">Decision-ready communication</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Clear options, risks, and next steps—written and structured for boards, committees, and in-house
                    teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Chicago corporate counsel in a modern boardroom setting"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="p-6">
                <p className="font-[family-name:var(--font-heading)] text-xl">Built for high-stakes moments</p>
                <p className="mt-2 text-muted-foreground">
                  We advise on transactions and disputes where the outcome affects enterprise value, executive exposure,
                  and reputation. Our approach is conservative, structured, and fast—without shortcuts.
                </p>
              </div>
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
                  'Deal strategy, diligence, negotiation, and closing support for strategic buyers, PE sponsors, and founder-led exits. We focus on risk allocation that holds up after close—because the record matters.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Typical work</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>LOIs • Purchase Agreements • Disclosure Schedules • Closing Checklists</li>
                      <li>Reps & warranties strategy and indemnity structure</li>
                      <li>Management rollovers and equity incentive alignment</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Corporate Restructuring',
                description:
                  'Stabilize operations, protect enterprise value, and navigate creditor dynamics with a litigation-aware posture. We document decisions to preserve leverage and reduce future disputes.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Typical work</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>Workouts • Forbearance • Governance • Distressed M&A</li>
                      <li>Covenant strategy and amendment documentation</li>
                      <li>Stakeholder mapping and negotiation cadence</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Securities Litigation',
                description:
                  'Defense for issuers, officers, and financial institutions in high-stakes investigations and civil claims. We prioritize early leverage, clean narratives, and disciplined discovery.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Typical work</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>10b-5 • Derivative Actions • Internal Investigations</li>
                      <li>Motion practice strategy and discovery containment</li>
                      <li>Regulatory response management and remediation planning</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'White-Collar Defense',
                description:
                  'Crisis response and defense strategy for executives and companies facing enforcement and criminal exposure. We move quickly, protect privilege, and control messaging.',
                content: (
                  <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                    <p className="font-[family-name:var(--font-heading)] text-lg">Typical work</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>DOJ • SEC • State AG • Parallel Proceedings</li>
                      <li>Privilege protocols, witness prep, and interview defense</li>
                      <li>Agency negotiation and resolution strategy</li>
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
          <FeaturesGrid
            badge="Practice Areas"
            headline="Focused practice. Full-spectrum execution."
            subheadline="Four core disciplines built for complex transactions and high-exposure disputes. We bring disciplined process, senior attention, and documentation that anticipates scrutiny."
            features={[
              {
                title: 'Mergers & Acquisitions',
                description:
                  'Deal strategy, diligence design, negotiation leadership, and closing coordination for buyers, sponsors, and founder-led exits.',
                icon: 'Briefcase',
              },
              {
                title: 'Corporate Restructuring',
                description:
                  'Workouts, forbearance, governance guidance, and distressed transactions—executed with a dispute-ready posture.',
                icon: 'Shield',
              },
              {
                title: 'Securities Litigation',
                description:
                  'Defense for issuers and executives in investigations and civil claims, with early case assessment and precision discovery.',
                icon: 'Scale',
              },
              {
                title: 'White-Collar Defense',
                description:
                  'Rapid response for subpoenas and enforcement exposure, built around privilege strategy, narrative control, and operational continuity.',
                icon: 'Gavel',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm text-muted-foreground">Measured outcomes</p>
                <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl md:text-4xl">
                  Measured outcomes. Documented impact.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Representative capabilities and results—tailored to each matter’s facts and risk profile. We focus on
                  the decisions that move outcomes, and we document the rationale so boards and executives can act with
                  confidence.
                </p>

                <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                  <p className="font-[family-name:var(--font-heading)] text-lg">Responsiveness matters</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For urgent intake, we aim to respond within one business day—often within 24 hours—so you can
                    stabilize timelines, stakeholders, and messaging early.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                <StatsCounter
                  stats={[
                    { label: 'Transaction value advised', value: 3.2, suffix: 'B+' },
                    { label: 'Restructuring matters supported', value: 140, suffix: '+' },
                    { label: 'Investigations managed', value: 80, suffix: '+' },
                    { label: 'Average response time', value: 24, suffix: 'h' },
                  ]}
                />
                <p className="mt-4 text-xs text-muted-foreground">
                  Figures reflect aggregate experience across representative matters and workstreams; outcomes depend on
                  specific facts and applicable law.
                </p>
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <TeamGrid
            headline="Senior-led representation—no handoffs."
            subheadline="Every matter is partner-driven, with lean teams and direct access. We combine transactional fluency with a litigation-ready posture to protect outcomes after the decision is made."
            members={[
              {
                name: 'Evelyn Hart, J.D.',
                role: 'Managing Partner • M&A',
                bio: 'Leads complex acquisitions and cross-border transactions with a governance-first approach and disciplined risk allocation.',
                imageUrl: '/images/team-1.png',
              },
              {
                name: 'Marcus Lin, J.D.',
                role: 'Partner • Restructuring',
                bio: 'Advises companies and stakeholders through workouts, recapitalizations, and distressed transactions.',
                imageUrl: '/images/team-2.png',
              },
              {
                name: 'Nadia Reyes, J.D.',
                role: 'Partner • Securities Litigation',
                bio: 'Defends issuers and executives in securities claims and investigations with early motion practice and precision discovery.',
                imageUrl: '/images/team-3.png',
              },
            ]}
          />
          <div className="mt-10 bg-card border border-border rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xl">A lean team with courtroom discipline</p>
                <p className="mt-2 text-muted-foreground">
                  We staff matters to match the risk. That means fewer layers, faster answers, and documents drafted as
                  if they will be read by a regulator or judge—because sometimes they will be.
                </p>
              </div>
              <img
                src="/images/office.png"
                alt="Professional legal team collaborating on strategy"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialsAnimated
            headline="Trusted by leaders who can’t afford ambiguity."
            subheadline="What clients value most: clarity, speed, and control under pressure."
            testimonials={[
              {
                quote:
                  'They were decisive, practical, and always two steps ahead in negotiations. We closed on schedule despite major late-stage issues.',
                name: 'General Counsel',
                role: 'Mid-market manufacturing company',
                company: 'Confidential',
                imageUrl: '/images/team-1.png',
              },
              {
                quote:
                  'In a high-exposure investigation, they managed risk and messaging with precision. Their calm, structured approach was invaluable.',
                name: 'Chief Executive Officer',
                role: 'Financial services firm',
                company: 'Confidential',
                imageUrl: '/images/team-2.png',
              },
              {
                quote:
                  'They brought courtroom discipline to every document. That posture changed the leverage dynamics immediately.',
                name: 'Board Member',
                role: 'Healthcare services group',
                company: 'Confidential',
                imageUrl: '/images/team-3.png',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-card border border-border rounded-lg shadow-xl p-6">
              <p className="font-[family-name:var(--font-heading)] text-2xl">A discreet environment for serious matters</p>
              <p className="mt-3 text-muted-foreground">
                If you’re facing a compressed deal timeline, a creditor escalation, a subpoena, or a board-level dispute,
                we can help you triage exposure and define next actions quickly. Please do not include sensitive personal
                information in your message.
              </p>

              <div className="mt-6">
                <ParallaxScroll
                  images={[
                    '/images/meeting.png',
                    '/images/handshake.png',
                    '/images/team-1.png',
                    '/images/team-2.png',
                  ]}
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl p-6">
              <ContactForm
                headline="Request a confidential consultation."
                subheadline="Share a brief overview. We’ll respond within one business day—often sooner."
                contactInfo={[
                  { label: 'Office', value: 'Chicago, IL' },
                  { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                  { label: 'Phone', value: '(312) 555-0147' },
                  { label: 'Hours', value: 'Mon–Fri, 8:30am–6:00pm CT' },
                ]}
              />
              <p className="mt-4 text-xs text-muted-foreground">
                Contacting the firm does not create an attorney-client relationship. Do not send confidential
                information until an engagement agreement is signed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="If the stakes are high, the plan must be clear."
        description="Tell us what you’re facing. We’ll outline options, decision points, and next steps—without noise."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
      />
    </div>
  )
}
