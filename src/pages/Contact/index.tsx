import { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <section className="contact-page" aria-labelledby="contact-heading">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2 id="contact-heading">Get In Touch</h2>
          <p className="contact-intro">
            Seeking a reliable, creative developer to bring your ideas to life?
            Whether it's a job opportunity, freelance project, or collaboration,
            I'd love to hear from you. Let's build something impactful together.
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
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
                  aria-describedby={errors.name ? "name-error" : undefined}
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
                  aria-describedby={errors.email ? "email-error" : undefined}
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
                aria-describedby={errors.subject ? "subject-error" : undefined}
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
                aria-describedby={errors.message ? "message-error" : undefined}
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
