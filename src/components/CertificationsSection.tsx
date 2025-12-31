import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    skills: ["Core Java", "OOP Concepts", "Collections", "Multithreading"],
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    icon: "☁️",
    color: "from-blue-500 to-cyan-500",
    skills: ["Cloud Architecture", "Virtualization", "Distributed Systems", "Cloud Services"],
  },
  {
    title: "Oracle Cloud Infrastructure 2025",
    subtitle: "AI Foundations Associate",
    issuer: "Oracle University",
    icon: "🔮",
    color: "from-red-500 to-pink-500",
    skills: ["Oracle Cloud", "AI Foundations", "Machine Learning Basics", "OCI Services"],
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(217_91%_60%_/_0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                  {cert.subtitle && (
                    <p className="text-primary text-sm font-medium">{cert.subtitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 mb-4 text-success">
                <CheckCircle size={16} />
                <span className="text-sm font-medium">Verified Certification</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { number: "3+", label: "Certifications" },
            { number: "8.43", label: "CGPA" },
            { number: "3+", label: "Projects Built" },
            { number: "100%", label: "Dedication" },
          ].map((stat) => (
            <div key={stat.label} className="glass p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
