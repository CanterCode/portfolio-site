import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import emailjs from '@emailjs/browser';
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTimes,
} from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const currentTheme = useSelector((state: RootState) => state.theme.current);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    status: 'success' | 'error' | null;
    message: string;
  }>({
    show: false,
    status: null,
    message: '',
  });

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'An email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'We need a valid email to get back to you.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = "Don't forget your message!";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setToast({ show: false, status: null, message: '' });

    try {
      await emailjs.send(
        'service_ykv9u8s',
        'template_qtj6aci',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '0U7vEuxUo48sNKLUN'
      );

      let successMsg = 'Message Sent!';
      if (currentTheme === 'hacker')
        successMsg = 'Handshake Established. Message Encrypted & Sent.';
      else if (currentTheme === 'ruleBreaker') successMsg = 'Boom. Message Delivered.';

      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ show: true, status: 'success', message: successMsg });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToast({ show: true, status: 'error', message: 'Connection Failed.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-page" aria-labelledby="contact-heading">
        <div className="contact-container">
          {/* Left Side: Info */}
          <div className="contact-info">
            <h1 id="contact-heading">Get In Touch</h1>
            <p className="contact-intro">
              Seeking a reliable, creative developer to bring your ideas to life? Whether it's a job
              opportunity, freelance project, or collaboration, I'd love to hear from you. Let's
              build something impactful together.
            </p>

            <div className="info-items">
              <div className="info-item">
                <FaEnvelope className="info-icon icon-glow" aria-hidden="true" />
                <span>joshcanterbury.dev@gmail.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon icon-glow" aria-hidden="true" />
                <span>DFW / Remote</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/joshua-canterbury-se/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/CanterCode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-wrapper">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="contact-form"
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="contact-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="contact-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Reason for reaching out"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="contact-error" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="contact-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={isSubmitting}
              >
                <FaPaperPlane aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Feedback */}
      {toast.show && (
        <div className={`contact-toast ${toast.status}`} role="status" aria-live="polite">
          <div className="toast-content">
            <span className="toast-message">{toast.message}</span>
            <div className="toast-actions">
              {toast.status === 'error' && (
                <button
                  type="button"
                  className="toast-retry-btn"
                  onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
                >
                  Retry
                </button>
              )}
              <button
                type="button"
                className="toast-close"
                onClick={() => setToast({ ...toast, show: false })}
                aria-label="Close message"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
