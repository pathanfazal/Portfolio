import "./about.css";
import Resume from "../../assets/Resume.pdf";

const About = () => {


  return (
    <div id="about" className="main__container">      
      <h1 className="section-header">
        About Me
      </h1>

      <div className='content'>
        <p>
      I am Fazal Pathan, an ambitious individual eager to acquire a position 
      where I can fully utilize my skills and abilities. My primary goal is to 
      experience personal and professional growth while working alongside experienced 
      senior professionals and enthusiastic colleagues within the organization. I believe 
      that such an opportunity will provide me with valuable insights, mentorship, and a 
      platform to excel and contribute effectively to the team.
      </p>
      <p>
      As an aspiring individual passionate about technology and innovation, I have actively 
      engaged in various events and competitions, leaving a mark in the world of Artificial Intelligence, 
      Data Science, Robotics, and Automation. Volunteering at CELESTRA 2K23, organized by the esteemed 
      Phoenix Club of AI & Data Science at K.K.W.I.E.E.R, was a remarkable experience where I contributed to the event's grand success.
      </p>
      <p>
      Participating in the Code-A-Thon hosted by SARA Departmental Club of Robotics and Automation. I embraced 
      challenges, pushing my boundaries in the competitive arena, which ultimately 
      led to personal growth and learning.
      </p>
      <p>
      Moreover, at EQUINOX 2K23, an event organized by Debugger's Club KKWIEER, I showcased my skills during the intense Project Wars, 
      gaining valuable experience and building a strong network with fellow tech enthusiasts.
      </p>

      <div className="btnn">
        <a href={Resume} download className="btn primary">Download Resume</a>
      </div>
      </div>
    </div>
  );
};

export default About;
