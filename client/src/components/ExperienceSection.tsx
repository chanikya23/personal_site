import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "React JS Developer",
    company: "POSGURU PRIVATE LIMITED",
    location: "Remote",
    duration: "Oct 2024 - Apr 2025",
    type: "Full-time",
    description: "I contributed to a cloud-based POS system for retail and restaurant businesses, developing responsive UIs using React.js, Redux, Bootstrap, Chart.JS and Material UI. I integrated RESTful APIs for modules like order management and inventory, ensuring cross-device compatibility.",
    keyProjects: [
      "Restaurant Panel with real-time order tracking and billing",
      "TillApp - financial tool for transaction tracking and analytics"
    ],
    technologies: ["JavaScript", "React.js", "Redux", "Material UI", "Bootstrap", "Chart.JS"]
  },
  {
    id: 2,
    role: "Software - Frontend UI Developer",
    company: "ASU Technologies & Services Pvt Ltd.",
    location: "Hybrid",
    duration: "Apr 2023 - Aug 2024",
    type: "Full-time",
    description: "I was involved in building a modern, responsive e-commerce application using React, JavaScript, and Material UI, with a focus on reusable components and clean code practices. I integrated RESTful APIs for dynamic data rendering with features like filtering, search, and pagination.",
    keyProjects: [
      "E-commerce platform with advanced filtering and search",
      "Secure authentication system with Auth0",
      "Data processing and reporting with Python Pandas"
    ],
    technologies: ["JavaScript", "React.js", "Redux", "SCSS", "Material UI", "Auth0", "Python"]
  },
  {
    id: 3,
    role: "Personal Project",
    company: "BiteRush - Web App",
    location: "Self-directed",
    duration: "Aug 2024",
    type: "Project",
    description: "Developed a Swiggy-inspired food delivery app using real-time APIs to display live restaurant data and menus. Designed a responsive UI with React, Bootstrap, and Material UI for a seamless user experience.",
    keyProjects: [
      "Real-time restaurant data integration",
      "Redux cart state management",
      "Secure user authentication system"
    ],
    technologies: ["JavaScript", "React JS", "Redux", "Tailwind", "Material UI"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-experience">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in frontend development, working with innovative teams 
              and building impactful web applications.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  {/* Content */}
                  <div className="md:ml-16">
                    <Card className="p-8 hover-elevate transition-all duration-300">
                      {/* Header */}
                      <div className="space-y-4 mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-semibold" data-testid={`exp-role-${exp.id}`}>
                              {exp.role}
                            </h3>
                            <p className="text-primary font-medium" data-testid={`exp-company-${exp.id}`}>
                              {exp.company}
                            </p>
                          </div>
                          <Badge variant="outline" data-testid={`exp-type-${exp.id}`}>
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span data-testid={`exp-duration-${exp.id}`}>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span data-testid={`exp-location-${exp.id}`}>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed" data-testid={`exp-desc-${exp.id}`}>
                          {exp.description}
                        </p>

                        {/* Key Projects */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Key Projects & Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.keyProjects.map((project, idx) => (
                              <li 
                                key={idx} 
                                className="text-sm text-muted-foreground flex items-start gap-2"
                                data-testid={`exp-project-${exp.id}-${idx}`}
                              >
                                <span className="text-primary mt-1">•</span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="text-xs"
                                data-testid={`exp-tech-${exp.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}