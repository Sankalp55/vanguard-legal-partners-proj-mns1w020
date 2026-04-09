import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export default function AboutPage() {
  const team: TeamMember[] = [
    {
      name: 'Evelyn Hart, J.D.',
      role: 'Managing Partner',
      bio: 'M&A counsel focused on governance, risk allocation, and decisive negotiation.',
      imageUrl: '/images/team-1.png',
    },
    {
      name: 'Noah Bennett, Esq.',
      role: 'Corporate Counsel',
      bio: 'Commercial contracts and compliance with a practical, business-first approach.',
      imageUrl: '/images/team-2.png',
    },
    {
      name: 'Sophia Kim, J.D.',
      role: 'Litigation & Disputes',
      bio: 'Dispute strategy, settlement leverage, and courtroom readiness when it matters.',
      imageUrl: '/images/team-3.png',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 text-lg text-gray-600">
            We help founders and operators move faster with clear, business-aligned legal guidance.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium"
            >
              Pricing
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
          <Image src="/images/about-hero.png" alt="About" fill className="object-cover" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Our team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                  <Image src={m.imageUrl} alt={m.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
