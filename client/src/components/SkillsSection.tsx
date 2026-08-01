import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiMui, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
    SiPython, SiGit, SiGithub, SiPostman, SiDocker
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandDatabricks } from "react-icons/tb";
import { FaRocket, FaTerminal, FaCode, FaRobot, FaBrain, FaPython  } from "react-icons/fa"; // Generic icons for AI/Tools
import { Card } from "@/components/ui/card";

const skills = [
    // Frontend
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#f9f7f7ff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },

    // Backend
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#9f2b2bff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

    // Tools
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },

    //Data Engineering
    { name: "MSSQL Server", icon: DiMsqlServer, color: "#336791" },
    { name: "Databricks", icon: TbBrandDatabricks, color: "#2496ED" },
    { name: "Python", icon: SiPython, color: "#3776AB" },

    // AI
    { name: "ChatGPT", icon: FaRobot, color: "#412991" },
    { name: "Claude", icon: FaBrain, color: "#D97757" },
    { name: "Cursor", icon: FaTerminal, color: "#000000" },
    { name: "AntiGravity", icon: FaRocket, color: "#7F5AF0" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60" data-testid="heading-skills">
                        Technologies
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My technical toolbox for building scalable and performant applications
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 justify-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="group relative p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-2">
                                <div
                                    className="text-5xl transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: skill.color }}
                                >
                                    <skill.icon />
                                </div>
                                <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                                    {skill.name}
                                </span>

                                {/* Glow effect on hover */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
