import Layout from '../components/Layout'

export default function Landing() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(178, 75, 57, 0.15) 0%, transparent 70%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '48px' }}>💘</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}>
            <span style={{ color: 'var(--mc-cream)' }}>Meet someone </span>
            <span style={{ color: 'var(--mc-terracotta)' }}>special</span>
            <span style={{ color: 'var(--mc-cream)' }}> nearby</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--mc-beige)',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}>
            Mallu Cupid is a modern dating app built for genuine connections. Swipe, match, chat, and find your person — with safety at the core.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://play.google.com/store/apps/details?id=com.mallucupid.app" style={{
              background: 'var(--mc-terracotta)',
              color: 'var(--mc-cream)',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 8px 24px rgba(178, 75, 57, 0.4)',
            }}>
              <span>📱</span> Get on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '12px' }}>
            Designed for real connections
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--mc-nav-muted)', textAlign: 'center', marginBottom: '48px' }}>
            Every feature crafted to help you find meaningful matches.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              { icon: '🔥', title: 'Swipe Discovery', desc: 'Browse curated profiles near you with smooth swipe gestures. Like, pass, or super-like.' },
              { icon: '💬', title: 'Real-time Chat', desc: 'Send text, voice messages, photos, and videos. React with emojis, reply to specific messages.' },
              { icon: '✅', title: 'Verified Profiles', desc: 'Blue checkmarks for photo-verified users. Optional photo-verified-only chat for extra safety.' },
              { icon: '🛡️', title: 'Safety First', desc: 'Screenshot-protected chats, block users, report abuse, and granular privacy controls.' },
              { icon: '⚡', title: 'Premium Features', desc: 'Unlimited likes, see who likes you, unlimited rewinds, boosts, and super likes.' },
              { icon: '🌍', title: 'Global Community', desc: 'Connect with singles nearby. Filter by distance, age range, and relationship intentions.' },
            ].map((f) => (
              <div key={f.title} style={{
                background: 'var(--mc-card)',
                border: '1px solid rgba(255, 250, 245, 0.09)',
                borderRadius: '16px',
                padding: '28px',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: 'var(--mc-cream)' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '60px 24px', background: 'rgba(52, 40, 35, 0.3)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            How it works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}>
            {[
              { step: '1', title: 'Sign up with email', desc: 'Enter your email and verify with a 6-digit OTP code. No passwords to remember.' },
              { step: '2', title: 'Build your profile', desc: 'Add photos, write a bio, pick your interests, and answer prompts to stand out.' },
              { step: '3', title: 'Swipe & match', desc: 'Browse profiles, swipe right to like, left to pass. Match when you both like each other.' },
              { step: '4', title: 'Start chatting', desc: 'Send messages, photos, voice notes. Get to know your matches in a secure chat.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--mc-terracotta)',
                  color: 'var(--mc-cream)',
                  fontSize: '24px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>{s.step}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🛡️</div>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>Your safety is our priority</h2>
          <p style={{ fontSize: '16px', color: 'var(--mc-beige)', lineHeight: 1.6, marginBottom: '40px' }}>
            We've built multiple layers of protection into Mallu Cupid so you can focus on making connections.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'left',
          }}>
            {[
              { icon: '🔒', title: 'Screenshot-Protected Chats', desc: 'Active conversations are protected with FLAG_SECURE — screenshots are blocked.' },
              { icon: '✅', title: 'Photo Verification', desc: 'Pose-matching liveness check. Verified users get a blue badge.' },
              { icon: '🚫', title: 'Block & Report', desc: 'Block any user instantly. Report abusive behavior.' },
              { icon: '🔐', title: 'Photo-Verified Chat Only', desc: 'Optional setting: only verified users can message you.' },
            ].map((s) => (
              <div key={s.title} style={{ background: 'var(--mc-card)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mc-peach)' }}>{s.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--mc-nav-muted)', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Is Mallu Cupid free?', a: 'Yes! The core features — swiping, matching, and chatting — are free. Premium features (unlimited likes, see who likes you, boosts) are available via in-app subscription starting at ₹49/week.' },
              { q: 'How do I verify my profile?', a: 'Go to Profile → Verify Now. You\'ll be guided through a 2-pose selfie verification (smile + tilt head). Once verified, you get a blue checkmark badge.' },
              { q: 'Is my data safe?', a: 'Yes. All data is encrypted in transit and at rest via Supabase (PostgreSQL + Row-Level Security). Your selfies are used only for one-time verification and are never stored. Read our Privacy Policy for full details.' },
              { q: 'Can I delete my account?', a: 'Yes — go to Settings → Delete My Account. This permanently deletes your profile, photos, messages, and all associated data. The action is irreversible.' },
              { q: 'What age do I need to be?', a: 'You must be at least 18 years old to use Mallu Cupid. We verify age during onboarding using your date of birth.' },
              { q: 'How does matching work?', a: 'When you swipe right (like) on someone and they\'ve also liked you, a match is automatically created. You\'ll see a "It\'s a Match!" celebration and can start chatting immediately.' },
            ].map((faq) => (
              <div key={faq.q} style={{
                background: 'var(--mc-card)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(255, 250, 245, 0.09)',
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'var(--mc-peach)' }}>{faq.q}</h4>
                <p style={{ fontSize: '14px', color: 'var(--mc-beige)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Ready to find your person?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--mc-beige)', marginBottom: '32px' }}>
            Download Mallu Cupid on Google Play and start your journey today.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.mallucupid.app" style={{
            background: 'var(--mc-terracotta)',
            color: 'var(--mc-cream)',
            padding: '18px 36px',
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 12px 32px rgba(178, 75, 57, 0.4)',
          }}>
            <span>📱</span> Download on Google Play
          </a>
        </div>
      </section>
    </Layout>
  )
}
