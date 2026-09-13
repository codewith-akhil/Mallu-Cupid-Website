import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#1a1613',
      borderTop: '1px solid rgba(255, 250, 245, 0.06)',
      padding: '48px 24px 32px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--mc-cream)' }}>Mallu</span>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--mc-terracotta)' }}>Cupid</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--mc-nav-muted)', lineHeight: 1.6 }}>
              Find someone special nearby. Designed for modern singles.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--mc-peach)', marginBottom: '12px' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/privacy" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Terms of Service</Link>
              <Link to="/cookies" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Cookie Policy</Link>
              <Link to="/community" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Community Guidelines</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--mc-peach)', marginBottom: '12px' }}>App</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://play.google.com/store/apps/details?id=com.mallucupid.app" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Get on Google Play</a>
              <span style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Version 1.0.0</span>
              <span style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>Package: com.mallucupid.app</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--mc-peach)', marginBottom: '12px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:support@mallucupid.app" style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>support@mallucupid.app</a>
              <span style={{ fontSize: '13px', color: 'var(--mc-nav-muted)' }}>For support & inquiries</span>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255, 250, 245, 0.06)',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--mc-nav-muted)',
        }}>
          © 2026 Mallu Cupid. All rights reserved. Crafted with love for modern singles.
        </div>
      </div>
    </footer>
  )
}
