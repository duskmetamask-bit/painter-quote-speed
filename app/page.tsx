export const metadata = {
  title: 'Painter Quote Speed — AI Follow-Up for Painters',
  description: 'Every cold quote gets a follow-up call. Built for Australian painters. $299/mo.',
};

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, backgroundColor: 'rgba(12,10,15,0.9)', backdropFilter: 'blur(12px)', zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--cyan)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 4h12M3 9h8M3 14h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontWeight: '700', fontSize: '17px', letterSpacing: '-0.3px' }}>Quote Speed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#how-it-works" style={{ color: 'var(--text-dim)', fontSize: '14px' }}>How it works</a>
            <a href="#demo" style={{ color: 'var(--text-dim)', fontSize: '14px' }}>Demo</a>
            <a href="#pricing" style={{ color: 'var(--text-dim)', fontSize: '14px' }}>Pricing</a>
            <a href="#book" style={{ backgroundColor: 'var(--cyan)', color: 'white', fontSize: '14px', fontWeight: '600', padding: '8px 18px', borderRadius: '8px' }}>
              Book demo
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)', borderRadius: '100px', padding: '6px 16px', marginBottom: '32px', fontSize: '13px', color: 'var(--cyan)' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--cyan)', borderRadius: '50%', display: 'inline-block' }}></span>
            Built for Australian painters — powered by VAPI + Resend
          </div>
          <h1 style={{ fontSize: 'clamp(38px, 7vw, 68px)', fontWeight: '800', letterSpacing: '-2px', lineHeight: '1.1', marginBottom: '24px' }}>
            Your quotes are going cold.<br/>
            <span style={{ color: 'var(--cyan)' }}>Here's the fix.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-dim)', lineHeight: '1.65', maxWidth: '540px', margin: '0 auto 40px' }}>
            Every quote that goes unopened for 48 hours triggers an AI call — from your business name, to your prospect — so you stop losing jobs to silence.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#book" style={{ backgroundColor: 'var(--cyan)', color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '10px', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
              Book a 10-min setup call
            </a>
            <a href="#how-it-works" style={{ border: '1px solid var(--border)', color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '600', fontSize: '15px', padding: '14px 32px', borderRadius: '10px', backgroundColor: 'var(--bg-elevated)' }}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-elevated)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '50–70%', label: 'of painter quotes get no response' },
            { stat: '48 hrs', label: 'before a quote goes permanently cold' },
            { stat: '3x', label: 'more jobs won with a single follow-up call' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--cyan)', letterSpacing: '-1px', marginBottom: '4px' }}>{stat}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px' }}>Three steps. Zero admin.</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>You send quotes like normal. We handle everything after.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              {
                step: '01',
                title: 'Forward your quote email',
                desc: 'After you send a quote, forward it to your专属地址. Our system picks it up instantly — no new software, no integrations needed.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'We track every open',
                desc: 'Resend monitors when your prospect opens your email. You see the status in your dashboard — delivered, opened, or silent.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'AI calls within 48 hours',
                desc: 'If unopened or unreplied, our AI calls your prospect — as your business name — to break the silence and book a conversation.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012.01 0h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z"/>
                  </svg>
                ),
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  {icon}
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--cyan)', letterSpacing: '1px' }}>STEP {step}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DEMO — QUOTE TRACKER */}
      <section id="demo" style={{ padding: '80px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px' }}>Your quote dashboard</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>Watch a quote move through the pipeline in real time.</p>
          </div>

          {/* Demo quote cards */}
          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            {/* Cold quote */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>Sarah Thompson</span>
                  <span style={{ backgroundColor: 'rgba(234,179,8,0.15)', border: '1px solid rgba(234,179,8,0.3)', color: '#eab308', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '100px' }}>COLD</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sent 3 days ago</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)' }}>52 Primrose Ave, Floreat — Full exterior repaint</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>$8,400 quoted</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                <button style={{ backgroundColor: 'var(--cyan)', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                  Call now
                </button>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>AI calling in 4 hrs</span>
              </div>
            </div>

            {/* Calling quote */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--cyan-border)', borderRadius: '14px', padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>Mark Renshaw</span>
                  <span style={{ backgroundColor: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)', color: 'var(--cyan)', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '100px' }}>CALLING</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sent 2 days ago</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)' }}>18 Forrest St, Subiaco — Interior repaint + ceilings</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>$12,200 quoted</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--cyan)', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></div>
                <span style={{ fontSize: '12px', color: 'var(--cyan)', fontWeight: '600' }}>Live</span>
              </div>
            </div>

            {/* Qualified quote */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>Jenna Kowalski</span>
                  <span style={{ backgroundColor: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '100px' }}>QUALIFIED</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Call completed 22 Jun</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)' }}>9 Dalcross Gardnes, Mt Lawley — Full house repaint</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>$9,800 quoted</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: '600' }}>Booked: Thu 10am</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Call transcript ready</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 20px', fontSize: '13px', color: 'var(--text-dim)', textAlign: 'center' }}>
            This is a live prototype dashboard. Resend + VAPI integrations are connected to your account.
          </div>
        </div>
      </section>

      {/* CALL SCRIPTS */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-elevated)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px' }}>Hear the calls</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>Two call types — painter alert and prospect follow-up. Both sound like your office.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                type: 'Painter Alert',
                tag: 'VOICEMAIL',
                desc: 'Sent to you when a quote goes cold. 25 seconds.',
                script: [
                  '"Hi James, it\'s Quote Speed here. Quick heads-up — your quote to Sarah Thompson hasn\'t been opened yet."',
                  '"Quotes that get a follow-up call within 48 hours close at much higher rates."',
                  '"I\'d like to call her on your behalf. Reply YES or head to your dashboard to trigger it."',
                ],
                caller: 'To: James (Painter)',
              },
              {
                type: 'Prospect Follow-Up',
                tag: 'LIVE CALL',
                desc: 'AI calls the prospect as your business name. Books appointments automatically.',
                script: [
                  '"Hi Sarah, it\'s Coastal Painters calling. How are you going?"',
                  '"I\'m following up about the quote we sent — just wanted to make sure you received it okay."',
                  '"Have you had a chance to look it over? Happy to talk through any questions."',
                ],
                caller: 'To: Sarah (Prospect)',
              },
            ].map(({ type, tag, desc, script, caller }) => (
              <div key={type} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{type}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{desc}</p>
                  </div>
                  <span style={{ backgroundColor: tag === 'LIVE CALL' ? 'var(--cyan-dim)' : 'rgba(139,92,246,0.1)', border: `1px solid ${tag === 'LIVE CALL' ? 'var(--cyan-border)' : 'rgba(139,92,246,0.3)'}`, color: tag === 'LIVE CALL' ? 'var(--cyan)' : '#a78bfa', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.5px' }}>
                    {tag}
                  </span>
                </div>
                <div style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
                  {script.map((line, i) => (
                    <div key={i} style={{ marginBottom: i < script.length - 1 ? '10px' : 0 }}>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '3px' }}>{i === 0 ? 'Opener' : i === script.length - 1 ? 'Close' : 'Bridge'}</div>
                      <div style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.5' }}>{line}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button style={{ backgroundColor: 'var(--cyan)', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', flex: 1 }}>
                    Play audio
                  </button>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{caller}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px' }}>Simple pricing</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', marginBottom: '40px' }}>One plan. Everything included. Cancel anytime.</p>
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--cyan-border)', borderRadius: '20px', padding: '40px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--cyan)', marginBottom: '8px', letterSpacing: '1px' }}>STARTER PLAN</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
              <span style={{ fontSize: '56px', fontWeight: '800', letterSpacing: '-2px' }}>$299</span>
              <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>/month</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginBottom: '32px' }}>No contracts. No setup fees. No lock-in.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
              {[
                'Unlimited quote tracking',
                'Up to 50 AI calls/month',
                'Up to 20 painter alerts/month',
                'Open tracking via Resend',
                'Dashboard + call transcripts',
                'Calendar integration',
                '30-min onboarding call',
                'Email support',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dim)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <a href="#book" style={{ display: 'block', backgroundColor: 'var(--cyan)', color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '14px', borderRadius: '10px', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
              Book a free 10-min setup call
            </a>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>We'll have you running in 30 minutes.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-elevated)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '32px', textAlign: 'center' }}>FAQ</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              {
                q: 'Will it sound like a robot?',
                a: 'No. The AI uses a natural voice, identifies as your business name, and adapts to the conversation. Callers typically can\'t tell it\'s an AI — and if they ask, it says so transparently.',
              },
              {
                q: 'What if I want to handle the calls myself?',
                a: 'You\'ll get an alert when a quote goes cold. You can approve the AI call, handle it yourself, or set it to auto-call. Full control, every step.',
              },
              {
                q: 'How do I forward my quote emails?',
                a: 'Forward the email you send to your prospect to your专属地址. We\'ll extract the customer details, set up tracking, and take it from there. Takes about 10 seconds.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>{q}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: '1.6' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK / CTA */}
      <section id="book" style={{ padding: '80px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px' }}>Ready to stop losing quotes?</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', marginBottom: '40px' }}>
            Book a free 10-minute setup call. We'll show you how it works on your existing email setup — no changes needed.
          </p>
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dim)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                See how the tracking works on your quotes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dim)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Hear a real sample call from your industry
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dim)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Get set up in 30 minutes, same day
              </div>
            </div>
            <a href="https://cal.com/jake-emvy/discovery-call" target="_blank" rel="noopener" style={{ display: 'block', backgroundColor: 'var(--cyan)', color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '15px', padding: '14px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
              Book a 10-min setup call
            </a>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>Free. No obligation. Runs 15 minutes.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--cyan)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 3h8M2 6h5M2 9h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: '700', fontSize: '14px' }}>Quote Speed</span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>An EmvyAI build. AI consultancy for Australian small business.</p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
