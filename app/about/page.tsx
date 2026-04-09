import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Built for founders who need clarity, speed, and confidence.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help teams navigate complex legal and operational decisions with
              practical guidance and a bias toward action.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Talk to us
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Deliver high-signal counsel and execution support for modern
              businesses—without the friction, opacity, or slow cycles.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We combine legal rigor with operator empathy to help you move
              faster while staying protected.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">What we value</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Clear, candid communication</li>
              <li>• Practical risk management</li>
              <li>• Fast turnaround</li>
              <li>• Founder-first mindset</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Team</h2>
            <p className="mt-2 text-slate-600">
              Experienced operators and counsel.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              {
                name: "Evelyn Hart, J.D.",
                role: "Managing Partner",
                bio: "M&A and securities-focused counsel. Known for disciplined diligence, decisive negotiation, and board-ready communication.",
                imageUrl: "/images/team-1.png",
              },
              {
                name: "Noah Kim",
                role: "Head of Operations",
                bio: "Turns complex workflows into simple systems. Focused on speed, quality, and measurable outcomes.",
                imageUrl: "/images/team-2.png",
              },
              {
                name: "Sofia Alvarez",
                role: "Client Success",
                bio: "Keeps engagements on track and clients informed. Proactive, detail-oriented, and relentlessly helpful.",
                imageUrl: "/images/team-3.png",
              },
            ] as TeamMember[]
          ).map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{member.name}</div>
                  <div className="text-sm text-slate-600">{member.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
