import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(32, 27, 24, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 250, 245, 0.09)',
      padding: '16px 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--mc-cream)' }}>Mallu</span>
          <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--mc-terracotta)' }}>Cupid</span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link to="/privacy" style={{ fontSize: '14px', color: 'var(--mc-nav-muted)' }}>Privacy</Link>
          <Link to="/terms" style={{ fontSize: '14px', color: 'var(--mc-nav-muted)' }}>Terms</Link>
          <Link to="/cookies" style={{ fontSize: '14px', color: 'var(--mc-nav-muted)' }}>Cookies</Link>
          <Link to="/community" style={{ fontSize: '14px', color: 'var(--mc-nav-muted)' }}>Guidelines</Link>
        </div>
      </div>
    </nav>
  )
}
