import './main.css';
function Skills() {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technologies and tools I’ve used across full-stack, mobile, and cloud projects.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">JavaScript / TypeScript <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React / React Native <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node.js / Express <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Python <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">AWS / Firebase <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">PostgreSQL / MongoDB <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Docker / CI-CD (Bitrise, CircleCI) <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Jest / Testing Libraries <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
