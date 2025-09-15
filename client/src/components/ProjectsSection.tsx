import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ASR Solar Mission",
    description: "I built the ASR Solar Mission website end-to-end with responsive design across all devices. It includes pages like Home, About, Services, Projects, Brands, and Contact, with interactive features such as a mobile call button. The site was deployed using Vercel with DNS setup for production.",
    image: "🌞", // TODO: Replace with actual image
    liveUrl: "https://asrsolarmission.com/",
    githubUrl: null,
    technologies: ["HTML", "Bootstrap", "React", "JavaScript", "Git", "Vercel"],
    category: "web",
    status: "live",
    featured: true,
    date: "Sep 2025"
  },
  {
    id: 2,
    title: "BiteRush - Web App",
    description: "Built a Swiggy-like food delivery app leveraging real-time APIs to showcase live restaurant data and menus. Created a responsive and user-friendly interface using React, Bootstrap, and Material UI. Implemented Redux for dynamic cart state management and integrated secure authentication for smooth performance.",
    image: "🍔", // TODO: Replace with actual image
    liveUrl: null,
    githubUrl: null,
    technologies: ["HTML", "Bootstrap", "React", "Redux", "JavaScript"],
    category: "web",
    status: "completed",
    featured: true,
    date: "Aug 2024"
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Developed a chatbot for instant user query responses using Gemini AI API. Enabled contextual responses with support for custom data sources.",
    image: "🤖", // TODO: Replace with actual image
    liveUrl: "https://aichatbot-smoky-five.vercel.app/",
    githubUrl: null,
    technologies: ["HTML", "CSS", "JavaScript", "Gemini AI API"],
    category: "ai",
    status: "live",
    featured: false,
    date: "2024"
  },
  {
    id: 4,
    title: "Jarvis - Personal Voice Assistant",
    description: "Developed a Python-based voice assistant for laptops, enabling hands-free interaction through voice commands. Integrated speech recognition libraries like Speech-Recognition and PocketSphinx to convert voice to text. Utilized NLP tools such as NLTK and Speech Recognition to interpret user intent and execute commands effectively.",
    image: "🎤", // TODO: Replace with actual image
    liveUrl: null,
    githubUrl: null,
    technologies: ["Python", "NLP", "Speech Recognition", "Pyttsx3", "OS"],
    category: "ai",
    status: "completed",
    featured: false,
    date: "2024"
  }
];

const categories = ["all", "web", "ai"];
const techFilters = ["React", "JavaScript", "Python", "AI"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const techMatch = !selectedTech || project.technologies.some(tech => 
      tech.toLowerCase().includes(selectedTech.toLowerCase())
    );
    return categoryMatch && techMatch;
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-projects">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my expertise in modern web development 
              and innovative solutions.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-category-${category}`}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                data-testid="filter-tech-toggle"
              >
                <Filter className="w-4 h-4" />
                Tech Filter
              </Button>
              {techFilters.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  data-testid={`filter-tech-${tech.toLowerCase()}`}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover-elevate transition-all duration-300 overflow-hidden"
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                  <span className="text-6xl" data-testid={`project-image-${project.id}`}>
                    {project.image}
                  </span>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4" data-testid={`project-featured-${project.id}`}>
                      Featured
                    </Badge>
                  )}
                  {project.status === "live" && (
                    <Badge variant="secondary" className="absolute top-4 right-4" data-testid={`project-status-${project.id}`}>
                      Live
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" data-testid={`project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground" data-testid={`project-date-${project.id}`}>
                        {project.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`project-desc-${project.id}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs"
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-2"
                        onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
                        data-testid={`project-live-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12" data-testid="projects-empty">
              <p className="text-muted-foreground">No projects found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}