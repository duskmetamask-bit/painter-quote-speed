import Link from "next/link"

const quoteStates = [
  { state: "Tracked", label: "Quote forwarded to system", color: "bg-gray-500", desc: "Email detected, awaiting delivery" },
  { state: "Delivered", label: "Email delivered", color: "bg-blue-500", desc: "Resend confirmed delivery" },
  { state: "Opened", label: "Email opened", color: "bg-cyan-500", desc: "Open pixel fired" },
  { state: "Cold", label: "Gone cold — 48h no reply", color: "bg-orange-500", desc: "AI call auto-triggered" },
  { state: "Calling", label: "AI calling customer", color: "bg-yellow-500 animate-pulse", desc: "VAPI agent on the line" },
  { state: "Connected", label: "Customer answered", color: "bg-green-500", desc: "Live conversation in progress" },
  { state: "Qualified", label: "Job qualified", color: "bg-emerald-500", desc: "Customer committed to next step" },
]

const faqs = [
  { q: "How does the AI call sound?", a: "It's a real voice agent — pauses, branches based on responses, sounds like a real office calling." },
  { q: "What if the customer gets annoyed?", a: "The agent is polite, professional, and immediately offers to stop calling if asked. You can listen to every call." },
  { q: "How do I forward quotes?", a: "Just BCC or forward your quote emails to your unique address. We handle the rest." },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0a0f] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight">
          Quote<span className="text-cyan-400">Speed</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition">How it works</a>
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition">Pricing</a>
          <Link href="/demo" className="bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-medium px-4 py-2 rounded-lg transition">
            Book Demo
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide">
          For Australian painting businesses
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Your quotes are going cold.<br />
          <span className="text-cyan-400">We fix that.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Painters send 10-20 quotes a month. 40-60% go unopened, unanswered, and the job goes to whoever calls first.
          QuoteSpeed AI calls your prospects automatically — so you never lose a job to silence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl text-lg transition">
            Start for $299/mo
          </a>
          <a href="#how-it-works" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg transition">
            See how it works
          </a>
        </div>
      </section>

      {/* Quote Tracker Demo */}
      <section id="how-it-works" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quote Tracker — Live Demo</h2>
          <p className="text-gray-400">Watch a quote move through states in real time</p>
        </div>
        <div className="bg-[#13111a] rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col gap-3">
            {quoteStates.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${step.color} flex-shrink-0`} />
                <div className="flex-1 bg-white/5 rounded-lg px-4 py-3 flex items-center justify-between">
                  <div>
                    <span className="font-medium">{step.state}</span>
                    <span className="text-gray-400 text-sm ml-3">{step.desc}</span>
                  </div>
                  {i === 3 && <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">AI fires here</span>}
                  {i === 4 && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded animate-pulse">Calling now</span>}
                  {i === 6 && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Qualified</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Send your quote",
              desc: "You send your quote email as normal. Forward or BCC to your unique address — or connect your email directly.",
            },
            {
              num: "02",
              title: "We track everything",
              desc: "We monitor opens, clicks, and replies. When 48 hours pass with no response, we flag it as cold.",
            },
            {
              num: "03",
              title: "AI calls the prospect",
              desc: "Our voice agent calls the customer — as your office — qualifies the job, and logs the result in your dashboard.",
            },
          ].map((step) => (
            <div key={step.num} className="bg-[#13111a] rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-cyan-400/30 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call Scripts */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The call scripts</h2>
          <p className="text-gray-400">Every call is professional, polite, and in your voice</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#13111a] rounded-xl p-6 border border-white/10">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Voicemail</div>
            <blockquote className="text-gray-300 italic leading-relaxed">
              "Hi [Customer], it's [Painter Business Name] calling. I'm following up about the quote we sent last week — just wanted to make sure you received it and answer any questions. If you're still interested, I'd love to schedule a time to chat. Thanks."
            </blockquote>
          </div>
          <div className="bg-[#13111a] rounded-xl p-6 border border-white/10">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Live answer</div>
            <blockquote className="text-gray-300 italic leading-relaxed">
              "Hi [Customer], it's [Painter Business Name] calling. I'm following up about the quote we sent — just wanted to make sure you received it and answer any questions. Have you had a chance to look it over? [Branch based on response]"
            </blockquote>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">You can listen to every call in your dashboard. Full transcripts stored.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
          <p className="text-gray-400">No contracts. Cancel anytime.</p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="bg-[#13111a] rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold mb-1">$299</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited quote tracking",
                "Up to 50 AI calls/month",
                "Up to 20 painter alert calls/month",
                "Dashboard with call history + transcripts",
                "Calendar integration (Google / Calendly)",
                "30-minute onboarding call",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#cta" className="block w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl text-center transition">
              Book 10-min setup call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-[#13111a] rounded-xl border border-white/10 group">
              <summary className="px-6 py-4 cursor-pointer font-medium list-none flex items-center justify-between">
                {faq.q}
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to stop losing jobs to silence?</h2>
        <p className="text-gray-400 mb-8">Book a free 10-minute setup call. We'll get you live in one day.</p>
        <Link href="/demo" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl text-lg transition">
          Book Your Free Call
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 max-w-6xl mx-auto text-center text-gray-500 text-sm">
        <p>Built by EmvyAI — AI Consultancy for small business</p>
      </footer>
    </main>
  )
}
