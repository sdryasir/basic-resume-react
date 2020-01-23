import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/HomeComponent';
import About from './components/about/AboutComponent';
import Skills from './components/skills/SkillsComponent';
import Experience from './components/experience/ExperienceComponent';
import Projects from './components/projects/ProjectsComponent';
import Testimonials from './components/testimonial/TestimonialsComponent';
import Contact from './components/contact/ContactComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='main-nav'>
          <Router>
            <div className='container'>
              <ul className='nav'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/skills'>Skills</Link>
                </li>
                <li>
                  <Link to='/experience'>Experience</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li>
                  <Link to='/testimonials'>Testimonials</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/skills'>
                <Skills />
              </Route>
              <Route path='/experience'>
                <Experience />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/testimonials'>
                <Testimonials />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
