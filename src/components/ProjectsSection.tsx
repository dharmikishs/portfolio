import { ExternalLink, Github, Car, Home, Cloud, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Drive Doc",
    subtitle: "Full Stack Highway Services Platform",
    description:
      "A comprehensive highway services web application providing real-time traffic updates, emergency assistance, weather forecasts, EV charging station locators, and an AI-powered chatbot for seamless user support.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "EJS", "MVC Architecture", "Web Socket"],
    features: [
      "Real-time traffic updates using WebSocket",
      "Emergency assistance integration",
      "Live weather forecasts",
      "EV charging station locator",
      "AI-powered chatbot support",
      "Authentication & dynamic routing",
    ],
    icon: Car,
    gradient: "from-blue-500 to-cyan-400",
    liveLink: "https://highwayservices.onrender.com", // Add actual link
    githubLink: "https://github.com/dharmikmani123/HighwayServices",
    deployment: "Render",
  },
  {
    title: "Urban Rentals",
    subtitle: "Full Stack Vacation Rental Platform",
    description:
      "An end-to-end vacation rental application with comprehensive listings, secure booking system, and role-based access control. Built with enterprise-grade architecture and automated CI/CD pipeline.",
    techStack: ["Spring Boot", "React.js", "MySQL", "GitHub Actions", "JWT", "CI/CD"],
    features: [
      "Property listings with search & filters",
      "Secure booking system",
      "JWT-based authentication",
      "Role-based access control",
      "RESTful APIs with Spring Boot",
      "Automated CI/CD with GitHub Actions",
    ],
    icon: Home,
    gradient: "from-violet-500 to-purple-400",
    liveLink: "#", // Add actual link
    githubLink: "https://github.com/KothamsuDharmik",
    deployment: "Vercel",
  },
  {
    title: "Taxpal",
    subtitle: "Full Stack Tax Estimator Platform",
    description:
      "A professional tax estimation platform developed during Infosys internship. Features scalable backend services, RESTful APIs, and an intuitive user interface for tax calculations and estimations.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "React-Toastify", "React Router"],
    features: [
      "Tax calculation engine",
      "User-friendly estimation forms",
      "Real-time notifications",
      "Secure data handling",
      "Responsive design",
      "Optimized backend services",
    ],
    icon: Zap,
    gradient: "from-emerald-500 to-teal-400",
    liveLink: "#", // Add actual link
    githubLink: "https://github.com/springboardmentor0316/Taxpal_team1/tree/Dev",
    deployment: "Render",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%_/_0.05),_transparent_50%)]" />

      {/* Open to Work Profile Photo */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-32 h-32 mb-2">
          <img
            src="/profile-photo.jpeg"
            alt="Profile Photo"
            className="object-cover w-full h-full rounded-full border-4 border-primary shadow-lg"
            draggable="false"
          />
        </div>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm font-medium text-foreground">Open to Work</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="relative glass p-8 rounded-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                      {/* Abstract Project Visual */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                      <div className={`absolute top-4 left-4 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-30 rounded-full blur-2xl`} />
                      <div className={`absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-xl`} />
                      
                      <div className="relative text-center z-10">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                          <project.icon size={40} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-6">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-sm font-medium mb-4`}>
                      <project.icon size={16} />
                      {project.subtitle}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 glass rounded-lg text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Deployment Info */}
                  <div className="flex items-center gap-2 text-sm">
                    <Cloud size={16} className="text-primary" />
                    <span className="text-muted-foreground">Deployed on</span>
                    <span className="font-medium">{project.deployment}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="hero" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="hero-outline" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
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
