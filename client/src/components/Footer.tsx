import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:mallachanikya22@gmail.com",
    label: "Email"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/chanikya-malla", // TODO: Replace with actual LinkedIn
    label: "LinkedIn"
  },
  {
    icon: Github,
    href: "https://github.com/chanikya-malla", // TODO: Replace with actual GitHub
    label: "GitHub"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="space-y-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md"
              data-testid="footer-logo"
            >
              Chanikya
            </button>
            <p className="text-sm text-muted-foreground">
              Frontend Developer crafting modern web experiences
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => window.open(social.href, '_blank')}
                data-testid={`footer-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © {currentYear} Chanikya Satish Malla
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Built with <Heart className="w-3 h-3 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground" data-testid="footer-tagline">
            "Turning ideas into interactive digital experiences"
          </p>
        </div>
      </div>
    </footer>
  );
}