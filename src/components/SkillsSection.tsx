import { Code, Database, Server, GitBranch, Brain, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
      { name: "SQL (MySQL)", level: 80 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Server,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 75 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    title: "Core CS Concepts",
    icon: Brain,
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 82 },
      { name: "Operating Systems", level: 75 },
      { name: "DBMS", level: 80 },
      { name: "Computer Networks", level: 75 },
    ],
  },
];

const techLogos = [
  "React", "Node.js", "JavaScript", "Java", "Python", "MongoDB", 
  "MySQL", "Spring Boot", "Docker", "Git", "Express.js", "TypeScript"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(217_91%_60%_/_0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass p-6 rounded-xl"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="glass p-8 rounded-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="text-primary" size={24} />
            <h3 className="text-xl font-semibold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Problem-solving", "Strong Communication", "Team Collaboration", "Adaptability", "Critical Thinking", "Time Management"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 glass rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
