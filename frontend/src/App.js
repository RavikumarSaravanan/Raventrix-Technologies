import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Phone, Mail, Clock, MapPin, CheckCircle, Star, Zap, Shield, MessageCircle, Edit, Truck } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', honeypot: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('M4aomS8oTZri_2X50');
    
    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919629071640?text=Hi%20Ravikumar,%20I%20need%20a%20website', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:ravikumarsaravanan71640@gmail.com';
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setFormStatus({ loading: true, success: false, error: false });
    
    try {
      await emailjs.send(
        'service_xdezyza',
        'template_rz8x3kc',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );
      
      setFormStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: true });
      // Fallback to mailto
      setTimeout(() => {
        window.location.href = `mailto:ravikumarsaravanan71640@gmail.com?subject=Website Inquiry from ${formData.name}&body=${formData.message}`;
      }, 2000);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Star Boat Works',
      category: 'Business Website',
      description: 'A professional showcase for a local boat manufacturing business with service details and contact forms.',
      features: ['Responsive Design', 'Image Gallery', 'Contact Forms', 'Mobile Optimized']
    },
    {
      id: 2,
      title: 'Bright Minds Tuition',
      category: 'Educational Site',
      description: 'Clean and modern website for a tuition center with course listings and enrollment features.',
      features: ['Course Catalog', 'Registration Forms', 'Teacher Profiles', 'Fast Loading']
    },
    {
      id: 3,
      title: 'Mini E-Commerce',
      category: 'Online Store',
      description: 'Simple e-commerce solution for local businesses with product listings and inquiry system.',
      features: ['Product Showcase', 'WhatsApp Orders', 'Image Optimization', 'Easy Updates']
    }
  ];

  return (
    <div className="App">
      {/* Doodle Background */}
      <div className="doodle-background"></div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">R</div>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('work')}>Work</a>
            <a onClick={() => scrollToSection('why')}>Why</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              
              <h1>Clean, fast & affordable websites for local businesses</h1>
              <p>Hi, I'm Ravi Kumar— a full-stack web developer based in Tharangambadi. I build modern, mobile-friendly websites that help local businesses grow online.</p>
              
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={handleWhatsApp}>
                  <MessageCircle size={20} />
                  WhatsApp Me
                </button>
                <button className="btn btn-outline" onClick={() => scrollToSection('work')}>
                  See Demo Projects
                </button>
              </div>

              <div className="hero-badges">
                <div className="badge">
                  <Truck size={20} />
                  <span>Fast Delivery</span>
                </div>
                <div className="badge">
                  <CheckCircle size={20} />
                  <span>Local Pricing</span>
                </div>
                <div className="badge">
                  <Shield size={20} />
                  <span>Local Support</span>
                </div>
                {/* <div className="badge">
                  <Clock size={20} />
                  <span>24hrs Delivery</span>
                </div> */}
              </div>
            </div>
            
            <div className="hero-right">
              <div className="mockup-card">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-bar"></div>
                  <div className="mockup-bar short"></div>
                  <div className="mockup-bar medium"></div>
                  <div className="mockup-grid">
                    <div className="mockup-box"></div>
                    <div className="mockup-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-left">
              <p className="about-text">
                I specialize in creating affordable, professional websites for local businesses in Tamil Nadu. 
                Whether you need a simple business card site, an online menu, or a small shop — I've got you covered.
              </p>
              
              <div className="info-grid">
                <div className="info-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Serving</strong>
                    <p>Tharangambadi & nearby regions</p>
                  </div>
                </div>
                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <strong>Available</strong>
                    <p>7 PM – 9 PM daily</p>
                  </div>
                </div>
              </div>

              <h3>My Process</h3>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div>
                    <strong>Discuss Your Needs</strong>
                    <p>We chat on WhatsApp about what you want</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div>
                    <strong>See a Demo</strong>
                    <p>I show you a working preview before payment</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div>
                    <strong>Launch & Support</strong>
                    <p>Your site goes live with ongoing help</p>
                  </div>
                </div>
              </div>

              <div className="about-buttons">
                <button className="btn btn-primary" onClick={handleWhatsApp}>
                  <MessageCircle size={20} />
                  WhatsApp: +91 9629071640
                </button>
                <button className="btn btn-outline" onClick={handleEmail}>
                  <Mail size={20} />
                  Email Me
                </button>
              </div>
            </div>
            
            <div className="about-right">
              <div className="profile-card">
                <div className="profile-avatar">R</div>
                <h3>Ravi Kumar</h3>
                <p className="profile-title">Full-Stack Web Developer</p>
                <p className="profile-location">Tharangambadi, Tamil Nadu</p>
                <div className="profile-stats">
                  <div className="stat">
                    <strong>1+</strong>
                    <span>Years Experience</span>
                  </div>
                  <div className="stat">
                    <strong>10+</strong>
                    <span>Projects Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Services I Offer</h2>
          <p className="section-subtitle">Affordable web solutions tailored for local businesses</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Zap size={32} />
              </div>
              <h3>Business Websites</h3>
              <p>Professional sites that showcase your business, services, and contact details</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Menu size={32} />
              </div>
              <h3>Online Menu Cards</h3>
              <p>Digital menus for restaurants with images, prices, and easy updates</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Star size={32} />
              </div>
              <h3>Mini E-Commerce</h3>
              <p>Simple online stores with product catalogs and WhatsApp ordering</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Phone size={32} />
              </div>
              <h3>Landing Pages</h3>
              <p>Single-page sites perfect for promotions and lead generation</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Shield size={32} />
              </div>
              <h3>Portfolio Sites</h3>
              <p>Personal portfolios to showcase your work and skills professionally</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <MapPin size={32} />
              </div>
              <h3>Google Business Setup</h3>
              <p>Get your business listed and optimized on Google Maps and Search</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="container">
          <h2>Recent Demo Projects</h2>
          <p className="section-subtitle">Examples of websites I've built for local businesses</p>
          
          <div className="work-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-thumbnail">
                  <img src={`/assets/img/project-${project.id}.svg`} alt={project.title} />
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 80)}...</p>
                  <button className="btn btn-text" onClick={() => setSelectedProject(project)}>
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why" className="why">
        <div className="container">
          <h2>Why Choose Me</h2>
          <p className="section-subtitle">What makes working with me different</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <CheckCircle size={28} />
              <h3>Affordable Local Pricing</h3>
              <p>Fair prices designed for small businesses in our region</p>
            </div>
            
            <div className="benefit-card">
              <Phone size={28} />
              <h3>Mobile-First & Fast</h3>
              <p>All sites load quickly and look great on phones</p>
            </div>
            
            <div className="benefit-card">
              <Star size={28} />
              <h3>Free Demo Before Payment</h3>
              <p>See your site working before you commit</p>
            </div>
            
            <div className="benefit-card">
              <Truck size={28} />
              <h3>Fast Turnaround</h3>
              <p>Most projects completed within 5-7 days</p>
            </div>
            
            <div className="benefit-card">
              <MessageCircle size={28} />
              <h3>WhatsApp Support</h3>
              <p>Easy communication in your preferred language</p>
            </div>
            
            <div className="benefit-card">
              <Edit size={28} />
              <h3>Easy Edits</h3>
              <p>Quick updates whenever you need changes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your project</p>
          
          <div className="contact-content">
            <div className="contact-left">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through WhatsApp or email. I typically respond within a few hours.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <MessageCircle size={24} />
                  <div>
                    <strong>WhatsApp</strong>
                    <p>+91 9629071640</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <strong>Email</strong>
                    <p>ravikumarsaravanan71640@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <MapPin size={24} />
                  <div>
                    <strong>Location</strong>
                    <p>Tharangambadi, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <Clock size={24} />
                  <div>
                    <strong>Available</strong>
                    <p>7 PM – 9 PM daily</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-buttons">
                <button className="btn btn-primary" onClick={handleWhatsApp}>
                  <MessageCircle size={20} />
                  Message on WhatsApp
                </button>
                <button className="btn btn-outline" onClick={handleEmail}>
                  <Mail size={20} />
                  Send Email
                </button>
              </div>
            </div>
            
            <div className="contact-right">
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleFormChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                <button type="submit" className="btn btn-primary" disabled={formStatus.loading}>
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus.success && (
                  <div className="form-message success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="form-message error">
                    ⚠ Failed to send. Opening email client...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© <span id="current-year"></span> Ravi Kumar— Full-Stack Web Developer</p>
          <p className="footer-tech">Tharangambadi</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <span className="project-category">{selectedProject.category}</span>
              
              <div className="modal-thumbnail">
                <img src={`/assets/img/project-${selectedProject.id}.svg`} alt={selectedProject.title} />
              </div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <h3>Key Features</h3>
              <ul className="feature-list">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-primary" onClick={handleWhatsApp}>
                <MessageCircle size={20} />
                Interested? Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
