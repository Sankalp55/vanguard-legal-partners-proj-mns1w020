import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-muted-foreground">Contact</p>
              <h1 className="mt-2 font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
                Contact Vanguard Legal Partners.
              </h1>
              <p className="mt-4 text-muted-foreground">
                Confidential intake for corporate transactions, disputes, and investigations. We respond within one
                business day. If you are facing an urgent deadline, include it in your message and consider calling the
                office.
              </p>

              <div className="mt-8 bg-card border border-border rounded-lg shadow-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg">Important note</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contacting the firm does not create an attorney-client relationship. Please do not send confidential
                  information until an engagement agreement is signed.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Confidential consultation setting"
                className="w-full h-80 md:h-[28rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                <ContactForm
                  headline="Start here."
                  subheadline="Provide a high-level overview. Do not include sensitive personal information in the message field."
                  contactInfo={[
                    { label: 'Office', value: 'Chicago, IL' },
                    { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                    { label: 'Phone', value: '(312) 555-0147' },
                    { label: 'Hours', value: 'Mon–Fri, 8:30am–6:00pm CT' },
                  ]}
                />
                <p className="mt-4 text-xs text-muted-foreground">
                  If you need to share sensitive materials, we will coordinate a secure method after conflicts are
                  cleared.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg shadow-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-2xl">A clear, conservative intake process</p>
                <p className="mt-3 text-muted-foreground">
                  We keep intake structured so you can move quickly without over-sharing before conflicts are cleared.
                  Expect a short consult focused on objectives, deadlines, stakeholders, and immediate risk controls.
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
          </TracingBeam>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturesGrid
            badge="Next steps"
            headline="What happens next."
            subheadline="A clear, conservative intake process."
            features={[
              {
                title: 'Conflict check',
                description: 'We confirm we can act before discussing confidential details.',
              },
              {
                title: 'Partner consult',
                description: 'A partner reviews facts, objectives, and constraints.',
              },
              {
                title: 'Scope & fee proposal',
                description: 'You receive a written scope with pricing structure options.',
              },
              {
                title: 'Immediate next steps',
                description: 'If urgent, we align on a 48-hour action plan.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion
            headline="Contact FAQs."
            subheadline="Quick guidance before you reach out."
            items={[
              {
                question: 'Do you offer same-day consultations?',
                answer:
                  'When schedules allow, yes—especially for urgent transactions, subpoenas, or investigative requests. If you have a hard deadline, call the office and include it in your message.',
              },
              {
                question: 'Do you work outside Illinois?',
                answer:
                  'We can support multi-jurisdictional matters, often coordinating with local counsel where required. We will confirm licensing and engagement structure during intake.',
              },
              {
                question: 'Can you sign an NDA before an initial call?',
                answer:
                  'In many cases, yes. We’ll confirm conflicts first and then coordinate an NDA if appropriate for the matter.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Important notice."
        description="Contacting the firm does not create an attorney-client relationship. Please do not send confidential information until an engagement agreement is signed."
        ctaLabel="Review Practice Areas"
        ctaHref="/practice-areas"
      />
    </div>
  )
}
