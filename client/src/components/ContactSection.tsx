import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mallachanikya22@gmail.com",
    href: "mailto:mallachanikya22@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 83673-39798",
    href: "tel:+918367339798"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/chanikya-malla" // TODO: Replace with actual LinkedIn
  },
  {
    icon: Github,
    label: "GitHub", 
    href: "https://github.com/chanikya-malla" // TODO: Replace with actual GitHub
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/chanikya_malla" // TODO: Replace with actual Twitter
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual form submission logic
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-contact">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold" data-testid="contact-info-heading">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium" data-testid={`contact-label-${index}`}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`contact-value-${index}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground" data-testid={`contact-value-${index}`}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold" data-testid="social-links-heading">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(social.href, '_blank')}
                      data-testid={`social-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary" data-testid="availability-title">
                    Available for Work
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid="availability-desc">
                    I'm currently open to new opportunities and exciting projects. 
                    Feel free to reach out for freelance work or full-time positions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}