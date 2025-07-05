import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from './assets/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMapMarkerAlt, faEnvelope, faPhoneAlt, faEye, faCode, faLaptopCode, faRocket, faTools, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ensure form doesn’t submit automatically
    console.log('Form submitted with:', formData); // Debug log
    setError(false); // Reset error state on new submission

    if (!formData.name || !formData.email || !formData.message) {
      console.log('Missing required fields');
      setError(true);
      return;
    }

    const submissionTime = new Date().toISOString(); // Add current timestamp
    const dataWithTime = { ...formData, submissionTime };

    try {
      const response = await fetch('https://portbackend-phi.vercel.appsend-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataWithTime),
      });

      console.log('Response status:', response.status); 
      if (response.ok) {
        const result = await response.text();
        console.log('Response text:', result); 
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit message');
      }
    } catch (error) {
      console.log('Fetch error:', error); // Debug log
      setError(true);
    }

    setTimeout(() => {
      setShowSuccessModal(false);
      setError(false); // Clear error after timeout
    }, 3000);
  };

  return (
    <div className="App">
      <header id="header">
        <div className="container header-container">
          <a href="#" className="logo">
            <img src={me} alt="George" width={40} height={40} style={{ borderRadius: '50%' }} />
            <span className="logo-text">George<span>.</span></span>
          </a>
          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </header>

      <section id="home">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h2>I'm George Benedict, <br/> a dedicated Full Stack Developer turning your web vision.</h2>
            <p>Specializing in crafting high-quality, responsive web solutions tailored to your needs.</p>
            <a href="#contact" className="btn">Hire Me</a>
            <div className="social-icons">
              <a href="https://github.com/georbene/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/george-benedict-71647a367/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          <div className="about-content">
            <div className="about-img" data-aos="fade-right">
              <img src={me} alt="George" width={200} height={200} style={{ borderRadius: '50%' }} />
            </div>
            <div className="about-text" data-aos="fade-left">
              <h3>I'm Nnamdi George Benedict</h3>
              <p>Experienced Full Stack Developer with expertise in both frontend and backend technologies. I create comprehensive web solutions that are performant, scalable, and user-friendly.</p>
              <p>As a passionate Full Stack Developer with a proven track record of building dynamic, user-focused web solutions. With deep expertise spanning frontend and backend technologies, I craft responsive applications that are both scalable and intuitive. My journey has taken me through diverse projects, from e-commerce platforms to productivity tools, where I've honed skills in React, Node.js, MongoDB, with all other frameworks and libraries .What drives me is the opportunity to turn ideas into reality, blending creativity with technical precision. Whether it's optimizing performance, enhancing user experiences, or providing ongoing support, I'm committed to delivering excellence. Based in Lagos, Nigeria, I thrive on collaboration and am excited to bring your vision to life with tailored, high-quality web development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">My Skills</h2>
          <div className="skills-container" data-aos="fade-up">
            <div className="skills-category">
              <h4><FontAwesomeIcon icon={faBars} /> Frontend Technologies</h4>
              <div className="skill-item">
                <div className="skill-name">HTML</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.1s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">CSS</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.2s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">JavaScript</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.3s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">React</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.4s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Angular</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.5s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Vue.js</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.6s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Next.js</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.7s' }}></div></div>
              </div>
            </div>
            <div className="skills-category">
              <h4><FontAwesomeIcon icon={faBars} /> Backend Technologies</h4>
              <div className="skill-item">
                <div className="skill-name">Node.js + Express</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.1s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">PHP</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.2s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Laravel</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.3s' }}></div></div>
              </div>
            </div>
            <div className="skills-category">
              <h4><FontAwesomeIcon icon={faBars} /> Database Technologies</h4>
              <div className="skill-item">
                <div className="skill-name">MongoDB</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.1s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">MySQL</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.2s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Oracle</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.3s' }}></div></div>
              </div>
            </div>
            <div className="skills-category">
              <h4><FontAwesomeIcon icon={faBars} /> Other Skills</h4>
              <div className="skill-item">
                <div className="skill-name">GraphQL</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.1s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Git</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.2s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Hosting & Deployment</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.3s' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Data Structures</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: '100%', transitionDelay: '0.4s' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">My Projects</h2>
          <div className="projects-container" data-aos="fade-up">
            <div className="project-card">
              <img src="https://plus.unsplash.com/premium_photo-1684785617522-e2be3c1f3b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="Task Manager App" className="project-image" />
              <h3>E-Commerce Platform</h3>
              <p>This is my first e-commerce solution built with HTML, CSS and JavaScript </p>
              <h2 className='red'>Yet to be completed</h2>
              <div className="project-links">
                <a href="https://ecommerce-level2.vercel.app/" target="_blank" className="project-link"><FontAwesomeIcon icon={faEye} /> Demo</a>
                <a href="https://github.com/Georbene/EcommerceLevel2" target="_blank" className="project-link"><FontAwesomeIcon icon={faCode} /> GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1514632595-4944383f2737?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-Commerce Platform" className="project-image" />
              <h3>Weather App</h3>
              <p>A simple tool developed with HTML, CSS and JAVASCRIPT to check the weather, api from openweathermap</p>
              <div className="project-links">
                <a href="https://weather-app-three-fawn.vercel.app/" target="_blank" className="project-link"><FontAwesomeIcon icon={faEye} /> Demo</a>
                <a href="https://github.com/Georbene/weatherApp" target="_blank" className="project-link"><FontAwesomeIcon icon={faCode} /> GitHub</a>
              </div>
            </div>
      
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1591618021247-0dd196431726?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Personal Blog" className="project-image" />
              <h3>Olympics Form Reg</h3>
              <p>A simple sport registration system</p>
              <div className="project-links">
                <a href="https://olympicform.vercel.app/" target="_blank" className="project-link"><FontAwesomeIcon icon={faEye} /> Demo</a>
                <a href="https://github.com/Georbene/olympicform" target="_blank" className="project-link"><FontAwesomeIcon icon={faCode} /> GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1681825984459-47ee999da245?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Personal Blog" className="project-image" />
              <h3>Simple Online Banking</h3>
              <p>A simple Fullstack Online Banking Web-App built with React, Bootsrap, Node JS + Express, MongoDB</p>
              <p>User authentication with JWT Tokens, Transfer Money, Online Unique Credit-Card for each user, and transaction history</p>
              <div className="project-links">
                <a href="https://bank-frontend-eta.vercel.app/" target="_blank" className="project-link"><FontAwesomeIcon icon={faEye} /> Demo</a>
                <a href="https://github.com/Georbene/bankFrontend" target="_blank" className="project-link"><FontAwesomeIcon icon={faCode} /> GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src="https://plus.unsplash.com/premium_photo-1718879381673-32a65784d27c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Personal Blog" className="project-image" />
              <h3>Ludo Game Design</h3>
              <p>A Simple Ludo Design with HTML and CSS</p>
              <div className="project-links">
                <a href="https://ludo-game-ruddy.vercel.app/" target="_blank" className="project-link"><FontAwesomeIcon icon={faEye} /> Demo</a>
                <a href="https://github.com/Georbene/ludo_game/" target="_blank" className="project-link"><FontAwesomeIcon icon={faCode} /> GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">My Services</h2>
          <div className="services-container" data-aos="fade-up">
            <div className="service-card">
              <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
              <h4>Web Development</h4>
              <p>Building responsive and scalable web applications using modern frameworks and technologies.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faRocket} className="service-icon" />
              <h4>Web Optimization</h4>
              <p>Enhancing website performance, SEO, and user experience for maximum impact.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faTools} className="service-icon" />
              <h4>Web Maintenance</h4>
              <p>Providing ongoing support, updates, and security for web projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
          <div className="contact-container">
            <div className="contact-info" data-aos="fade-right">
              <h3>Get in Touch</h3>
              <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels or fill out the contact form.</p>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a className="emal" href="mailto:geobene13@gmail.com">geobene13@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>08133710863</p>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <div className="contact-form" data-aos="fade-left">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                  </form>
                  {showSuccessModal && (
                    <div className="success-modal">
                      <div className="modal-content">
                        <FontAwesomeIcon icon={faCheckCircle} className="modal-icon" />
                        <p>Message received! Thank you for your submission.</p>
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="error-message">
                      <p>Error submitting message. Please try again.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer data-aos="fade-up">
        <div className="container">
          <p className="footer-text">© {new Date().getFullYear()} Nnamdi George Benedict. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;