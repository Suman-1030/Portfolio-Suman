import React from 'react'

function Hero() {
  return (
    <div>
               {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Hi, I'm <span className="highlight">Suman Kagithala</span></h1>
              <h2 className="hero-subtitle">
                <span className="typing-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">Turning ideas into functional and scalable digital products 🚀</p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary"><i className="fas fa-briefcase"></i> View My Work</a>
                <a href="#contact" className="btn btn-secondary"><i className="fas fa-paper-plane"></i> Get In Touch</a>
              </div>
              <div className="hero-stats">
                <div className="stat"><span className="stat-number">5+</span><span className="stat-label">Projects</span></div>
                <div className="stat"><span className="stat-number">MERN</span><span className="stat-label">Specialist</span></div>
                <div className="stat"><span className="stat-number">AI</span><span className="stat-label">Enthusiast</span></div>
              </div>
            </div>
            <div className="hero-photo">
              <div className="photo-container">
                <div className="profile-frame">
                  <div className="profile-image"><i className="fas fa-code"></i></div>
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
    </div>
  )
}

export default Hero
