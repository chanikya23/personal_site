import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript (ES6+)", "React.js", "Redux Toolkit", "TypeScript", 
  "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap",
  "Chart.js", "REST APIs", "Git/GitHub", "Responsive Design",
  "Performance Optimization", "Code Splitting"
];

const highlights = [
  {
    icon: "🚀",
    title: "Performance Focused",
    description: "Optimizing applications with debouncing, lazy loading, and code splitting"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Creating cross-device compatible applications that enhance user experience"
  },
  {
    icon: "🔧",
    title: "Modern Tools",
    description: "Proficient with Git, GitHub, Jira, Postman, and VS Code for efficient development"
  },
  {
    icon: "💡",
    title: "Problem Solver",
    description: "Passionate about UI/UX, problem-solving, and continuous learning"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-about">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Frontend Developer</span> with <span className="text-primary font-medium">2+ years of professional experience</span>, specializing in building and optimizing scalable, responsive, and user-centric web applications.
              </p>
              
              <p>
                My expertise includes JavaScript (ES6+), React.js, Redux Toolkit, HTML5, CSS3, Bootstrap, Tailwind CSS, and Material UI, enabling me to deliver modern, clean, and interactive UI designs.
              </p>
              
              <p>
                I have successfully developed real-time dashboards using Chart.js, implemented REST API integrations for seamless data handling, and built cross-device compatible applications that enhance user experience.
              </p>
              
              <p>
                My goal is to deliver <span className="text-foreground font-medium">high-quality solutions</span> that balance technical excellence with real-world business impact.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold" data-testid="heading-skills">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm"
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights and Image */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    {/* TODO: Replace with actual about image */}
                    <div className="text-4xl" data-testid="about-image-placeholder">🧑‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="text-2xl">{highlight.icon}</div>
                    <div className="space-y-2">
                      <h4 className="font-semibold" data-testid={`highlight-title-${index}`}>
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`highlight-desc-${index}`}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}