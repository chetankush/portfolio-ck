import './App.css'
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Experience from './pages/Experience'
import About from './pages/About'

// Centralized data for easy updates
export const userData = {
  name: "CHETAN KUSHWAH",
  title: "Software Engineer",
  subtitle: "Hi! I'm Chetan, a Full Stack Developer based in Noida - India.",
  contact: {
    phone: "+91 9303135537",
    email: "chetankushwah929@gmail.com",
    location: "Noida - UP, India",
    github: "https://github.com/chetankush",
    linkedin: "https://linkedin.com/in/chetan-kushwah",
    resume: "https://drive.google.com/file/d/1234567890/view"
  },
  education: {
    degree: "B.Tech. (CSE)",
    university: "Jaypee University of Engineering and Technology",
    period: "2020 - 2024",
    location: "Guna - MP, India"
  },
  experience: [
    {
      title: "Full Stack Engineer",
      company: "Wipiway LLC",
      period: "Feb 2024 – present",
      location: "San Francisco, Remote",
      responsibilities: [
        "Redesigned and Improved Frontend of Wipiway LLC, improving load speed by 42% & boosting user retention by 25%.",
        "Designed and Developed a Hotel and cowork website located in masai-mara kenya integrated with stayflexi.",
        "Designed and Developed a Crypto Wallet Tracker with Generative AI. It sends email and telegram notifications to users about wallet's transactions with Custom Notifications and scam token detections.",
        "Working on Frontend (Next.js) and Backend (Node) part of Solana project that helps users to create and trade Solana memecoins like pump.fun.",
        "Working on UI/UX and Frontend Part of Tree conservation project using Dynamic NFTs where users can own & trade.",
        "Working on AI-Agent similar to lovable and bolt.new it will help people to create customizable websites using GenAI."
      ]
    },
    {
      title: "SDE Intern",
      company: "DesiQnA",
      period: "June 2023 – August 2023",
      location: "Mumbai, Remote",
      responsibilities: [
        "Worked on the Design and Development part of a fully responsive webpage for a particular section of DesiQnA",
        "Worked on User Verification/Authentication."
      ]
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "C++"],
    frameworks: ["HTML", "CSS", "ReactJS", "Redux", "NextJS", "Node", "Express", "LangChain"],
    databases: ["MongoDB", "Supabase", "SQL"],
    tools: ["Git", "GitHub", "Postman", "AWS EC2", "Netlify"],
    other: ["Prompt Engineering", "AI Development Tools"]
  },
  projects: [
    {
      id: 1,
      title: "Mutivendor E-commerce WebApp",
      label: "MERN Stack",
      description: "Led end-to-end development of a Multivendor website with scalable architecture.",
      image: "/images/ecommerce.jpg",
      bgClass: "pink-bg"
    },
    {
      id: 2,
      title: "E-commerce ArtStore",
      label: "React & Firebase",
      description: "Implemented user authentication and payment gateway using Stripe.",
      image: "/images/artstore.jpg",
      bgClass: "teal-bg"
    },
    {
      id: 3,
      title: "Movies webApp",
      label: "React & Firebase",
      description: "Responsive website to download movies with Firebase authentication.",
      image: "/images/movies.jpg",
      bgClass: "blue-bg"
    },
    {
      id: 4,
      title: "Job finder webapp",
      label: "MERN Stack",
      description: "Secure job finding platform with JWT authentication and optimized performance.",
      image: "/images/jobfinder.jpg",
      bgClass: "dark-blue-bg"
    },
    {
      id: 5,
      title: "Portfolio Website",
      label: "React & CSS",
      description: "Personal portfolio website showcasing projects and skills.",
      image: "/images/portfolio.jpg",
      bgClass: "green-bg"
    },
    {
      id: 6,
      title: "Crypto Tracker",
      label: "Next.js & Node",
      description: "Wallet tracker with AI notifications about transactions and scam detection.",
      image: "/images/crypto.jpg",
      bgClass: "purple-bg"
    }
  ]
};

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
}

function HomePage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Setup particles with full viewport boundaries
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Initialize 8 particles
    particlesRef.current = Array.from({ length: 8 }, () => ({
      x: Math.random() * viewportWidth,
      y: Math.random() * viewportHeight,
      size: Math.random() * 1.5 + 1, // Smaller size: 1-2.5px
      vx: (Math.random() - 0.5) * 8, // Faster velocity
      vy: (Math.random() - 0.5) * 8,
      color: 'rgba(0, 0, 0, 0.7)'
    }));

    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full viewport size
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off viewport boundaries with perfect elasticity
        if (p.x <= p.size || p.x >= viewportWidth - p.size) {
          p.vx = -p.vx;
          p.x = p.x <= p.size ? p.size : viewportWidth - p.size;
        }
        
        if (p.y <= p.size || p.y >= viewportHeight - p.size) {
          p.vy = -p.vy;
          p.y = p.y <= p.size ? p.size : viewportHeight - p.size;
        }
        
        // Draw particle - perfect circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // Adjust particles that would be outside the new boundaries
      particlesRef.current.forEach(p => {
        if (p.x > newWidth - p.size) p.x = newWidth - p.size;
        if (p.y > newHeight - p.size) p.y = newHeight - p.size;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle show all projects
  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Get visible projects based on state
  const visibleProjects = showAllProjects ? userData.projects : userData.projects.slice(0, 4);

  return (
    <div className="container" ref={containerRef}>
      <canvas id="particle-canvas" className="particle-canvas"></canvas>

      <header>
        <div className="logo">{userData.name}</div>
        <nav>
          <ul>
            <li><Link to="/" className="active">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href={userData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={userData.contact.resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="subtitle">{userData.title}</div>
          <h1>
            <span className="dash">—</span> {userData.subtitle}
          </h1>
          <div className="contact-info">
            <p>{userData.contact.phone} | {userData.contact.email}</p>
          </div>
          
          {showScrollIndicator && (
            <div className="scroll-indicator">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          )}
        </section>

        <section id="projects" className="projects">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <div key={project.id} className={`project-card ${project.bgClass}`}>
                <div className="project-content">
                  <div className="project-label">{project.label}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-image">
                    <div className="phone-mockup phone-center">
                      <div className="phone-screen"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {userData.projects.length > 4 && (
            <div className="view-more-container">
              <button className="view-more-btn" onClick={toggleShowAllProjects}>
                {showAllProjects ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App; 