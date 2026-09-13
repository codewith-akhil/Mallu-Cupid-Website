import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import CommunityGuidelines from './pages/CommunityGuidelines'
import './index.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/community" element={<CommunityGuidelines />} />
      </Routes>
    </HashRouter>
  )
}
