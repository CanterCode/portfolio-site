import { Icon } from "@iconify/react";
import NavButton from "../../components/NavButton/NavButton";

const skills = [
  { icon: "simple-icons:react", label: "React" },
  { icon: "simple-icons:typescript", label: "TypeScript" },
  { icon: "simple-icons:nodedotjs", label: "Node.js" },
  { icon: "simple-icons:express", label: "Express.js" },
  { icon: "simple-icons:supabase", label: "Supabase" },
  { icon: "simple-icons:firebase", label: "Firebase" },
  { icon: "simple-icons:tailwindcss", label: "Tailwind CSS" },
  { icon: "lucide:brain", label: "AI Engineering" },
];

function Home() {
  return (
    <section className="text-text w-full flex-grow flex flex-col justify-center items-center py-6" aria-labelledby="home-heading">
      <div className="w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 lg:gap-12">
          <div className="w-full lg:w-[55%] flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h4 className="text-lg md:text-xl font-normal text-text-muted mb-1">Howdy! My name is</h4>
            <h1 id="home-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Joshua Canterbury</h1>
            <p className="text-sm text-slate-500 tracking-wide mb-4">React, JavaScript, TypeScript, Node.js, AI Augmentation</p>
            <p className="mb-4 text-lg leading-relaxed">
              I'm a DFW based Software Engineer building clean, high-performance web apps. I spent a decade solving high-pressure problems in the service industry before moving into full-stack development. I turn complex ideas into simple, intuitive tools that actually work.
            </p>

            <div className="p-6 md:p-10 mt-2 bg-bg-overlay border border-border rounded-2xl shadow-card text-text">
              <p className="leading-relaxed mb-6 text-text-muted">
                I specialize in frontend architecture—creating eye-catching, type-safe UI with React and TypeScript—but I’m just as comfortable on the backend. Whether it’s architecting databases or building out API endpoints, I bridge the gap across the entire stack.
              </p>

              <div className="flex flex-wrap justify-center gap-5 py-4" role="list" aria-label="Technologies">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center transition-transform duration-200 hover:scale-125 focus-within:outline focus-within:outline-2 focus-within:outline-focus focus-within:outline-offset-2 rounded"
                    role="listitem"
                    tabIndex={0}
                    title={skill.label}
                  >
                    <Icon
                      icon={skill.icon}
                      style={{ fontSize: "2.5rem", color: "var(--color-text)" }}
                      aria-label={skill.label}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <NavButton label="Get to Know Me" to="/about" />
                <NavButton label="See My Work" to="/projects" />
                <NavButton label="Let's Connect" to="/contact" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/images/headshot.jpg"
              alt="Joshua Canterbury"
              className="w-[85%] sm:w-[75%] md:w-full max-w-[20rem] md:max-w-[26rem] lg:max-w-[28rem] aspect-square object-cover rounded-[2rem] shadow-2xl mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
