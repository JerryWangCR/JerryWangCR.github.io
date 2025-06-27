import './main.css';
import './portfolio.css'
function Portfolio() {
    const projects = [
        {
          "title": "Washare App",
          "description": "Android app for Petro Canada car wash sharing using Kotlin, Firebase, and Google Maps API.",
          "tech": ["Kotlin", "Firebase", "Jetpack Compose", "Junit", "Android Studio"],
          "image": "/washare.png",
          "link": "https://github.com/JerryWangCR/Washare"
        },
        {
          "title": "Biquadris",
          "description": "A two-player Tetris-inspired game built with C++, featuring competitive gameplay, customizable levels, and special modifications to enhance strategy and challenge.",
          "tech": ["C++", "Bash", "Vim", "UML diagram", "OOP"],
          "image": "/Biquadris.png",
          "link": "https://github.com/JerryWangCR/Biquadris-more-like-tetris"
        },
        {
          "title": "Song Sleuth",
          "description": "A music guessing game that plays song clips using the Spotify API. Players guess the correct track to test their music knowledge.",
          "tech": ["Typescript", "Expo", "Spotify API", "React Native"],
          "image": "/song_sleuth.png",
          "link": "https://github.com/JerryWangCR/Song-Sleuth"
        },
        {
            "title": "Covid Website and Data Scrapper",
            "description": "A web app that scrapes Covid-19 stats using Scrapy and displays them via a ReactJS frontend, with data stored in MongoDB.",
            "tech": ["Python", "MongoDB", "Scrapy", "SQL"],
            "image": "/Web Crawler.jpeg",
            "link": "https://github.com/JerryWangCR/Covid-19-Scraper"
        }
        
      ]
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Selected projects that highlight my skills in full-stack and mobile development.</p>
      </div>

      <div className="container">
        <div className="scroll-container">
          {projects.map((project, index) => (
            <div className="card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={project.image} alt={project.title} className="card-img" />
              <div className="card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-tags">
  {project.tech.map((tag, i) => (
    <span className="tech-tag" key={i}>{tag}</span>
  ))}
</div>
<div className="card-btn-wrapper">
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-btn">
    View Project →
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
