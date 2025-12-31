import { GraduationCap, Code2, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science",
    description: "Sathyabama Institute, CGPA: 8.43",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "MERN Stack & Spring Boot Expert",
  },
  {
    icon: Users,
    title: "Team Collaborator",
    description: "Strong communication skills",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "DSA & Core CS Fundamentals",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(262_83%_58%_/_0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">GET TO KNOW ME</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Computer Science student at Sathyabama Institute of Science 
              and Technology with a strong focus on building scalable web applications. 
              My journey in software development has equipped me with hands-on experience 
              across the full development lifecycle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in <span className="text-foreground font-medium">Java-based applications</span> and 
              the <span className="text-foreground font-medium">MERN stack</span>, bringing ideas to life through 
              clean, maintainable code. I'm proficient in implementing CI/CD pipelines 
              using Git and GitHub Actions for seamless deployments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I focus on strengthening my core CS fundamentals 
              including Data Structures, Algorithms, Operating Systems, and DBMS to 
              build a strong foundation for solving complex problems.
            </p>

            {/* Education */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">B.E. Computer Science and Engineering</h4>
                      <p className="text-muted-foreground text-sm">Sathyabama Institute Of Science And Technology</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-mono text-sm">2023 - 2027</p>
                      <p className="text-success font-semibold">CGPA: 8.43</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Intermediate (MPC)</h4>
                      <p className="text-muted-foreground text-sm">Sri Chaitanya Junior College</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-mono text-sm">2021 - 2023</p>
                      <p className="text-success font-semibold">674/1000</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">SSC</h4>
                      <p className="text-muted-foreground text-sm">Sri Sathya Sai Vidhya Nikethan</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-mono text-sm">2020 - 2021</p>
                      <p className="text-success font-semibold">600/600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass glass-hover p-6 rounded-xl text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
