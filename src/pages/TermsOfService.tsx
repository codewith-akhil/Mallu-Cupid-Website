import Layout from '../components/Layout'

export default function TermsOfService() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', marginBottom: '40px' }}>
          Last updated: September 13, 2026
        </p>

        <Section title="1. Acceptance of Terms">
          By downloading, installing, or using the Mallu Cupid app ("the App"), you agree to be
          bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not
          use the App.
        </Section>

        <Section title="2. Eligibility">
          You must be at least 18 years old to use the App. By creating an account, you represent
          and warrant that you are at least 18 years of age and legally capable of entering into
          binding contracts. We verify your date of birth during onboarding.
        </Section>

        <Section title="3. Account Registration">
          <ul>
            <li>You must provide accurate and complete information when creating your account</li>
            <li>You are responsible for maintaining the confidentiality of your account session</li>
            <li>You may not create an account using a false identity or information that is not your own</li>
            <li>One account per person — multiple accounts for the same individual are not permitted</li>
            <li>You must verify your email address via OTP before using the App</li>
          </ul>
        </Section>

        <Section title="4. Acceptable Use">
          You agree NOT to:
          <ul>
            <li>Use the App for any illegal purpose or in violation of any law</li>
            <li>Harass, abuse, threaten, or impersonate other users</li>
            <li>Post false, misleading, or fraudulent profile information or photos</li>
            <li>Upload content that is sexually explicit, violent, hateful, or discriminatory</li>
            <li>Send spam, phishing links, or promotional content to other users</li>
            <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
            <li>Use bots, scripts, or automated tools to interact with the App</li>
            <li>Circumvent the App's safety or security features (including screenshot protection)</li>
            <li>Share your account, sell matches, or charge other users for access to your profile</li>
            <li>Use another user's photos or personal information without their consent</li>
          </ul>
        </Section>

        <Section title="5. Premium Subscriptions">
          <ul>
            <li>The App offers optional paid subscriptions: Premium (₹49/week), Gold, and Platinum tiers</li>
            <li>Subscriptions are processed via Razorpay and billed through Google Play Billing</li>
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date</li>
            <li>You can cancel anytime via Google Play Store → Subscriptions</li>
            <li>Refunds are governed by Google Play's refund policy</li>
            <li>We reserve the right to change subscription pricing with at least 30 days' notice</li>
          </ul>
        </Section>

        <Section title="6. User Content">
          <ul>
            <li>You retain ownership of content you upload (photos, bio, prompts, messages)</li>
            <li>You grant us a worldwide, royalty-free license to use, store, and display your content within the App for the purpose of operating the service</li>
            <li>You are solely responsible for your content and ensure it does not violate any third-party rights</li>
            <li>We reserve the right to remove any content that violates these Terms or our Community Guidelines</li>
          </ul>
        </Section>

        <Section title="7. Safety and Verification">
          <ul>
            <li>The App offers a photo verification feature (pose-matching liveness check)</li>
            <li>Verified users receive a blue checkmark badge</li>
            <li>We do not guarantee that verified users are who they claim to be — verification only confirms the photos match the selfie</li>
            <li>Always exercise caution when interacting with other users and meeting in person</li>
          </ul>
        </Section>

        <Section title="8. Prohibited Conduct">
          Violations of these Terms may result in:
          <ul>
            <li>Content removal</li>
            <li>Temporary suspension of your account</li>
            <li>Permanent account termination and ban</li>
            <li>Reporting to law enforcement where applicable</li>
          </ul>
        </Section>

        <Section title="9. Intellectual Property">
          <ul>
            <li>The App, including its design, code, branding, and features, is owned by Mallu Cupid and protected by intellectual property laws</li>
            <li>You may not copy, modify, distribute, or create derivative works from the App without our written permission</li>
            <li>"Mallu Cupid" and the Cupid logo are trademarks of Mallu Cupid</li>
          </ul>
        </Section>

        <Section title="10. Disclaimers">
          <ul>
            <li>The App is provided "as is" and "as available" without warranties of any kind</li>
            <li>We do not guarantee that you will find a match, date, or relationship through the App</li>
            <li>We are not liable for the conduct of other users or the outcome of any interaction</li>
            <li>We do not warrant that the App will be uninterrupted, error-free, or secure</li>
          </ul>
        </Section>

        <Section title="11. Limitation of Liability">
          To the maximum extent permitted by law, Mallu Cupid shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, including but
          not limited to loss of profits, data, or goodwill, arising from your use of the App.
        </Section>

        <Section title="12. Termination">
          <ul>
            <li>You may delete your account at any time via Settings → Delete My Account</li>
            <li>We may suspend or terminate your account at any time for violations of these Terms</li>
            <li>Upon termination, your right to use the App ceases immediately</li>
            <li>Provisions that by their nature should survive termination shall remain in effect</li>
          </ul>
        </Section>

        <Section title="13. Governing Law">
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts in Kochi, Kerala, India.
        </Section>

        <Section title="14. Changes to These Terms">
          We may update these Terms from time to time. We will notify you of significant changes
          via email or in-app notification. Continued use of the App after changes constitutes
          acceptance of the revised Terms.
        </Section>

        <Section title="15. Contact">
          Questions about these Terms? Contact us at <a href="mailto:support@mallucupid.app">support@mallucupid.app</a>
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
