import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Virtual Intern",
    company: "Infosys",
    location: "Remote",
    period: "Aug 2025 – Oct 2025",
    project: "Taxpal - Full Stack Tax Estimator Platform",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description: [
      "Developed and optimized scalable backend services and RESTful APIs using Node.js and Express.js",
      "Improved system efficiency through integrated React-Toastify for enhanced user notifications",
      "Implemented React Router for seamless navigation and routing across the platform",
      "Built responsive and user-friendly frontend components for tax estimation workflows",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(262_83%_58%_/_0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2" />

              {/* Experience Card */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 glow" />

                {/* Left Content (Date) */}
                <div className="hidden md:flex justify-end pr-8">
                  <div className="glass p-4 rounded-lg inline-block">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar size={16} />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right Content (Details) */}
                <div className="md:pl-8">
                  <div className="glass p-6 rounded-xl glass-hover">
                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-primary mb-4">
                      <Calendar size={16} />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                        <Briefcase size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-accent mb-2">{exp.project}</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
