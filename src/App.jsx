import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const roles = ['MERN Specialist', 'AI Enthusiast', 'Full-Stack Developer', 'Problem Solver'];
  const projects = [
    { id: 1, title: "AI Image Generator" ,image:'Screenshot 2025-10-01 155816.png', description: "AI-powered image generation web app with advanced features", tech: ["React", "Node.js","Express,js","MongoDB", "AI APIs", "Tailwind"], category: "ai", github: "https://github.com/Suman-1030/Doctor_Ai_Frontend", live: "https://frontend-service-hmv6utam4q-el.a.run.app/" },
    { id: 2, title: "Food Order Website",image:'Screenshot 2025-10-01 160135.png', description: "Multi-vendor food ordering platform with real payment integration", tech: ["MERN","Node.js","Express,js","MongoDB", "Payment Gateway", "Multi-vendor","Real-Time Cart"], category: "fullstack", github: "https://github.com/Suman-1030/Frontend_UI_Foodhub", live: "https://frontend-ui-foodhub.vercel.app/" },
    { id: 3, title: "AI Doctor App",image:'Screenshot 2025-10-01 160050.png', description: "Doctor GPT built with MERN + RAG using trusted medical sources", tech: ["React.js","Node.js","Express,js","MongoDB", "RAG", "AI", "Medlineplus XML Doc"], category: "ai", github: "https://github.com/Suman-1030/Doctor_Ai_Backend", live: "https://med-frontend-service-hmv6utam4q-em.a.run.app" },
    { id: 4, title: "Vendor Dashboard",image:'Screenshot 2025-10-01 161050.png' ,description: "Full-stack product management system with analytics", tech: ["React","Node.js","Express,js", "MongoDB" ], category: "fullstack", github: "https://github.com/Suman-1030/React_Foodhub_Backend_Dashboard", live: "https://react-foodhub-dashboard.vercel.app/" },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  useEffect(() => {
    const current = roles[currentTextIndex];
    let timer;

    if (!isDeleting && displayText === current) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(isDeleting 
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, roles]);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo"><span>Suman</span>Kagithala</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

    {/* Hero Section */}
<section className="hero" id="home">
  <div className="hero-container">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Suman Kagithala</span>
        </h1>
        <h2 className="hero-subtitle">
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          Turning ideas into functional and scalable digital products 🚀
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-briefcase"></i> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-paper-plane"></i> Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">MERN</span>
            <span className="stat-label">Specialist</span>
          </div>
          <div className="stat">
            <span className="stat-number">AI</span>
            <span className="stat-label">Enthusiast</span>
          </div>
        </div>
      </div>

      {/* Replace code icon with your image */}
      <div className="hero-photo">
        <div className="photo-container">
          <div className="profile-frame">
            <div className="profile-image">
              <img 
                src="Profile photo copy.jpg"   // <-- Put your image path here
                alt="Suman Kagithala"
                className="profile-pic"
              />
            </div>

            <div className="tech-badges">
              <div className="badge react-badge"><i className="fab fa-react"></i></div>
              <div className="badge node-badge"><i className="fab fa-node-js"></i></div>
              <div className="badge ai-badge"><i className="fas fa-brain"></i></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

     
      {/* About Section */}
<section className="about" id="about">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm <strong>Suman Kagithala</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in the <strong>MERN stack</strong>, with a growing interest in <strong>AI integration</strong>. I enjoy building intuitive, scalable web applications that solve real-world problems and deliver seamless user experiences.
        </p>
        <p>
          Currently, I’m interning at <strong>Kalakaar Platform</strong>, where I contribute to developing and improving full-stack web solutions while learning to work in a professional, collaborative environment. This internship has strengthened my understanding of backend optimization, responsive UI design, and deployment strategies.
        </p>
        <p>
          Beyond my internship, I love experimenting with projects that combine web development and artificial intelligence — including <strong>AI-powered assistants</strong> and <strong>RAG-based applications</strong>.
        </p>

        <div className="about-highlights">
          <div className="highlight-item">
            <i className="fas fa-rocket"></i>
            <span>Building scalable full-stack applications</span>
          </div>
          <div className="highlight-item">
            <i className="fas fa-robot"></i>
            <span>Integrating AI into real-world projects</span>
          </div>
          <div className="highlight-item">
            <i className="fas fa-cloud"></i>
            <span>Exploring cloud deployment with Docker & GCP</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    

       {/* Skills Section */}
<section className="skills" id="skills">
  <div className="container">
    <h2 className="section-title">Skills & Technologies</h2>
    <p className="section-subtitle">Technologies I use to build amazing digital experiences</p>

    <div className="skills-grid">
      {/* Frontend Skills */}
      <div className="skill-category">
        <h3>Frontend Development</h3>
        <div className="skills-list">
          {[
            { name: "HTML5", img: "html.svg" },
            { name: "CSS3", img: "css.svg" },
            { name: "JavaScript", img: "javascript.svg" },
            { name: "React.js", img: "react js.png" },
            { name: "Redux", img: "redux.svg" },
            { name: "Tailwind CSS", img: "tailwind-css.svg" }
          ].map((skill, idx) => (
            <div className="skill-item" key={idx}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className="skill-category">
        <h3>Backend & Database</h3>
        <div className="skills-list">
          {[
            { name: "Node.js", img: "nodejs.svg" },
            { name: "Express.js", img: "express.svg" },
            { name: "MongoDB", img: "mongodb.svg" },
            { name: "Redis", img: "redis.svg" },
            { name: "GCP", img: "cloud.svg" },
            { name: "REST APIs", img: "api.png" }
          ].map((skill, idx) => (
            <div className="skill-item" key={idx}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Others */}
      <div className="skill-category">
        <h3>Tools & Others</h3>
        <div className="skills-list">
          {[
            { name: "Git/GitHub", img: "github.svg" },
            { name: "Docker", img: "docker.svg" },
            { name: "Vite", img: "Screenshot 2025-10-01 153317.png" },
            {name:"Ppstman", img:"postman.svg"},
            { name: "AI Integration", img: "ai.png" }
          ].map((skill, idx) => (
            <div className="skill-item" key={idx}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    

    {/* Projects Section */}
<section className="projects" id="projects">
  <div className="container">
    <h2 className="section-title">My Projects</h2>
    <p className="section-subtitle">Some of the projects I’ve worked on recently</p>

    <div className="projects-grid">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="project-image">
            <img src={project.image || "/images/project-placeholder.png"} alt={project.title} />
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span className="tech-badge" key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Contact Section */}
<section className="contact" id="contact">
  <div className="container">
    <h2 className="section-title">Get In Touch</h2>
    <p className="section-subtitle">
      Have a project idea, collaboration in mind, or just want to say hello? 
      Feel free to reach out — I’d love to connect!
    </p>

    <div className="contact-details">
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <a href="kagithalasuman1030@gmail.com">kagithalasuman1030@gmail.com</a>
      </div>

      <div className="contact-item">
        <i className="fab fa-github"></i>
        <a href="https://github.com/Suman-1030" target="_blank" rel="noopener noreferrer">
        https://github.com/Suman-1030
        </a>
      </div>

      <div className="contact-item">
        <i className="fab fa-linkedin"></i>
        <a href="www.linkedin.com/in/kagithala-suman-79a5932a6" target="_blank" rel="noopener noreferrer">
        www.linkedin.com/in/kagithala-suman-79a5932a6
        </a>
      </div>

      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <a href="tel:+917816081822">+91 78160 81822</a>
      </div>
    </div>
  </div>
</section>
  



     
      {/* Footer */}
      {/* Your footer code here */}
    </div>
  );
};

export default App;
