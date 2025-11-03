import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Certificates />
      {/* <Contact />  // <-- Removed, as details now in footer */}
      <footer className="footer">
        <div className="container">
          <p>Ankit Pandey @Jain University</p>
          <p>Email: ankitpandeyiit2004@email.com &nbsp; | &nbsp; Phone No: +91-8851700115</p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/ankitpandeyb2" target="_blank" rel="noopener noreferrer">linkedin.com/in/ankitpandeyb2</a>
            &nbsp; | &nbsp;
            GitHub: <a href="https://github.com/ankitpandeyb2" target="_blank" rel="noopener noreferrer">github.com/ankitpandeyb2</a>
          </p>
          <p className="footer-subtext">Designed with 💜 for excellence</p>
        </div>
      </footer>
    </div>
  )
}

export default App
