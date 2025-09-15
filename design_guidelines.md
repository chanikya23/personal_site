# Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear, Vercel, and GitHub profiles, emphasizing clean minimalism with strategic visual impact.

## Core Design Elements

### Color Palette
- **Primary (Dark Mode)**: 220 15% 8% (background), 220 20% 95% (text)
- **Primary (Light Mode)**: 0 0% 98% (background), 220 15% 15% (text)
- **Brand Accent**: 260 100% 70% (vibrant purple for CTAs and highlights)
- **Secondary**: 220 15% 60% (muted text), 220 20% 20% (borders)

### Typography
- **Primary**: Inter (Google Fonts) for headings and body text
- **Code/Tech**: JetBrains Mono for technology tags and code snippets
- **Hierarchy**: 4xl for hero titles, 2xl for section headers, lg for body text

### Layout System
**Tailwind Spacing**: Consistent use of 4, 8, 16, and 24 units (p-4, m-8, gap-16, py-24) for predictable rhythm and visual harmony.

### Component Library

#### Navigation
- Fixed header with blur backdrop
- Logo/name on left, nav links center, theme toggle right
- Mobile: hamburger menu with slide-out drawer

#### Hero Section
- Split layout: left text content, right professional headshot
- Animated typing effect for role/title
- Primary CTA button with resume download
- Subtle gradient background overlay

#### About Section
- Two-column layout with profile image and detailed bio
- Animated skill bars or pill badges for technologies
- Career timeline with company logos and dates

#### Projects Grid
- Masonry or card-based layout with hover effects
- Technology tag filtering system
- Live preview buttons with blurred backgrounds on project images
- GitHub and demo links prominently displayed

#### Experience Timeline
- Vertical timeline design with company branding
- Expandable cards showing project details and technologies
- Clear date ranges and role descriptions

#### Contact Section
- Working contact form with validation
- Social media icon links
- Professional headshot or illustration
- Location and availability status

### Animations
- **Minimal and purposeful**: Subtle fade-ins on scroll, smooth theme transitions
- **Hero typing animation**: Typewriter effect for role description
- **Hover states**: Gentle scale and shadow effects on cards
- **Page transitions**: Smooth scroll behavior between sections

### Visual Treatments
- **Cards**: Subtle borders with hover elevation
- **Gradients**: Minimal purple-to-blue gradient overlays in hero section
- **Shadows**: Soft, layered shadows for depth without heaviness
- **Backgrounds**: Clean with optional subtle grid or dot patterns

## Images
- **Hero Image**: Professional headshot (400x400px) with subtle border radius
- **About Image**: Casual professional photo or workspace shot
- **Project Screenshots**: High-quality mockups or live site captures
- **Company Logos**: Clean, consistent sizing in experience timeline
- **Technology Icons**: Use Heroicons or similar for consistency

## Key Constraints
- Single-page application with smooth scroll navigation
- Maximum 5 main sections: Hero, About, Projects, Experience, Contact
- Mobile-first responsive design with breakpoints at sm, md, lg, xl
- Fast loading with optimized images and minimal JavaScript
- Accessible design with proper contrast ratios and keyboard navigation