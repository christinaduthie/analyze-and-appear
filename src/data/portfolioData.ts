export type SectionId = "about" | "experience" | "skills" | "projects" | "gallery" | "contact";

export interface NavSection {
  id: SectionId;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  achievements: string[];
  tech: string[];
}

export interface SkillItem {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  period: string;
  year: number;
  featured: boolean;
  tags: string[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  details: {
    problem: string;
    approach: string[];
    results: string[];
  };
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
  category: string;
}

export const navSections: NavSection[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const portfolioData = {
  person: {
    name: "Samuel Rolands",
    role: "Data Scientist",
    location: "Ranchi, Jharkhand, India",
    email: "samuel.rolands@example.com",
  },
  seo: {
    title: "Samuel Rolands | Data Scientist Portfolio",
    description:
      "Portfolio of Samuel Rolands featuring data science projects, technical experience, skills, and contact details.",
    ogImage: "/og-portfolio-cover.png",
    siteUrl: "https://www.samuelrolands.com",
  },
  hero: {
    headline: "Samuel Rolands — Data Scientist",
    subheadline:
      "I build practical machine learning and analytics products with a strong focus on execution, usability, and measurable outcomes.",
    summary:
      "My work spans web platforms, computer vision, geospatial analytics, and real-time data tools, from prototype to deployment.",
    cta: {
      projects: "#projects",
      resume: "/Samuel-Rolands-Resume.pdf",
    },
  },
  about: {
    photo: "/images/profile/samuel-rolands-photo.svg",
    photoAlt: "Portrait of Samuel Rolands",
    bio: [
      "I am a builder at the intersection of data science, software, and product execution.",
      "I enjoy taking an idea from first principles to working implementation, with attention to quality and performance.",
      "Across projects and ventures, I focus on clear problem framing, reliable delivery, and practical impact.",
    ],
    highlights: [
      { label: "Base", value: "Ranchi, Jharkhand" },
      { label: "Primary Focus", value: "Data Science, ML, Computer Vision" },
      { label: "Secondary Focus", value: "Front-end Development, Product Execution" },
    ],
    focus: [
      "Applied machine learning solutions with clean deployment workflows",
      "Data-rich interactive products and dashboards",
      "End-to-end delivery from concept to implementation",
    ],
  },
  experience: {
    initialVisibleCount: 2,
    items: [
      {
        role: "Web Developer",
        company: "ClickBurst Network Pvt Ltd.",
        location: "Patna, Bihar",
        dates: "June 2024 – Sept 2024",
        achievements: [
          "Developed responsive and SEO-optimized websites for enterprise clients using HTML5, CSS, and JavaScript, ensuring device compatibility and smooth page integration.",
          "Collaborated with branding, digital marketing, and cross-functional teams to align UI/UX with brand identity and campaign goals.",
          "Handled site maintenance, version-controlled updates, and assisted in client-facing web deployments.",
        ],
        tech: ["HTML5", "CSS", "JavaScript", "SEO", "Git"],
      },
      {
        role: "Founder & Director",
        company: "Flashpoint Media",
        location: "Ranchi, Jharkhand",
        dates: "Aug 2024 – Present",
        achievements: [
          "Founded and operated a client-facing multimedia and web services venture delivering websites, branding, photography/cinematography, and digital content solutions.",
          "Managed product design, service packaging, pricing strategy, quality control, delivery timelines, project scoping, and brand identity.",
          "Led end-to-end technical execution including front-end development, design, performance optimization, deployment, maintenance, and client acquisition.",
          "Built Flashpoint Editorial as an independent product-led visual editorial focused on photography, design, art, and visual storytelling.",
        ],
        tech: ["Web Development", "Branding", "Design", "Performance Optimization", "Deployment"],
      },
      {
        role: "Co-Founder",
        company: "Contactless Hygiene Systems",
        location: "Ranchi, Jharkhand",
        dates: "2020 – 2022",
        achievements: [
          "Co-founded a local product venture during the initial COVID outbreak, designing and producing region-first contactless sanitizer dispensers for public institutions.",
          "Led mechanical design, material sourcing, metal fabrication, and rapid prototyping of automated variants using repurposed aqua-guard assemblies.",
          "Conducted direct B2B outreach, on-site pitching, and sales to schools, hospitals, and offices amid severe supply-chain constraints.",
          "Initiated automated dispenser prototyping with Arduino-based control systems and sonar/infrared proximity sensing.",
        ],
        tech: ["Arduino", "Prototyping", "Embedded Systems", "Mechanical Design", "B2B Sales"],
      },
    ] as ExperienceItem[],
  },
  skills: {
    topSkills: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Data Analysis",
      "Flask",
      "Streamlit",
      "OpenCV",
      "Front-end Development",
    ],
    categories: [
      {
        category: "Machine Learning",
        skills: [
          { name: "Supervised Learning", level: 5 },
          { name: "Model Evaluation", level: 4 },
          { name: "Feature Engineering", level: 4 },
          { name: "CNN Workflows", level: 4 },
        ],
      },
      {
        category: "Computer Vision",
        skills: [
          { name: "OpenCV", level: 5 },
          { name: "MediaPipe Landmarks", level: 5 },
          { name: "Image Preprocessing", level: 4 },
          { name: "Real-time Inference", level: 4 },
        ],
      },
      {
        category: "Data & Analytics",
        skills: [
          { name: "Data Visualization", level: 4 },
          { name: "Geospatial Indices (NDVI/NDBI/MNDWI)", level: 4 },
          { name: "Telemetry Analysis", level: 4 },
          { name: "Exploratory Analysis", level: 5 },
        ],
      },
      {
        category: "Programming",
        skills: [
          { name: "Python", level: 5 },
          { name: "JavaScript", level: 4 },
          { name: "C/C++ Fundamentals", level: 3 },
          { name: "OOP Design", level: 4 },
        ],
      },
      {
        category: "Web & Product",
        skills: [
          { name: "Flask", level: 4 },
          { name: "Streamlit", level: 4 },
          { name: "HTML/CSS", level: 5 },
          { name: "SEO Optimization", level: 4 },
        ],
      },
    ] as SkillCategory[],
  },
  projects: {
    items: [
      {
        id: "signfine-asl-platform",
        title: "SignFine – Real-time American Sign Language (ASL) Recognition Platform",
        oneLiner: "Final Year Capstone Project, BCA",
        description:
          "Developed a real-time webcam-based ASL recognition web platform for disabled users using computer vision and Flask.",
        period: "Dec 2024 - May 2025",
        year: 2025,
        featured: true,
        tags: ["Computer Vision", "ML", "Accessibility"],
        techStack: ["Python", "Flask", "MediaPipe", "OpenCV", "CNN"],
        links: {},
        details: {
          problem:
            "Accessible sign interpretation tools are limited and often lack real-time responsiveness in web environments.",
          approach: [
            "Collected 1.5 lakh+ ASL gesture images with 5.4 million+ landmark data points.",
            "Built hand tracking and landmark extraction pipelines with MediaPipe and OpenCV.",
            "Trained and serialized a custom CNN classifier for static gesture recognition.",
          ],
          results: [
            "Achieved above 97% classification accuracy on static ASL gestures.",
            "Delivered a real-time browser-based recognition experience.",
          ],
        },
      },
      {
        id: "novaworks-dubai-forecasting",
        title: "NovaWorks Workshop – Dubai Urban Growth Forecasting Dashboard 2027",
        oneLiner: "Space Society University of Birmingham, Ribbitron Lab",
        description:
          "Built an interactive geospatial dashboard for temporal urban growth analysis and forecasting in Dubai.",
        period: "Nov 2025 - Dec 2025",
        year: 2025,
        featured: true,
        tags: ["Geospatial", "Remote Sensing", "Dashboard"],
        techStack: ["Remote Sensing", "NDVI", "NDBI", "MNDWI", "GIS Visualization"],
        links: {},
        details: {
          problem:
            "Urban planning workflows require interpretable projections of built-up expansion using satellite-derived signals.",
          approach: [
            "Derived NDVI, NDBI, and MNDWI indices for urban land-use analysis in Dubai.",
            "Designed multi-layer visualization with temporal comparison and map slider controls.",
            "Produced a 2027 prediction map highlighting projected built-up expansion zones.",
          ],
          results: [
            "Delivered an interactive forecasting dashboard for comparative geospatial analysis.",
            "Improved interpretability of future urban growth patterns for planning contexts.",
          ],
        },
      },
      {
        id: "kurvetrace-f1-telemetry",
        title: "KurveTrace – Real-time F1 Telemetry Analysis Tool",
        oneLiner: "Project",
        description:
          "Developed a telemetry comparison tool using real F1 race data to evaluate driver performance with high-resolution overlays.",
        period: "April 2025 - May 2025",
        year: 2025,
        featured: false,
        tags: ["Analytics", "Telemetry", "Streamlit"],
        techStack: ["Python", "FastF1", "Streamlit", "Data Interpolation", "Visualization"],
        links: {},
        details: {
          problem:
            "Comparing driver performance across sessions requires synchronized, high-resolution telemetry processing.",
          approach: [
            "Implemented distance-based interpolation with more than 15,000 telemetry points per lap.",
            "Built delta precision workflows across race sessions and driver pairings via FastF1 cache/session parsing.",
            "Designed a Streamlit interface with live driver/session selection and race overlays.",
          ],
          results: [
            "Enabled engineer-focused comparative analysis with extensible visualization modules.",
            "Delivered consistent telemetry overlays for deep lap-level inspection.",
          ],
        },
      },
      {
        id: "caissa-terminal-chess-engine",
        title: "Caïssa – Terminal Chess Engine",
        oneLiner: "Project",
        description:
          "Developed a fully rules-compliant terminal chess engine from scratch in Python with modular architecture.",
        period: "February 2025 - April 2025",
        year: 2025,
        featured: false,
        tags: ["Python", "Algorithms", "System Design"],
        techStack: ["Python", "OOP", "Game Logic", "Unicode Rendering", "File Logging"],
        links: {},
        details: {
          problem:
            "A complete chess implementation requires strict rule enforcement, game-state integrity, and clear interaction flow.",
          approach: [
            "Implemented full move validation, turn control, capture flow, castling, en passant, promotion, and draw detection.",
            "Designed a modular validation engine and move controller with strong separation of concerns.",
            "Built an interactive terminal interface with Unicode board rendering and move history logging.",
          ],
          results: [
            "Reached about 95% adherence to FIDE gameplay rules in testing.",
            "Delivered a maintainable architecture for future engine enhancements.",
          ],
        },
      },
      {
        id: "face-detection-system",
        title: "Face Detection System",
        oneLiner: "Project",
        description:
          "Built a face detection pipeline using Haar Cascade with optimized preprocessing for robust frontal-face detection.",
        period: "Nov 2024 - Dec 2024",
        year: 2024,
        featured: false,
        tags: ["Computer Vision", "OpenCV"],
        techStack: ["Python", "OpenCV", "NumPy", "Image Processing"],
        links: {},
        details: {
          problem:
            "Real-time face detection accuracy and speed depend heavily on preprocessing and detection parameter tuning.",
          approach: [
            "Implemented Haar Cascade-based facial detection on frontal profiles.",
            "Optimized preprocessing with grayscale conversion for computational efficiency.",
            "Added dynamic bounding-box annotations through NumPy-backed frame operations.",
          ],
          results: [
            "Achieved around 90% frontal-face detection accuracy.",
            "Improved runtime stability through preprocessing and parameter tuning.",
          ],
        },
      },
    ] as ProjectItem[],
  },
  gallery: {
    items: [
      {
        id: "talk-nyc-2025",
        image: "/images/gallery/talk-nyc-2025.svg",
        alt: "Samuel presenting at a data conference",
        caption: "Workshop presentation and technical discussion session",
        category: "Talks",
      },
      {
        id: "viz-climate",
        image: "/images/gallery/viz-climate.svg",
        alt: "Interactive climate trend visualization",
        caption: "Geospatial and analytics visualization snapshot",
        category: "Visualizations",
      },
      {
        id: "hackathon-mentor",
        image: "/images/gallery/hackathon-mentor.svg",
        alt: "Mentoring team at a hackathon",
        caption: "Project sprint and rapid prototyping session",
        category: "Hackathons",
      },
      {
        id: "community-workshop",
        image: "/images/gallery/community-workshop.svg",
        alt: "Whiteboard session from a workshop",
        caption: "Collaborative planning and technical workshop",
        category: "Talks",
      },
      {
        id: "photo-mountains",
        image: "/images/gallery/photo-mountains.svg",
        alt: "Landscape photography from mountain trip",
        caption: "Photography and visual storytelling exploration",
        category: "Photography",
      },
      {
        id: "viz-health",
        image: "/images/gallery/viz-health.svg",
        alt: "Healthcare outcomes heatmap",
        caption: "Data visualization concept and dashboard composition",
        category: "Visualizations",
      },
    ] as GalleryItem[],
  },
  contact: {
    prompt: "Open to collaboration, freelance projects, and full-time opportunities.",
    form: {
      mailtoRecipient: "samuel.rolands@example.com",
      backendEndpoint: "",
    },
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com/in/samuelrolands" },
      { label: "GitHub", href: "https://github.com/samuelrolands" },
      { label: "Kaggle", href: "https://kaggle.com/samuelrolands" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=example" },
      { label: "Email", href: "mailto:samuel.rolands@example.com" },
    ],
    backendInstructions: [
      "Formspree: set backendEndpoint to your Formspree URL and keep mode on Backend API.",
      "Netlify Forms: use data-netlify on the form and map matching field names.",
      "Serverless: point backendEndpoint to your API route and return a 2xx response on success.",
    ],
  },
};

export type PortfolioData = typeof portfolioData;
