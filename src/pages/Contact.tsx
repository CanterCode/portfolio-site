import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Reason for reaching out"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
