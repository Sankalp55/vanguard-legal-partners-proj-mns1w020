'use client'

import { motion } from 'framer-motion'

import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function ContactPage() {
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
              <div className="text-sm text-muted-foreground">Contact</div>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-tight">
                Confidential intake. Prompt response.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                Send a request and we’ll follow up to schedule a consultation. For urgent matters, call directly. We
                maintain careful intake boundaries and will guide you on what to share safely.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+13125550148"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold"
                >
                  Call (312) 555-0148
                </a>
                <a
                  href="/practice-areas"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-card text-foreground px-6 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
                >
                  View Practice Areas
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/office.png"
                  alt="Abstract Chicago grid linework with a gold pin accent"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
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
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl">Send a consultation request</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We’ll confirm receipt and propose times. This is a client-side form submission only. Do not send
                confidential or time-sensitive information through this form.
              </p>

              <div className="mt-8 bg-card rounded-3xl shadow-md border border-border overflow-hidden">
                <img
                  src="/images/meeting.png"
                  alt="Abstract office corridor suggesting discretion"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-card text-card-foreground rounded-3xl shadow-md border border-border p-8">
                <ContactForm
                  headline="Consultation request"
                  subheadline="Do not send confidential or time-sensitive information through this form. Submitting does not create an attorney-client relationship."
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

      {/* What happens next (StickyScrollReveal) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <StickyScrollReveal
            content={[
              {
                title: 'Confirmation',
                description: 'We confirm receipt and clarify the best contact method.',
              },
              {
                title: 'Conflict check',
                description: 'We run a standard conflict check before substantive discussion.',
              },
              {
                title: 'Consultation',
                description:
                  'We review facts, objectives, and decision gates; you receive a recommended plan and next steps.',
              },
              {
                title: 'Engagement',
                description:
                  'If aligned, we finalize scope and fees in writing and begin work with a clear communication cadence.',
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ (TracingBeam wrapper) */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <TracingBeam>
            <FAQAccordion
              headline="Contact FAQs"
              subheadline="Quick answers before you reach out."
              items={[
                {
                  question: 'Do you offer emergency consultations?',
                  answer:
                    'Yes. If your matter is time-sensitive, call directly and we’ll prioritize a rapid intake, subject to conflicts and availability.',
                },
                {
                  question: 'Can you sign an NDA before details?',
                  answer:
                    'We can discuss confidentiality needs during intake. Formal NDAs may be considered depending on context, conflicts, and the nature of the requested information.',
                },
                {
                  question: 'Where are you located?',
                  answer:
                    'We’re based in Chicago and work with clients across the U.S. and internationally depending on matter requirements and jurisdictional considerations.',
                },
              ]}
            />
          </TracingBeam>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <CTAVortex
            headline="Prefer to speak now?"
            description="Call and we’ll route you to the right partner."
            ctaLabel="Call (312) 555-0148"
            ctaHref="tel:+13125550148"
          />
        </div>
      </section>
    </div>
  )
}
