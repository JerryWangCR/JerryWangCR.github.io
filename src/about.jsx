import './main.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Passionate software engineer with a strong foundation in full-stack and mobile development. I enjoy building scalable systems, clean UIs, and impactful user experiences.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            {/* Optionally insert a profile image here */}
            {/* <img src="/my-profile-img.jpg" className="img-fluid" alt="Profile" /> */}
            <img src={'/aboutPage.jpg'} alt={"Profile"} className="img-fluid" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineer & Web Developer</h2>
            <p className="fst-italic py-3">
              I combine technical depth with product thinking to solve real-world problems — from automating workflows to scaling APIs and crafting polished mobile apps.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 December 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>jerrywangcr.github.io</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(365) 996–5261</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Oakville, Canada</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jerry.cr.w@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Open to Opportunities</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
            I've interned across startups and mid-sized companies, working on scalable React/Node applications, API integrations, and mobile apps with React Native and Kotlin.  
  I'm passionate about building impactful software and continuously improving my craft.  
  Recently, I've been actively learning modern AI tools and frameworks to stay ahead in building intelligent and data-driven applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
