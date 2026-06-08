'use client'

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ══════════════════════════════════════════════════════════
   ALL LOGIC, API, VALIDATION, ROUTING — 100% ORIGINAL
   Only className changed to match the section design
══════════════════════════════════════════════════════════ */
function AppointmentForm() {
  const router = useRouter();
  const clinicPhoneDisplay = "83908 56789";
  const clinicPhoneHref = "tel:+918390856789";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [dialogStep, setDialogStep] = useState<'confirm' | 'contact' | null>(null);
  
  const [pageContext, setPageContext] = useState({
    url: '',
    title: '',
    referrer: '',
  });

  useEffect(() => {
    setPageContext({
      url: window.location.href,
      title: document.title,
      referrer: document.referrer || '',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: phoneValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // ── updated handleSubmit with full tracking ──
  const validateForm = () => {
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      setMessage({ type: 'error', text: 'Please enter a valid 6-digit pincode' });
      return false;
    }

    return true;
  };

  const submitAppointment = async () => {
    setLoading(true);
    setMessage(null);

    try {
      // Prepare the payload with FULL tracking context
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        treatment: formData.treatment,
        concern: formData.treatment,
        pincode: formData.pincode,
        source: "appointment-form",
        formName: "Website Leads", // This will identify it in dashboard
        
        // 📍 EXACT URL where form was submitted
        pageUrl: pageContext.url,
        pageTitle: pageContext.title,
        referrer: pageContext.referrer,
        
        // Browser info for additional context
        userAgent: navigator.userAgent,
        
        // UTM parameters from URL (for marketing tracking)
        utmSource: new URLSearchParams(window.location.search).get('utm_source'),
        utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
        utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        utmTerm: new URLSearchParams(window.location.search).get('utm_term'),
        utmContent: new URLSearchParams(window.location.search).get('utm_content'),
        

        screenSize: `${window.screen.width}x${window.screen.height}`,
        timestamp: new Date().toISOString(),
      };

      console.log("Submitting lead with context:", {
        url: pageContext.url,
        title: pageContext.title,
        formName: "Website Leads"
      });

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const formDetails = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          treatment: formData.treatment,
          timestamp: new Date().toISOString(),
          pageUrl: pageContext.url,
        };
        sessionStorage.setItem('appointmentDetails', JSON.stringify(formDetails));
        
        // Show success message briefly before redirect
        setMessage({ type: 'success', text: 'Appointment booked successfully! Redirecting...' });
        setDialogStep(null);
        
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
        
        setFormData({ name: "", phone: "", email: "", treatment: "", pincode: "" });
      } else {
        setMessage({ type: 'error', text: data.error || data.details || 'Failed to book appointment. Please try again.' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) {
      return;
    }

    setDialogStep('confirm');
  };

  const clearFormDetails = () => {
    setFormData({ name: "", phone: "", email: "", treatment: "", pincode: "" });
    setMessage(null);
  };

  // ── JSX: same fields, same attributes, same validation — only classNames match section design ──
  return (
    <form onSubmit={handleSubmit} id="appointment-form" className="rf-form">

      <h2 className="rf-title">Book Your Free Skin<em>Today Consultation </em></h2>
      <p className="rf-sub">Limited appointment slots available. Reserve yours now.</p>

      {message && (
        <div className={`rf-msg ${message.type}`}>{message.text}</div>
      )}

      <div className="rf-field">
        <label className="rf-lbl">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Please Provide Your Full Name"
          className="rf-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="rf-field">
        <label className="rf-lbl">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Please Fill Your 10 Digit Phone No."
          className="rf-input"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[6-9]{1}[0-9]{9}"
          title="Please enter a valid 10-digit Indian phone number"
        />
      </div>

      <div className="rf-field">
        <label className="rf-lbl">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Example@gmail.com"
          className="rf-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="rf-field">
        <label className="rf-lbl">Treatment</label>
        <select
          name="treatment"
          className="rf-input rf-select"
          value={formData.treatment}
          onChange={handleChange}
          required
        >
          <option value="">Choose Your Treatment</option>
          <option value="Brightening & Pigmentation Treatments">Brightening & Pigmentation Treatments</option>
          <option value="Laser Hair Reduction">Laser Hair Reduction</option>
          <option value="Anti -Ageing Solutions">Anti -Ageing Solutions</option>
          <option value="Revitalize Dull, Dry Skin">Revitalize Dull, Dry Skin</option>
        </select>
      </div>

      <div className="rf-field">
        <label className="rf-lbl">Pincode</label>
        <input
          type="text"
          name="pincode"
          placeholder="Type 6 Digit Your Pincode Here"
          className="rf-input"
          value={formData.pincode}
          onChange={handleChange}
          pattern="\d{6}"
          title="Please enter a 6-digit pincode"
        />
      </div>

      <button type="submit" disabled={loading} className="rf-btn">
        {loading ? (
          <span className="rf-loading">
            <svg className="rf-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : "Book An Appointment"}
      </button>

      <p className="rf-disclaimer">
        By submitting this form, you agree to our terms and consent to being contacted by our team.
      </p>

      {dialogStep && (
        <div className="rf-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="rf-dialog-title">
          <div className="rf-modal">
            {dialogStep === 'confirm' ? (
              <>
                <h3 id="rf-dialog-title" className="rf-modal-title">Would you like to submit your details?</h3>
                <p className="rf-modal-text">
                  Please confirm to send your appointment request to our clinic team.
                </p>
                <div className="rf-modal-actions">
                  <button
                    type="button"
                    className="rf-modal-btn rf-modal-btn-primary"
                    onClick={submitAppointment}
                    disabled={loading}
                  >
                    Yes, Submit
                  </button>
                  <button
                    type="button"
                    className="rf-modal-btn rf-modal-btn-secondary"
                    onClick={() => {
                      clearFormDetails();
                      setDialogStep('contact');
                    }}
                    disabled={loading}
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 id="rf-dialog-title" className="rf-modal-title">No problem. You can reach our clinic directly.</h3>
                <p className="rf-modal-text">
                  If you do not want to submit the form now, please call our clinic team and we will help you book your appointment.
                </p>
                <a href={clinicPhoneHref} className="rf-contact-link">
                  Call {clinicPhoneDisplay}
                </a>
                <div className="rf-modal-actions">
                  <button
                    type="button"
                    className="rf-modal-btn rf-modal-btn-primary"
                    onClick={() => setDialogStep('confirm')}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rf-modal-btn rf-modal-btn-secondary"
                    onClick={() => setDialogStep(null)}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </form>
  );
}

/* ══ Scroll visibility hook ══ */
function useVisible() {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

/* ══════════════════════════════════════════════════════════
   Main ContactSection
══════════════════════════════════════════════════════════ */
export default function ContactSection() {
  const { ref, v } = useVisible();

  return (
    <>
      <style>{`
        .ct { font-family:var(--font-outfit); background:#faf8f9; overflow:hidden; }

        /* ── TOP pink brand bar ── */
        .ct-top {
          background: linear-gradient(135deg,#c0174b 0%,#a50f3d 50%,#7d0a2e 100%);
          padding: 56px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ct-top::before {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%);
          pointer-events:none;
        }
        .ct-logo { position:relative; z-index:2; display:inline-block; margin-bottom:20px; }
        .ct-logo-adv { font-size:0.75rem; font-weight:600; letter-spacing:0.3em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:2px; }
        .ct-logo-name { font-family:var(--font-outfit); font-size:3.8rem; font-weight:700; line-height:1; letter-spacing:-0.03em; color:#fff; }
        .ct-logo-name span { color:rgba(255,180,180,0.9); }
        .ct-logo-tm { font-size:0.65rem; vertical-align:super; color:rgba(255,255,255,0.45); }
        .ct-logo-tag { font-size:0.75rem; font-weight:500; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.4); margin-top:6px; }
        .ct-tagline {
          position:relative; z-index:2;
          font-family:var(--font-outfit); font-style:italic; font-weight:400;
          font-size:clamp(1.05rem,1.8vw,1.3rem);
          color:rgba(255,255,255,0.8); max-width:740px; margin:0 auto; line-height:1.8;
        }

        /* ── BODY 2-col ── */
        .ct-body { display:grid; grid-template-columns:1fr 1fr; }

        /* ── LEFT info ── */
        .ct-info {
          background:#fff; padding:72px 64px 72px 72px;
          border-right:1px solid #f0e4e8;
          display:flex; flex-direction:column; justify-content:center;
          position:relative;
        }
        .ct-info::before {
          content:''; position:absolute; top:0; left:0; bottom:0; width:4px;
          background:linear-gradient(to bottom,transparent,#c0174b 30%,#c0174b 70%,transparent);
          opacity:0.5;
        }
        .ct-info-head {
          font-size:clamp(2rem,2.8vw,2.8rem); font-weight:700;
          color:#1a0812; line-height:1.2; margin-bottom:8px; letter-spacing:-0.01em;
        }
        .ct-info-head em { font-style:italic; color:#c0174b; }
        .ct-line { width:52px; height:2.5px; background:linear-gradient(90deg,#c0174b,transparent); border-radius:2px; margin:22px 0 28px; }
        .ct-desc { font-size:1rem; color:#7a5060; line-height:1.88; font-weight:400; margin-bottom:42px; }
        .ct-contact-blocks { display:flex; flex-direction:column; gap:26px; }
        .ct-block { border-left:2px solid #f0e0e6; padding-left:20px; transition:border-color 0.25s; }
        .ct-block:hover { border-color:#c0174b; }
        .ct-block-lbl { font-size:0.72rem; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:#c0174b; margin-bottom:6px; opacity:0.9; }
        .ct-block-val { font-size:1rem; color:#3a1a24; font-weight:500; line-height:1.65; }

        /* ── RIGHT form panel ── */
        .ct-form-panel {
          background:#faf8f9; padding:64px 72px 64px 64px;
          display:flex; flex-direction:column; justify-content:center;
        }

        /* ══════════════════════════════════════════
           APPOINTMENT FORM — styled to match section
        ══════════════════════════════════════════ */
        .rf-form { display:flex; flex-direction:column; gap:14px; width:100%; }

        .rf-title {
          font-size:clamp(2rem,2.8vw,2.8rem); font-weight:700;
          color:#1a0812; line-height:1.2; letter-spacing:-0.01em; margin-bottom:4px;
        }
        .rf-title em { font-style:italic; color:#c0174b; }

        .rf-sub { font-size:0.95rem; color:#9a7080; font-weight:400; margin-bottom:8px; line-height:1.6; }

        .rf-msg { padding:12px 16px; border-radius:8px; font-size:0.88rem; font-weight:500; }
        .rf-msg.success { background:#f0fdf4; color:#166534; border:1px solid #bbf7d0; }
        .rf-msg.error   { background:#fff1f2; color:#991b1b; border:1px solid #fecdd3; }

        .rf-field { display:flex; flex-direction:column; gap:5px; }

        .rf-lbl {
          font-size:0.72rem; font-weight:700;
          letter-spacing:0.2em; text-transform:uppercase; color:#9a7080;
        }

        .rf-input {
          width:100%; background:#fff;
          border:1.5px solid #eedce4; border-radius:8px;
          padding:13px 18px;
          font-family:var(--font-outfit);
          font-size:0.95rem; font-weight:500; color:#1a0812;
          outline:none; appearance:none;
          transition:border-color 0.25s, box-shadow 0.25s;
        }
        .rf-input::placeholder { color:#c8aab5; font-weight:400; }
        .rf-input:focus { border-color:#c0174b; box-shadow:0 0 0 3px rgba(192,23,75,0.07); }
        .rf-select { cursor:pointer; color:#3a1a24; }

        .rf-btn {
          width:100%; margin-top:6px;
          background:linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color:#fff; border:none;
          font-family:var(--font-outfit);
          font-size:1rem; font-weight:700; letter-spacing:0.05em;
          padding:15px 24px; border-radius:8px; cursor:pointer;
          box-shadow:0 6px 24px rgba(192,23,75,0.28);
          transition:all 0.25s;
        }
        .rf-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 12px 32px rgba(192,23,75,0.42); }
        .rf-btn:disabled { opacity:0.55; cursor:not-allowed; }

        .rf-loading { display:flex; align-items:center; justify-content:center; gap:10px; }
        .rf-spin { width:20px; height:20px; animation:rf-spin 1s linear infinite; }
        @keyframes rf-spin { to { transform:rotate(360deg); } }

        .rf-disclaimer { font-size:0.75rem; color:#b08090; text-align:center; line-height:1.5; font-weight:300; }
        .rf-modal-backdrop {
          position:fixed; inset:0; z-index:60;
          display:flex; align-items:center; justify-content:center;
          padding:20px;
          background:rgba(26, 8, 18, 0.55);
        }
        .rf-modal {
          width:min(100%, 430px);
          background:#fff;
          border:1px solid #f2d9e3;
          border-radius:18px;
          padding:28px 24px;
          box-shadow:0 24px 80px rgba(192,23,75,0.2);
          text-align:center;
        }
        .rf-modal-title {
          font-size:1.55rem; font-weight:700;
          color:#1a0812; line-height:1.3;
          margin-bottom:12px;
        }
        .rf-modal-text {
          font-size:0.95rem; color:#7a5060;
          line-height:1.7; margin-bottom:18px;
        }
        .rf-contact-link {
          display:inline-flex; align-items:center; justify-content:center;
          margin-bottom:18px; padding:12px 18px;
          border-radius:999px; text-decoration:none;
          background:#fff1f6; color:#be185d;
          font-weight:700; border:1px solid #f3c2d3;
        }
        .rf-modal-actions {
          display:flex; gap:12px; justify-content:center; flex-wrap:wrap;
        }
        .rf-modal-btn {
          min-width:120px; border-radius:999px;
          padding:11px 18px; font-size:0.92rem;
          font-weight:700; cursor:pointer; transition:all 0.2s ease;
        }
        .rf-modal-btn-primary {
          border:none; color:#fff;
          background:linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          box-shadow:0 8px 24px rgba(192,23,75,0.22);
        }
        .rf-modal-btn-secondary {
          border:1px solid #e7c8d4; color:#7a5060; background:#fff;
        }
        .rf-modal-btn:disabled { opacity:0.6; cursor:not-allowed; }

        /* ── Footer ── */
        .ct-foot {
          text-align:center; padding:24px; background:#fff;
          border-top:1px solid #f0e4e8;
          font-size:0.82rem; color:#c8aab5; font-weight:400; letter-spacing:0.06em;
        }

        /* ── Animations ── */
        .fi { opacity:0; transform:translateY(18px); transition:opacity .65s ease, transform .65s ease; }
        .fi.on { opacity:1; transform:translateY(0); }
        .dl1{transition-delay:.05s!important}
        .dl2{transition-delay:.2s!important}

        /* ── Responsive ── */
        @media(max-width:900px) {
          .ct-body { grid-template-columns:1fr; }
          .ct-info { padding:60px 40px 60px 52px; border-right:none; border-bottom:1px solid #f0e4e8; }
          .ct-form-panel { padding:60px 40px; }
          .ct-top { padding:48px 32px; }
        }
        @media(max-width:560px) {
          .ct-top { padding:25px 20px; }
          .ct-logo-name { font-size:2.8rem; }
          .ct-info { padding:20px 22px; }
          .ct-info::before { display:none; }
          .ct-form-panel { padding:22px 22px; }
          .ct-info-head,.rf-title { font-size:1.9rem; }
        }
      `}</style>

      <section id="contact" className="ct">

        {/* ══ BODY ══ */}
        <div className="ct-body" ref={ref}>

          {/* LEFT — info */}
          <div className={`ct-info fi ${v ? "on" : ""} dl1`}>
            <h2 className="ct-info-head">Find Us Serving Velachery &<br /><em>Nearby Areas</em></h2>
            <div className="ct-line" />
            <p className="ct-desc">
              Advanced Gloskin is conveniently located in Velachery, Chennai — easily accessible from Medavakkam, Pallikaranai, Guindy, Adyar, Kotturpuram, Perungudi, Thoraipakkam, and Sholinganallur. We also serve patients searching for a skin clinic near Velachery, skin doctor near me, dermatologist in Velachery Chennai, best skin clinic in Velachery, and best dermatologist near me.
            </p>
            <div className="ct-contact-blocks">
              <div className="ct-block">
                <div className="ct-block-lbl">Address</div>
                <div className="ct-block-val">
                  Second Floor Block, Sankaran Avenue,<br />
                  Plot No.31, 20, Pandian St, Velachery,<br />
                  Chennai, Tamil Nadu 600042
                </div>
              </div>
              <div className="ct-block">
                <div className="ct-block-lbl">Phone</div>
                <div className="ct-block-val">8390856789</div>
              </div>
            </div>
          </div>

          {/* RIGHT — AppointmentForm with section design */}
          <div className={`ct-form-panel fi ${v ? "on" : ""} dl2`}>
            <AppointmentForm />
          </div>

        </div>

        <footer style={{background:"linear-gradient(135deg, #ec4899 0%, #be185d 100%)"}} className="relative text-white text-sm py-4 max-sm:mb-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Advanced Gloskin Velachery. All rights reserved | Powered By Crowd
              Developers
            </p>
            <a
              href="/privacy-policy"
              className="text-white hover:text-black transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
