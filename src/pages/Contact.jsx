import React, { useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Contact = ({ onNavigate }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_4lcohmz",
        "template_2n11wcs",
        templateParams,
        "5SyzsmDCiKCQRtZGG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);

          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              company: "",
              subject: "",
              message: "",
            });
            setSubmitted(false);
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const contactMethods = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
      label: 'Phone',
      value: '+91 81411 18006',
      sub: 'Mon–Fri, 10AM–7PM IST',
      href: 'tel:+918141118006',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email',
      value: 'contact@atyainno.com',
      sub: 'Response within 24 hours',
      href: 'mailto:contact@atyainno.com',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Office',
      value: '222, 2nd Floor, Sai Leela Mall, Abrama',
      sub: 'Valsad, Gujarat, India',
      href: null,
    },
  ];

  const hours = [
    { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM IST' },
    { day: 'Saturday & Sunday', time: 'By Appointment' },
  ];

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'atyainno@gmail.com', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 81411 18006', required: false },
    { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company', required: false },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Discussion', required: true },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-orb" />
          <div className="contact-grid-bg" />
        </div>
        <div className="container contact-hero-inner">
          <div className="section-label">Get In Touch</div>
          <h1 className="page-hero-title">
            Let's Build<br /><span>Something Amazing</span>
          </h1>
          <p className="page-hero-desc">
            Have a project in mind? Our team is ready to help turn your vision into reality. Reach out and let's discuss what's possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info-col">
            <h2>Contact Information</h2>
            <p>Get in touch with our team through any of the channels below. We're here to help.</p>

            <div className="contact-methods">
              {contactMethods.map((m, i) => (
                <div key={i} className={`cm-item ${m.label === 'Office' ? 'cm-item--address' : ''}`}>
                  {m.href ? (
                    <a href={m.href} className="cm-link">
                      <span className="cm-icon">{m.icon}</span>
                      <div>
                        <strong>{m.label}</strong>
                        <span>{m.value}</span>
                        <small>{m.sub}</small>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="cm-content">
                        <span className="cm-icon">{m.icon}</span>
                        <div>
                          <strong>{m.label}</strong>
                          <span>{m.value}</span>
                          <small>{m.sub}</small>
                        </div>
                      </div>
                      {m.label === 'Office' && (
                        <div className="cm-map-mini">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.91574!2d72.946399!3d20.571448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2834b679b3d%3A0xc3c544f8007a8274!2sSai+Leela+Mall!5e0!3m2!1sen!2sin!4v1740000000000!5m2!1sen!2sin"
                            width="100%"
                            height="160"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AtyaInno Office Location"
                          ></iframe>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="hours-card">
              <h4>Working Hours</h4>
              <div className="hours-list">
                {hours.map((h, i) => (
                  <div key={i} className="hour-row">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon-wrap">
                    <span>✓</span>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2>Send a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      {fields.slice(0, 2).map(f => (
                        <div key={f.name} className={`form-group ${focused === f.name ? 'focused' : ''} ${form[f.name] ? 'has-value' : ''}`}>
                          <label htmlFor={f.name}>{f.label}{f.required && <span className="req">*</span>}</label>
                          <input
                            id={f.name}
                            name={f.name}
                            type={f.type}
                            value={form[f.name]}
                            placeholder={f.placeholder}
                            onChange={handleChange}
                            onFocus={() => setFocused(f.name)}
                            onBlur={() => setFocused(null)}
                            required={f.required}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="form-row">
                      {fields.slice(2, 4).map(f => (
                        <div key={f.name} className={`form-group ${focused === f.name ? 'focused' : ''}`}>
                          <label htmlFor={f.name}>{f.label}</label>
                          <input
                            id={f.name}
                            name={f.name}
                            type={f.type}
                            value={form[f.name]}
                            placeholder={f.placeholder}
                            onChange={handleChange}
                            onFocus={() => setFocused(f.name)}
                            onBlur={() => setFocused(null)}
                          />
                        </div>
                      ))}
                    </div>

                    <div className={`form-group ${focused === 'subject' ? 'focused' : ''}`}>
                      <label htmlFor="subject">Subject<span className="req">*</span></label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        placeholder="Project Discussion"
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>

                    <div className={`form-group ${focused === 'message' ? 'focused' : ''}`}>
                      <label htmlFor="message">Message<span className="req">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        placeholder="Tell us about your project, timeline, and goals..."
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                      />
                    </div>

                    <button type="submit" className="btn btn-gold btn-lg form-submit">
                      Send Message
                      <ArrowRight />
                    </button>
                    <p className="form-note">* Required fields. We'll respond within 24 hours.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us quick */}
      <section className="contact-why">
        <div className="container">
          <div className="contact-why-grid">
            {[
              { icon: '/response.png', title: 'Quick Response', desc: 'We reply to all inquiries within 24 hours' },
              { icon: '/experts.png', title: 'Expert Team', desc: 'Experienced professionals ready to help' },
              { icon: '/approach.png', title: 'Tailored Approach', desc: 'Custom solutions for your specific needs' },
              { icon: '/result.png', title: 'Proven Results', desc: '50+ successful projects and counting' },
            ].map((w, i) => (
              <div key={i} className="cw-card">
                <span className="cw-icon">
                  <img src={w.icon} alt={w.title} className="value-img" />
                </span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;