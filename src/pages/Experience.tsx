import { Link } from 'react-router-dom';
import '../App.css';
import { userData } from '../App';

function Experience() {
  return (
    <div className="container">
      <header>
        <div className="logo">{userData.name}</div>
        <nav>
          <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/experience" className="active">Experience</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href={userData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={userData.contact.resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="experience-page">
          <h2 className="section-title">Experience</h2>
          
          {userData.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{job.title}</h3>
                <div className="experience-company">{job.company}</div>
                <div className="experience-duration">{job.period} | {job.location}</div>
              </div>
              <ul className="experience-description">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-container">
              <div className="skill-group">
                <h4>Programming Languages</h4>
                <ul className="skill-list">
                  {userData.skills.languages.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="skill-group">
                <h4>Frameworks & Libraries</h4>
                <ul className="skill-list">
                  {userData.skills.frameworks.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="skill-group">
                <h4>Databases & Tools</h4>
                <ul className="skill-list">
                  {userData.skills.databases.concat(userData.skills.tools).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="skill-group">
                <h4>Other Skills</h4>
                <ul className="skill-list">
                  {userData.skills.other.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Experience; 