import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import profileImg from "../images/satish.png";

const roles = [
  "Frontend Developer",
  "ReactJS Specialist",
  "UI/UX Enthusiast",
  "Web Developer",
  "Learning Backend Development",
  "AI Models"
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayedText, isDeleting]);

  const handleDownloadResume = () => {
    // TODO: Replace with actual resume URL
    const resumeUrl = "../../src/resumes/Malla_Satish_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Malla_Satish_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Chanikya</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground min-h-[2rem]">
                <span>{displayedText}</span>
                <span className="animate-pulse">|</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                ✨ Passionate Frontend Developer crafting responsive, scalable, and modern web applications with a strong focus on intuitive UI/UX design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="gap-2"
                data-testid="button-download-resume"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToAbout}
                className="gap-2"
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowDown className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-experience">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-projects">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-technologies">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-chart-2 p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Profile Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}