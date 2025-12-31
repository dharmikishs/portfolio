import { Github, Linkedin, Mail, ArrowDown, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.15),_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo Section */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-1 rounded-full bg-background" />
              {/* Profile Photo */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-photo.jpeg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover rounded-full border-2 border-background shadow-lg"
                  draggable="false"
                />
              </div>
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Open to Work</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-primary font-mono text-sm md:text-base mb-4">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Kothamasu Dharmik
                <br />
                <span className="gradient-text">Sri Venkata Sai Mani</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
                <MapPin size={18} />
                <span>India</span>
              </div>
              <p className="text-muted-foreground max-w-xl mb-8 text-balance">
                Computer Science student with strong hands-on experience in Java-based 
                application development and MERN stack projects. Skilled in designing, 
                developing, testing, and maintaining software applications across the 
                full development lifecycle.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com/dharmikmani123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kothamasu-dharmik-sri-venkata-sai-mani-53150528a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dharmikmani123@gmail.com"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
