// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';

// const App = () => {
//   return (
//     <>
//       <ThemeToggle />
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// Main App Component
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check user preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

// Navbar Component
function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span>SHIVANG's Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className={`theme-toggle ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-button-container">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`mobile-menu-button ${darkMode ? 'dark-mode' : 'light-mode'}`}
          >
            <svg 
              className="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className={`mobile-menu ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className="container">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button onClick={toggleTheme}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Component
function Hero({ darkMode }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="hero-name">SHIVANG GAUTAM</span>
          </h1>
          <h2>
            Full Stack Web Developer
          </h2>
          <p>
            I build beautiful, interactive experiences on the web with modern technologies.
          </p>
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className={`btn-secondary ${darkMode ? 'dark-mode' : 'light-mode'}`}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Component
function About({ darkMode }) {
  const skills = [
    'React',  'MongoDB', 'JavaScript','HTML/CSS', 
    'SQL', 'Node.js', 'Express', 'Git'
  ];

  return (
    <section id="about" className={`about ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-grid">
          <div>
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Web Developer with a strong foundation in Data Structures and Algorithms (DSA). Currently serving as the Promotions Head at the Office of International Affairs, I thrive on building connections and creating impact through technology and communication.
            </p>
            <p>
           I actively contribute to the tech community through platforms like FOSS United, where I advocate for open-source development. Beyond coding, I'm a curious tech enthusiast with deep interests in Artificial Intelligence, Cybersecurity, and a love for reading, sports, and participating in cultural events. My journey is driven by a constant desire to learn, build, and grow both personally and professionally.
            </p>
          </div>
          
          <div>
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-item ${darkMode ? 'dark-mode' : 'light-mode'}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Component
function Projects({ darkMode }) {
  const projects = [
    {
      title: "BestBuy",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "image3.png",
      github: "https://github.com/Shivang-6/BestBuy.git",
      demo: "#"
    },
    {
      title: "AI_Trip_planner",
      description: "An AI travel planner helps users create personalized travel itineraries by suggesting destinations, accommodations, activities, and routes based on their preferences and budget.",
      tech: ["React", "Express", "Groq SDK"],
      image: "image2.png",
      github: "https://github.com/Shivang-6/AI_Trip_planner.git",
      demo: "#"
    },
    {
      title: "CampusKart",
      description: "CampusKart is a student-focused platform that allows users to buy, sell, or rent campus-related products and services easily within their college community.",
      tech: ["React", "MongoDB", "Express"],
      image: "image.png",
      github: "https://github.com/kalviumcommunity/S85_SHIVANG_CAPSTONE_CAMPUSKART.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${darkMode ? 'dark-mode' : 'light-mode'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`tech-tag ${darkMode ? 'dark-mode' : 'light-mode'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-grid">
          <div>
            <p >
             I'm always open to discuss about new projects, sharing creative ideas, or teaming up on something exciting.
Feel free to reach out to me anytime through my social media — I'd love to hear from you!
            </p>
            <div className="contact-info">
  <div className="contact-item">
    <Mail size={20} />
    <a href="mailto:iamshivanggautam@gmail.com"
          target="_blank" 
      rel="noopener noreferrer">
        iamshivanggautam@gmail.com
        </a>
  </div>
  <div className="contact-item">
    <Github size={20} />
    <a 
      href="https://github.com/Shivang-6" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      github.com/Shivang-6
    </a>
  </div>
  <div className="contact-item">
    <Linkedin size={20} />
    <a 
      href="https://www.linkedin.com/in/shivanggautam/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      linkedin.com/in/shivanggautam
    </a>
  </div>
</div>

          </div>
          
          {/* <form onSubmit={handleSubmit} className={`contact-form ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`form-control ${darkMode ? 'dark-mode' : 'light-mode'}`}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`form-control ${darkMode ? 'dark-mode' : 'light-mode'}`}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`form-control ${darkMode ? 'dark-mode' : 'light-mode'}`}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">Shivang Gautam</div>
            <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          {/* <div className="social-links">
            <a href="" className="social-link">
              <Github size={20} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail size={20} />
            </a>
          </div> */}

          <div className="social-links">
  <a 
    href="https://github.com/Shivang-6" 
    className="social-link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github size={20} />
  </a>
  <a 
    href="https://www.linkedin.com/in/shivanggautam/" 
    className="social-link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Linkedin size={20} />
  </a>
  <a 
    href="mailto:iamshivanggautam@gmail.com" 
    className="social-link"
  >
    <Mail size={20} />
  </a>
</div>

        </div>
        
        <div className="footer-note">
          <p>Designed and built with❤️by Shivang!</p>
        </div>
      </div>
    </footer>
  );
}