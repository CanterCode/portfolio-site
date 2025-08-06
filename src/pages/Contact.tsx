import { useState } from "react";
import "../css/contactForm.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required.";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // We'll connect EmailJS here later
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-2">Get In Touch</h2>
        <p
          className="text-center text-muted mb-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Seeking a reliable, creative developer to bring your ideas to life?
          Whether it’s a job opportunity, freelance project, or collaboration,
          I’d love to hear from you. Fill out the form below and I’ll be in
          touch promptly—let’s build something impactful together.{" "}
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              <strong>Subject</strong>
            </label>
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Reason for reaching out"
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <strong>Message</strong>
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-15">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
