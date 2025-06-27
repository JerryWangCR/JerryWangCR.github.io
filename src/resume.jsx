import './main.css';
import resumeData from './resume.json';

function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>2025 University of Waterloo Computer Science graduate with 2+ years of hands-on experience
developing scalable full stack applications using MERN stack and RESTful API. Proven record of
optimizing efficiencies, workflow automation, and enhancing UI/UX through ReactJS, NodeJS, and
AWS. Excellent problem-solving abilities and a commitment to write clean, scalable code.</p>
        <a
          href="/Resume - Congrui Wang.pdf"
          download
          className="btn btn-primary mt-3"
          style={{ display: 'inline-block', padding: '10px 20px', borderRadius: '6px', backgroundColor: '#149ddd', color: '#fff', textDecoration: 'none' }}
        >
          📄 Download Resume
        </a>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{resumeData.summary.name}</h4>
              <p><em>{resumeData.summary.description}</em></p>
              <ul>
                {resumeData.summary.contact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.degree}</h4>
                <h5>{edu.years}</h5>
                <p><em>{edu.institution}</em></p>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeData.experience.map((job, index) => (
              <div className="resume-item" key={index}>
                <h4>{job.title}</h4>
                <h5>{job.duration}</h5>
                <p><em>{job.company}, {job.location}</em></p>
                <ul>
                  {job.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
