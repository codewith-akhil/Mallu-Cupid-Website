import Layout from '../components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', marginBottom: '40px' }}>
          Last updated: September 13, 2026
        </p>

        <Section title="1. Introduction">
          Mallu Cupid ("we", "our", or "the App") is a dating and matchmaking application
          operated by Mallu Cupid. We respect your privacy and are committed to protecting
          your personal data. This Privacy Policy explains how we collect, use, store, and
          share your information when you use our App.
          <br/><br/>
          By creating an account or using the App, you agree to the practices described in
          this policy. If you do not agree, please do not use the App.
        </Section>

        <Section title="2. Information We Collect">
          <strong style={{ color: 'var(--mc-peach)' }}>2.1 Information you provide:</strong>
          <ul>
            <li><strong>Email address</strong> — used for authentication and account recovery</li>
            <li><strong>Profile information</strong> — name, date of birth, gender, city, bio, height, languages, zodiac sign, interests, lifestyle preferences</li>
            <li><strong>Profile photos</strong> — up to 6 photos you upload</li>
            <li><strong>Profile prompts</strong> — question-and-answer pairs you write</li>
            <li><strong>Verification selfies</strong> — two poses for photo verification (used once for verification, then deleted — never stored)</li>
            <li><strong>Settings preferences</strong> — distance, age range, interested-in, notification settings, privacy toggles</li>
          </ul>
          <br/>
          <strong style={{ color: 'var(--mc-peach)' }}>2.2 Information collected automatically:</strong>
          <ul>
            <li><strong>Usage data</strong> — swipes, matches, messages sent/received, profile views</li>
            <li><strong>Device data</strong> — device model, OS version, app version, IP address (for approximate location only)</li>
            <li><strong>Location data</strong> — approximate location (city-level) used for distance calculation in the swipe deck. Precise location is only accessed when you explicitly choose auto-detect during profile setup.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          We use your information to:
          <ul>
            <li>Authenticate your account and maintain your session</li>
            <li>Display your profile to other users in the swipe deck</li>
            <li>Calculate distances between you and other users</li>
            <li>Record swipes and create matches on mutual likes</li>
            <li>Deliver and store your messages, reactions, and media</li>
            <li>Send you OTP verification codes via email (Resend)</li>
            <li>Send push notifications and email updates (based on your settings — you can opt out anytime)</li>
            <li>Process premium subscription payments (Razorpay)</li>
            <li>Enforce our Community Guidelines and Terms of Service</li>
            <li>Improve the App's features, safety, and performance</li>
          </ul>
        </Section>

        <Section title="4. Legal Basis for Processing (GDPR)">
          If you are in the European Economic Area (EEA), we process your personal data on the following legal bases:
          <ul>
            <li><strong>Consent</strong> — for marketing emails, push notifications, and non-essential cookies</li>
            <li><strong>Contract</strong> — for account creation, matching, messaging, and core App functionality</li>
            <li><strong>Legitimate interests</strong> — for safety, fraud prevention, and App improvement</li>
            <li><strong>Legal obligation</strong> — for responding to lawful requests from authorities</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Services">
          We use the following third-party services to operate the App. Each has its own privacy policy:
          <ul>
            <li><strong>Supabase</strong> (supabase.com) — backend database, authentication, and edge functions. Hosts your profile data, messages, and settings. Data is stored in PostgreSQL with Row-Level Security.</li>
            <li><strong>Firebase</strong> (firebase.google.com) — app analytics, App Check security, and AI features (Vertex AI). Uses your device identifier and usage patterns.</li>
            <li><strong>Resend</strong> (resend.com) — email delivery service for OTP codes. Receives your email address and the verification code.</li>
            <li><strong>Razorpay</strong> (razorpay.com) — payment processing for premium subscriptions. Receives your payment method and transaction details. We do not store your full card number or banking credentials.</li>
            <li><strong>Google Play Services</strong> — app distribution and in-app billing</li>
          </ul>
        </Section>

        <Section title="6. Data Sharing">
          We do NOT sell your personal data. We share your information only:
          <ul>
            <li>With other users — your profile (name, age, city, bio, photos, prompts, interests) is visible in the swipe deck and to your matches</li>
            <li>With the third-party services listed above (each under their own privacy policy)</li>
            <li>With law enforcement if legally required, or to protect our rights, safety, or property</li>
            <li>With your consent (e.g., if you contact support)</li>
          </ul>
        </Section>

        <Section title="7. Data Retention">
          <ul>
            <li><strong>Active account:</strong> your data is retained as long as your account is active</li>
            <li><strong>Deleted account:</strong> when you delete your account, your profile, photos, prompts, settings, swipes, matches, and messages are permanently deleted within 30 days</li>
            <li><strong>Verification selfies:</strong> deleted immediately after the one-time verification — never stored</li>
            <li><strong>OTP codes:</strong> deleted after 10 minutes or after use</li>
            <li><strong>Transaction records:</strong> retained for 7 years as required by tax law (Razorpay holds the payment records)</li>
          </ul>
        </Section>

        <Section title="8. Data Security">
          We protect your data using:
          <ul>
            <li><strong>Row-Level Security (RLS)</strong> on all database tables — users can only read/write their own data</li>
            <li><strong>HTTPS/TLS encryption</strong> for all data in transit</li>
            <li><strong>JWT authentication</strong> with short-lived access tokens</li>
            <li><strong>Server-side secrets</strong> — the service role key, Razorpay secret, and Resend API key are NEVER shipped in the client app</li>
            <li><strong>Screenshot-protected chats</strong> — active conversations use FLAG_SECURE</li>
            <li><strong>Rate-limited OTP</strong> — max 3 codes per email per 10 minutes, max 5 verification attempts per code</li>
          </ul>
        </Section>

        <Section title="9. Your Rights">
          Depending on your jurisdiction, you have the right to:
          <ul>
            <li><strong>Access</strong> — request a copy of your personal data</li>
            <li><strong>Rectification</strong> — correct inaccurate or incomplete data</li>
            <li><strong>Erasure</strong> — delete your account and all associated data (Settings → Delete My Account)</li>
            <li><strong>Restriction</strong> — limit how we process your data</li>
            <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
            <li><strong>Withdraw consent</strong> — for any processing based on consent (marketing, notifications)</li>
          </ul>
          To exercise any of these rights, email <a href="mailto:support@mallucupid.app">support@mallucupid.app</a>.
        </Section>

        <Section title="10. Children's Privacy">
          The App is not directed to anyone under 18. We do not knowingly collect personal
          data from children under 18. If you believe we have collected data from a child
          under 18, please contact us immediately and we will delete it.
        </Section>

        <Section title="11. International Data Transfers">
          Your data is processed by Supabase (ap-northeast-1 / Tokyo region) and may be
          transferred to other countries where our third-party service providers operate.
          We ensure appropriate safeguards are in place, including Standard Contractual
          Clauses where required.
        </Section>

        <Section title="12. Changes to This Policy">
          We may update this Privacy Policy from time to time. We will notify you of
          significant changes via email or in-app notification. The "Last updated" date
          at the top of this page indicates when the policy was last revised.
        </Section>

        <Section title="13. Contact Us">
          If you have questions about this Privacy Policy or your personal data, contact us at:
          <br/><br/>
          <strong>Email:</strong> <a href="mailto:support@mallucupid.app">support@mallucupid.app</a>
          <br/>
          <strong>Package:</strong> com.mallucupid.app
        </Section>
      </div>
    </Layout>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: 'var(--mc-peach)' }}>{title}</h2>
      <div style={{ fontSize: '15px', color: 'var(--mc-beige)', lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
