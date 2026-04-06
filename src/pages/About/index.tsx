import './About.css';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const RESUME_URL = '/assets/Joshua%20Canterbury%20-%20Software%20Engineer%20-%20Resume.pdf';

function About() {
  return (
    <section className="about-page page-section" aria-labelledby="about-heading">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Social Proof & Resume Download */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-6 py-3 bg-primary !text-bg font-semibold rounded-lg shadow-md hover:bg-primary-hover hover:-translate-y-1 transition-all duration-200 border border-border no-underline"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-canterbury-se/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-bg-elevated text-primary font-semibold rounded-lg shadow-md hover:bg-bg-overlay hover:-translate-y-1 transition-all duration-200 border border-border no-underline"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/CanterCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-bg-elevated text-primary font-semibold rounded-lg shadow-md hover:bg-bg-overlay hover:-translate-y-1 transition-all duration-200 border border-border no-underline"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>

        {/* Hero: Headshot + About Me */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
          <div className="w-full max-w-[16rem] shrink-0">
            <img
              src="/images/headshot.jpg"
              alt="Joshua Canterbury"
              className="w-full aspect-square object-cover rounded-2xl border-2 border-border shadow-card"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 id="about-heading" className="text-3xl font-bold text-text">
              About Me
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Hi, I'm Josh &mdash; oldest of nine, world traveler, devoted husband, father, and
              bartender turned full-stack developer. I spent a decade running high-volume restaurant
              floors across DFW before pivoting to software engineering. Today, I build scalable web
              applications with the same operational resilience I used to manage 300+ guests a
              night. That background shapes how I work: I'm personable, clear under pressure, and
              thrive on translating complex requirements into reliable technical solutions.
            </p>
          </div>
        </div>

        {/* Two-column: Professional Summary + What Sets Me Apart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <article className="p-6 md:p-8 bg-bg-overlay border border-border rounded-xl shadow-card">
            <h2 className="text-2xl font-bold mb-4 text-text">Professional Summary</h2>
            <p className="text-text-muted leading-relaxed">
              Performance-driven Full-Stack Developer with a foundation in Computer Science and 10+
              years of leadership experience in high-pressure environments. Specializing in React
              and Node.js, I leverage advanced AI tools to accelerate development while maintaining
              rigorous code integrity. Whether it's architecting a robust backend or engineering a
              type-safe frontend, I focus on shipping high-impact, scalable products and fostering
              collaborative team environments.
            </p>
          </article>
          <article className="p-6 md:p-8 bg-bg-overlay border border-border rounded-xl shadow-card">
            <h2 className="text-2xl font-bold mb-4 text-text">The Service Industry Advantage</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Ten years in the service industry didn't just teach me hospitality; it gave me the
              grit to handle complex engineering backends and tight production deadlines. Navigating
              messy, fast-paced workflows translates directly to debugging critical issues and
              managing agile sprints under pressure.
            </p>
            <p className="text-text-muted leading-relaxed">
              I bring deep interpersonal skills, clear communication, and a "clear the board"
              mentality to every engineering team I join&mdash;proving that the soft skills required to
              manage a chaotic Dallas dining room are the same ones needed to ship successful
              software.
            </p>
          </article>
        </div>

        {/* Skills */}
        <section className="mb-16" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-3xl font-bold text-center mb-8 text-text">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Languages
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Frontend
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>React</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>React Query</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Backend & Data
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                AI Development
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>Cursor & Claude</li>
                <li>Gemini & Antigravity</li>
                <li>Prompt Engineering</li>
                <li>Assisted Debugging</li>
                <li>Code Refactoring</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Tools & Practices
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>Git & GitHub</li>
                <li>CI/CD</li>
                <li>VS Code</li>
                <li>Netlify & Vercel</li>
                <li>TDD</li>
                <li>AWS</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Soft Skills
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Creative Problem-Solving</li>
                <li>Time-Management</li>
                <li>Client Interaction</li>
              </ul>
            </div>

            <div className="p-5 bg-bg-elevated border border-border rounded-lg shadow-sm hover:border-primary transition-colors sm:col-span-2 lg:col-span-3 xl:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Certifications & Education
              </h3>
              <ul className="space-y-1.5 text-text-muted">
                <li>
                  <strong>Coding Temple</strong> &mdash; Certificate, Full-Stack Software Engineer
                </li>
                <li>
                  <strong>Baylor University</strong> &mdash; Undergraduate Studies (Computer Science &
                  Business)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-3xl font-bold text-center mb-8 text-text">
            Experience
          </h2>

          <div className="relative border-l-2 border-border pl-6 space-y-10">
            {/* Exp Item 1 */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[35px] top-1.5 border-4 border-bg"></div>
              <h3 className="text-xl font-bold text-text">Full-Stack Software Engineer</h3>
              <p className="text-primary font-medium mb-1">Freelance and Contract | Remote</p>
              <p className="text-sm text-text-muted mb-3">July 2025 &ndash; Present</p>
              <ul className="list-disc ml-5 space-y-2 text-text-muted leading-relaxed marker:text-primary">
                <li>
                  Led a team of frontend engineers on a 3-month contract with African Geospace to
                  build an aerospace talent platform using React and TypeScript, delivering on
                  schedule.
                </li>
                <li>
                  Architected the API and database schema for a construction asset management
                  platform as a Backend Engineer for Dallas Software Developers.
                </li>
                <li>
                  Partnered with small business owners to translate business goals into custom web
                  applications, improving digital visibility and lead capture.
                </li>
                <li>
                  Architected AI-driven workflows to automate repetitive coding tasks and manage
                  multi-agent systems, increasing sprint velocity.
                </li>
                <li>
                  Mentored junior developers on Git-flow practices and React architecture, utilizing
                  CI/CD and Code Reviews to improve consistency.
                </li>
              </ul>
            </div>

            {/* Exp Item 2 */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-border -left-[35px] top-1.5 border-4 border-bg"></div>
              <h3 className="text-xl font-bold text-text">Software Engineer Apprentice</h3>
              <p className="text-primary font-medium mb-1">Coding Temple | Remote</p>
              <p className="text-sm text-text-muted mb-3">January 2025 &ndash; October 2025</p>
              <ul className="list-disc ml-5 space-y-2 text-text-muted leading-relaxed marker:text-primary">
                <li>
                  Built responsive, front-end heavy web apps focusing on clean component
                  architecture and polished UX using React and Bootstrap.
                </li>
                <li>
                  Integrated CI/CD pipelines and TDD into project workflows to simulate professional
                  software development lifecycles.
                </li>
              </ul>
            </div>

            {/* Exp Item 3 */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-border -left-[35px] top-1.5 border-4 border-bg"></div>
              <h3 className="text-xl font-bold text-text">
                Bartender, Trainer, & Event Operations Lead
              </h3>
              <p className="text-primary font-medium mb-1">
                Calabrese & Various Venues | DFW, Colorado, Latin America
              </p>
              <p className="text-sm text-text-muted mb-3">August 2016 &ndash; Present</p>
              <ul className="list-disc ml-5 space-y-2 text-text-muted leading-relaxed marker:text-primary">
                <li>
                  Directed high-volume operational workflows and trained cross-functional teams,
                  ensuring peak service performance under intense pressure.
                </li>
                <li>
                  Developed an operational resilience and incident-response mindset&mdash;skills that
                  directly translate to debugging, managing agile sprints, and meeting aggressive
                  software deadlines.
                </li>
              </ul>
            </div>

            {/* Exp Item 4 */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-border -left-[35px] top-1.5 border-4 border-bg"></div>
              <h3 className="text-xl font-bold text-text">Sales & Project Coordinator</h3>
              <p className="text-primary font-medium mb-1">
                Bench Craft Golf / Power Home Remodeling | Dallas, TX
              </p>
              <p className="text-sm text-text-muted mb-3">August 2023 &ndash; January 2025</p>
              <ul className="list-disc ml-5 space-y-2 text-text-muted leading-relaxed marker:text-primary">
                <li>
                  Directed end-to-end project lifecycles, managing technical requirements and
                  budgets while maintaining 100% data integrity within CRM systems.
                </li>
                <li>
                  Exceeded monthly revenue targets through precise stakeholder communication and
                  effective resource management.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
