import Layout from '../components/Layout'

export default function CommunityGuidelines() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>Community Guidelines</h1>
        <p style={{ fontSize: '14px', color: 'var(--mc-nav-muted)', marginBottom: '40px' }}>
          Last updated: September 13, 2026
        </p>

        <Section title="Our Mission">
          Mallu Cupid is a community built on respect, authenticity, and genuine connections.
          These guidelines help ensure the App remains a safe and welcoming space for everyone.
          By using the App, you agree to follow these guidelines.
        </Section>

        <Section title="1. Be Authentic">
          <ul>
            <li>Use your real photos — not someone else's</li>
            <li>Provide accurate information about yourself (name, age, location)</li>
            <li>Complete photo verification to earn the blue checkmark badge</li>
            <li>Do not create fake or catfish profiles</li>
          </ul>
        </Section>

        <Section title="2. Be Respectful">
          <ul>
            <li>Treat other users with kindness and dignity</li>
            <li>No harassment, bullying, or hate speech (including based on race, ethnicity, religion, gender, sexual orientation, or disability)</li>
            <li>No unsolicited sexual content or explicit photos</li>
            <li>Respect boundaries — if someone isn't interested, move on gracefully</li>
          </ul>
        </Section>

        <Section title="3. Be Safe">
          <ul>
            <li>Never share financial information (bank details, UPI ID, card numbers) with other users</li>
            <li>Be cautious about sharing personal contact information before you've built trust</li>
            <li>When meeting in person for the first time, choose a public place and inform a friend</li>
            <li>Report any suspicious or abusive behavior using the in-app Report feature</li>
          </ul>
        </Section>

        <Section title="4. No Spam or Scams">
          <ul>
            <li>Do not send promotional content, spam, or phishing links</li>
            <li>Do not solicit money from other users</li>
            <li>Do not use the App for commercial purposes without authorization</li>
            <li>Do not create multiple accounts to circumvent blocks or bans</li>
          </ul>
        </Section>

        <Section title="5. No Illegal Activity">
          <ul>
            <li>Do not use the App to facilitate any illegal activity</li>
            <li>Do not promote drugs, weapons, or violence</li>
            <li>Do not exploit or harm minors in any way</li>
            <li>Do not share content that infringes on intellectual property rights</li>
          </ul>
        </Section>

        <Section title="6. Reporting Violations">
          If you encounter behavior that violates these guidelines:
          <ul>
            <li>Use the in-app Report feature on the user's profile or in chat</li>
            <li>Block the user to prevent further contact</li>
            <li>Email <a href="mailto:support@mallucupid.app">support@mallucupid.app</a> for serious issues</li>
          </ul>
          Our team reviews all reports and takes action ranging from warnings to permanent bans.
        </Section>

        <Section title="7. Consequences">
          Violations may result in:
          <ul>
            <li>Content removal</li>
            <li>Temporary account suspension</li>
            <li>Permanent ban from the App</li>
            <li>Reporting to law enforcement for illegal activity</li>
          </ul>
        </Section>

        <Section title="8. Your Role">
          We rely on our community to keep the App safe. Be an active participant — report abuse,
          support other users, and model the behavior you want to see. Together we build a
          community where everyone can find meaningful connections.
        </Section>

        <Section title="9. Contact">
          Questions about these guidelines? <a href="mailto:support@mallucupid.app">support@mallucupid.app</a>
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
