"use client"
import { useState } from "react"

const demoQuotes = [
  { id: 1, customer: "Sarah Mitchell", address: "12 Greenfield St, Subiaco", value: "$4,200", status: "qualified", daysAgo: 2 },
  { id: 2, customer: "James Thornton", address: "88 Rokeby Rd, Cottesloe", value: "$8,700", status: "cold", daysAgo: 3 },
  { id: 3, customer: "Rebecca Watson", address: "34 Churchill Ave, Claremont", value: "$3,100", status: "delivered", daysAgo: 0 },
  { id: 4, customer: "Michael Chen", address: "5 Hay St, West Perth", value: "$5,500", status: "opened", daysAgo: 1 },
  { id: 5, customer: "Lisa Patterson", address: "22 Jutland Rd, North Fremantle", value: "$2,900", status: "qualified", daysAgo: 4 },
]

const statusConfig: Record<string, { color: string; label: string; bg: string }> = {
  tracked: { color: "text-gray-400", label: "Tracked", bg: "bg-gray-500/20 text-gray-400" },
  delivered: { color: "text-blue-400", label: "Delivered", bg: "bg-blue-500/20 text-blue-400" },
  opened: { color: "text-cyan-400", label: "Opened", bg: "bg-cyan-500/20 text-cyan-400" },
  cold: { color: "text-orange-400", label: "Cold — calling", bg: "bg-orange-500/20 text-orange-400" },
  calling: { color: "text-yellow-400", label: "Calling now", bg: "bg-yellow-500/20 text-yellow-400" },
  connected: { color: "text-green-400", label: "Connected", bg: "bg-green-500/20 text-green-400" },
  qualified: { color: "text-emerald-400", label: "Qualified", bg: "bg-emerald-500/20 text-emerald-400" },
}

export default function Demo() {
  const [selected, setSelected] = useState<number | null>(null)
  const [sent, setSent] = useState(false)

  const quote = demoQuotes.find((q) => q.id === selected)

  return (
    <main className="min-h-screen bg-[#0c0a0f] text-white">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight">
          Quote<span className="text-cyan-400">Speed</span>
        </div>
        <a href="/" className="text-sm text-gray-400 hover:text-white transition">Back to home</a>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Live Demo Dashboard</h1>
          <p className="text-gray-400">Click any quote to see the call flow.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Recent Quotes</h2>
            {demoQuotes.map((q) => {
              const cfg = statusConfig[q.status] || statusConfig.tracked
              return (
                <button
                  key={q.id}
                  onClick={() => { setSelected(q.id); setSent(false) }}
                  className={`w-full text-left p-4 rounded-xl border transition ${
                    selected === q.id ? "bg-[#13111a] border-cyan-500/50" : "bg-[#13111a] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium">{q.customer}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${cfg.bg}`}>{cfg.label}</span>
                  </div>
                  <div className="text-xs text-gray-500">{q.address}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-cyan-400 font-medium">{q.value}</span>
                    <span className="text-xs text-gray-600">{q.daysAgo}d ago</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-2">
            {selected === null ? (
              <div className="bg-[#13111a] rounded-xl border border-white/10 p-12 text-center">
                <p className="text-gray-500">Select a quote to see the full call flow</p>
              </div>
            ) : quote ? (
              <div className="bg-[#13111a] rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{quote.customer}</h3>
                      <p className="text-gray-400 text-sm">{quote.address}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{quote.value}</div>
                      <div className={`text-xs px-2 py-0.5 rounded mt-1 inline-block ${statusConfig[quote.status].bg}`}>
                        {statusConfig[quote.status].label}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Call Flow</h4>
                  {[
                    { time: "Day 0", event: "Quote tracked", detail: "Email forwarded to system", color: "bg-gray-500", done: true },
                    { time: "Day 0", event: "Quote delivered", detail: "Resend confirmed delivery", color: "bg-blue-500", done: true },
                    { time: "Day 1", event: "Quote opened", detail: "Open pixel fired at 9:14am", color: "bg-cyan-500", done: true },
                    { time: "Day 3", event: "No reply — triggering call", detail: "48h passed, cold status activated", color: "bg-orange-500", done: true },
                    { time: "Now", event: "AI calling customer", detail: "VAPI voice agent dialing...", color: "bg-yellow-500 animate-pulse", done: quote.status === "cold" || quote.status === "calling" || quote.status === "qualified" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${step.color} flex-shrink-0`} />
                      <div className={`flex-1 rounded-lg px-4 py-3 ${step.done ? "bg-white/5" : "bg-white/5 opacity-30"}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">{step.event}</span>
                            <span className="text-gray-500 text-xs ml-3">{step.detail}</span>
                          </div>
                          <span className="text-xs text-gray-600">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-white/10">
                    {!sent ? (
                      <button
                        onClick={() => setSent(true)}
                        className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 rounded-xl transition"
                      >
                        Simulate AI Call
                      </button>
                    ) : (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                        <div className="text-emerald-400 font-medium mb-1">Call connected — qualified</div>
                        <div className="text-sm text-gray-400">Customer confirmed interest. Booking site visit for Thursday.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-white transition">Back to home</a>
        </div>
      </div>
    </main>
  )
}
