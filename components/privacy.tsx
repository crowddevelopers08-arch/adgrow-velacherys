'use client'

import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        .pp-page {
          font-family: 'Outfit', sans-serif;
          background: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ── Top shimmer bar ── */
        .pp-bar {
          height: 4px;
          background: linear-gradient(90deg, #c0174b, #e8527a, #c0174b);
          background-size: 200% 100%;
          animation: barShimmer 2.5s linear infinite;
          flex-shrink: 0;
        }
        @keyframes barShimmer { to { background-position: -200% 0; } }

        /* ── Hero ── */
        .pp-hero {
          background: linear-gradient(135deg, #c0174b 0%, #a50f3d 55%, #7d0a2e 100%);
          padding: clamp(48px, 8vw, 72px) clamp(20px, 5vw, 60px) clamp(44px, 7vw, 64px);
          text-align: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pp-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Back button — top left of hero */
        .pp-back {
          position: absolute;
          top: clamp(16px, 3vw, 24px);
          left: clamp(16px, 8vw, 106px);
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.88);
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.72rem, 2vw, 0.82rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 8px 18px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .pp-back:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.45);
          color: #fff;
          transform: translateX(-3px);
        }
        .pp-back svg {
          width: 14px; height: 14px;
          stroke: currentColor; stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
          fill: none; flex-shrink: 0;
        }

        /* Logo */
        .pp-logo-adv {
          font-size: clamp(0.6rem, 1.5vw, 0.7rem);
          font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); margin-bottom: 2px;
          position: relative; z-index: 2;
        }
        .pp-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 700; color: #fff;
          letter-spacing: -0.02em; line-height: 1;
          position: relative; z-index: 2;
        }
        .pp-logo-name span { color: rgba(255,180,180,0.9); }
        .pp-logo-tag {
          display: block;
          font-size: clamp(0.6rem, 1.5vw, 0.68rem);
          font-weight: 500; letter-spacing: 0.26em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: clamp(20px, 4vw, 32px);
          position: relative; z-index: 2;
        }
        .pp-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 5vw, 3rem);
          font-weight: 700; color: #fff;
          line-height: 1.16; margin-bottom: 12px;
          position: relative; z-index: 2;
        }
        .pp-hero-title em { font-style: italic; color: #ffd6e7; font-weight: 500; }

        .pp-hero-date {
          font-size: clamp(0.72rem, 2vw, 0.82rem);
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          position: relative; z-index: 2;
        }

        /* ── Body ── */
        .pp-body {
          flex: 1;
          max-width: 880px;
          width: 100%;
          margin: 0 auto;
          padding: clamp(30px, 8vw, 80px) clamp(20px, 5vw, 48px) clamp(30px, 10vw, 96px);
        }

        /* Intro */
        .pp-intro {
          font-size: clamp(0.9rem, 2.2vw, 1rem);
          color: #5a2a3c;
          line-height: 1.85; font-weight: 400;
          margin-bottom: clamp(20px, 4vw, 60px);
          padding: clamp(18px, 3vw, 26px) clamp(18px, 4vw, 30px);
          background: #fdf0f4;
          border-left: 3px solid #c0174b;
          border-radius: 0 8px 8px 0;
        }

        /* Section */
        .pp-section {
          margin-bottom: clamp(10px, 4vw, 48px);
          padding-bottom: clamp(10px, 4vw, 48px);
          border-bottom: 1px solid #f5e4ea;
        }
        .pp-section:last-of-type { border-bottom: none; margin-bottom: 0; }

        .pp-num {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-size: 0.82rem;
          color: #c0174b; opacity: 0.6;
          display: block; margin-bottom: 5px;
        }

        .pp-sec-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.15rem, 3vw, 1.5rem);
          font-weight: 700; color: #1a0812;
          margin-bottom: 14px; letter-spacing: -0.01em; line-height: 1.25;
        }

        .pp-section p {
          font-size: clamp(0.87rem, 2vw, 0.95rem);
          color: #7a5060; line-height: 1.85;
          font-weight: 400; margin-bottom: 12px;
        }
        .pp-section p:last-child { margin-bottom: 0; }

        .pp-list {
          list-style: none; padding: 0;
          margin: 12px 0 0;
          display: flex; flex-direction: column; gap: 9px;
        }
        .pp-list li {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: clamp(0.87rem, 2vw, 0.95rem);
          color: #7a5060; line-height: 1.72; font-weight: 400;
        }
        .pp-list li::before {
          content: '';
          flex-shrink: 0;
          width: 6px; height: 6px;
          border-radius: 50%; background: #c0174b;
          margin-top: 9px; opacity: 0.7;
        }

        /* Contact box */
        .pp-contact-box {
          background: linear-gradient(135deg, #c0174b 0%, #8f0f36 100%);
          border-radius: clamp(12px, 3vw, 18px);
          padding: clamp(28px, 5vw, 40px) clamp(24px, 5vw, 44px);
          margin-top: clamp(30px, 8vw, 64px);
        }
        .pp-contact-label {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); margin-bottom: 8px;
        }
        .pp-contact-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: 700; color: #fff; line-height: 1.25;
          margin-bottom: 14px;
        }
        .pp-contact-title em { font-style: italic; color: #ffd6e7; font-weight: 500; }
        .pp-contact-row {
          display: flex; flex-direction: column; gap: 5px;
          margin-bottom: 24px;
        }
        .pp-contact-val {
          font-size: clamp(0.82rem, 2vw, 0.9rem);
          color: rgba(255,255,255,0.65); font-weight: 400; line-height: 1.6;
        }

        /* Back home button inside contact box */
        .pp-home-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          color: #c0174b;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.78rem, 2vw, 0.88rem);
          font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 32px; border-radius: 8px;
          border: none; cursor: pointer;
          box-shadow: 0 6px 24px rgba(0,0,0,0.18);
          transition: all 0.25s ease;
        }
        .pp-home-btn:hover {
          background: #fdf0f4;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.22);
        }
        .pp-home-btn:active { transform: translateY(0); }
        .pp-home-btn svg {
          width: 15px; height: 15px;
          stroke: currentColor; stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
          fill: none;
          transition: transform 0.2s;
        }
        .pp-home-btn:hover svg { transform: translateX(-3px); }

        /* ── Footer ── */
        .pp-footer {
          text-align: center;
          padding: clamp(18px, 3vw, 24px) 20px;
          background: #fff;
          border-top: 1px solid #f0e4e8;
          font-size: clamp(0.72rem, 2vw, 0.8rem);
          color: #c8aab5; font-weight: 400; letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .pp-back { padding: 7px 14px; }
          .pp-hero { padding-top: clamp(56px, 12vw, 80px); }
        }

        @media (max-width: 360px) {
          .pp-hero-title { font-size: 1.6rem; }
          .pp-logo-name  { font-size: 1.8rem; }
        }
      `}</style>

      <div className="pp-page">

        {/* ── Top bar ── */}
        <div className="pp-bar" />

        {/* ── Hero ── */}
        <div className="pp-hero">

          {/* Back to Home — top left */}
          <button className="pp-back" onClick={() => router.push('/')}>
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </button>

          <div className="pp-logo-adv">Advanced</div>
          <div className="pp-logo-name"><span>gl</span>oskin™</div>
          <span className="pp-logo-tag">Skin Glow Forever</span>

          <h1 className="pp-hero-title">Privacy <em>Policy</em></h1>
          <p className="pp-hero-date">Effective Date: January 1, 2024 &nbsp;·&nbsp; Last Updated: February 2024</p>

        </div>

        {/* ── Content ── */}
        <main className="pp-body">

          <p className="pp-intro">
            At Advanced Gloskin, we are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, and safeguard your data when you visit our
            clinic or use our website.
          </p>

          <div className="pp-section">
            <span className="pp-num">01</span>
            <h2 className="pp-sec-title">Information We Collect</h2>
            <p>We collect information you voluntarily provide when booking an appointment, filling out a form, or contacting us. This may include:</p>
            <ul className="pp-list">
              <li>Full name, phone number, and email address</li>
              <li>Pincode and location for service availability</li>
              <li>Skin concern or treatment preference you select</li>
              <li>Any additional details shared during consultations</li>
            </ul>
          </div>

          <div className="pp-section">
            <span className="pp-num">02</span>
            <h2 className="pp-sec-title">How We Use Your Information</h2>
            <p>The information we collect is used solely to provide and improve our services to you. Specifically, we use it to:</p>
            <ul className="pp-list">
              <li>Confirm and manage your appointment bookings</li>
              <li>Contact you with updates about your consultation</li>
              <li>Recommend treatments suited to your skin concerns</li>
              <li>Improve the quality and personalisation of our care</li>
              <li>Send important service-related communications</li>
            </ul>
          </div>

          <div className="pp-section">
            <span className="pp-num">03</span>
            <h2 className="pp-sec-title">Data Sharing & Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to any third party. Your data is never shared for marketing purposes without your explicit consent.</p>
            <p>We may share limited information only when required by law or to protect the rights and safety of our patients and staff.</p>
          </div>

          <div className="pp-section">
            <span className="pp-num">04</span>
            <h2 className="pp-sec-title">Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
            <p>While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is 100% secure. We continuously review and update our security practices.</p>
          </div>

          <div className="pp-section">
            <span className="pp-num">05</span>
            <h2 className="pp-sec-title">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="pp-list">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your data at any time</li>
              <li>Withdraw consent for communications</li>
            </ul>
            <p style={{ marginTop: '12px' }}>To exercise any of these rights, please contact us directly using the details below.</p>
          </div>

          <div className="pp-section">
            <span className="pp-num">06</span>
            <h2 className="pp-sec-title">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.</p>
          </div>

          {/* Contact + Back Home box */}
          <div className="pp-contact-box">
            <div className="pp-contact-label">Questions or Concerns?</div>
            <div className="pp-contact-title">Reach out to our <em>team</em></div>
            <div className="pp-contact-row">
              <span className="pp-contact-val">Second Floor Block, Sankaran Avenue, Plot No.31, 20, Pandian St, Velachery, Chennai, Tamil Nadu 600042</span>
              <span className="pp-contact-val">8390856789</span>
            </div>
            <button className="pp-home-btn" onClick={() => router.push('/')}>
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Home
            </button>
          </div>

        </main>

        {/* ── Footer ── */}
        <footer className="pp-footer">
          © 2024 Advanced Gloskin. All rights reserved.
        </footer>

      </div>
    </>
  );
}