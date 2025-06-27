
import './App.css';
import Header from './header';
import HomePage from './homePage';
import About from './about';
import Skills from './skills';
import Resume from './resume.jsx'
import Portfolio from './portfolio';
import Contact from './contact';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
      <div className="index-page">
        <Header />
        <main className="main">
          <HomePage />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </div>
    );
}

export default App;
