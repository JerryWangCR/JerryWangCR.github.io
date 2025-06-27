
import './main.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function HomePage() {
    const typedElement = useRef(null);

    useEffect(() => {
      const options = {
        strings: ['Software Engineer', 'Developer', 'Innovator', 'Problem-Solver'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
      };
  
      const typed = new Typed(typedElement.current, options);
  
      return () => {
        typed.destroy(); // Clean up on unmount
      };
    }, []);

    return(
        <section id="hero" className="hero section dark-background">

      <img src={"/homePage.JPG"} alt=""  className="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Congrui Wang</h2>
        <p>
          I'm{' '}
          <span ref={typedElement} className="typed"></span>
        </p>
      </div>
      </section>
    );
}

export default HomePage