import Layout from '../components/Layout'

export default function CookiePolicy() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>Cookie Policy</h1>
        <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', marginBottom: '40px' }}>
          Last updated: September 13, 2026
        </p>

        <Section title="1. What Are Cookies?">
          Cookies are small text files stored on your device when you visit a website or use an
          app. The Mallu Cupid mobile app itself does not use traditional browser cookies.
          However, our website and the third-party services we use may employ cookies and
          similar technologies (local storage, SDK identifiers).
        </Section>

        <Section title="2. How We Use Cookies">
          Our website (this site) uses minimal cookies solely for:
          <ul>
            <li><strong>Essential cookies</strong> — required for the website to function (routing, page loads)</li>
            <li><strong>Analytics cookies</strong> — aggregate, anonymous usage statistics to improve the site</li>
          </ul>
          We do NOT use advertising or tracking cookies on this website.
        </Section>

        <Section title="3. Mobile App Identifiers">
          The Mallu Cupid mobile app uses the following identifiers instead of cookies:
          <ul>
            <li><strong>JWT session tokens</strong> — stored in encrypted SharedPreferences on your device, used for authentication. Deleted on sign-out.</li>
            <li><strong>Firebase installation ID</strong> — anonymous device identifier for analytics and App Check. Resettable in your device settings.</li>
            <li><strong>Google Play Services advertising ID</strong> — governed by your device's "Opt out of Ads Personalization" setting</li>
          </ul>
        </Section>

        <Section title="4. Managing Cookies">
          <ul>
            <li><strong>Browser settings:</strong> you can control and delete cookies via your browser's settings</li>
            <li><strong>In-app:</strong> the mobile app does not use cookies — your session token is cleared when you sign out</li>
            <li><strong>Device settings:</strong> you can reset your advertising ID in Android Settings → Google → Ads</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Cookies">
          The third-party services we use (Supabase, Firebase, Resend, Razorpay, Google Play)
          may set their own cookies. Each has its own cookie policy — see their respective
          privacy policies for details.
        </Section>

        <Section title="6. Contact">
          Questions about cookies? Contact <a href="mailto:support@mallucupid.app">support@mallucupid.app</a>
        </Section>
      </div>
    </Layout>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: 'var(--mc-peach)' }}>{title}</h2>
      <div style={{ fontSize: '15px', color: 'var(--mc-beige)', lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}
