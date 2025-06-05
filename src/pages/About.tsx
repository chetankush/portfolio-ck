import { Link } from 'react-router-dom';
import '../App.css';
import { userData } from '../App';

function About() {
  return (
    <div className="container">
      <header>
        <div className="logo">{userData.name}</div>
        <nav>
          <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><a href={userData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={userData.contact.resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-page">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <span>CK</span>
              </div>
            </div>
            
            <div className="about-text">
              <p>I'm a passionate Software Engineer with expertise in Full Stack Development. I specialize in building modern, responsive web applications using the MERN stack and other cutting-edge technologies.</p>
              
              <p>With experience at Wipiway LLC and DesiQnA, I've developed a range of applications from e-commerce platforms to AI-integrated solutions. I'm constantly learning and adapting to new technologies to deliver exceptional digital experiences.</p>
              
              <p>Based in {userData.contact.location}, I'm available for remote work opportunities globally. I enjoy tackling complex problems and turning ideas into functional, user-friendly applications.</p>
              
              <div className="contact-details">
                <h3>Contact Information</h3>
                <ul>
                  <li>📱 Phone: {userData.contact.phone}</li>
                  <li>📧 Email: {userData.contact.email}</li>
                  <li>📍 Location: {userData.contact.location}</li>
                  <li>🔗 LinkedIn: <a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/chetan-kushwah</a></li>
                  <li>🐙 GitHub: <a href={userData.contact.github} target="_blank" rel="noopener noreferrer">github.com/chetankush</a></li>
                </ul>
              </div>
              
              <div className="education">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>{userData.education.degree}</h4>
                  <p>{userData.education.university}</p>
                  <p>{userData.education.period} | {userData.education.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About; 