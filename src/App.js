import React, {useState} from 'react';
import './styles/App.css';
import './styles/Fonts.css';
import './styles/Loader.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Loader from './components/Loader.jsx';
import Experience from './components/Experience.jsx';

function App() {
  const [Loading, setLoading] = useState(true);
  
  setTimeout(()=>{
      setLoading(false);
    }, 2000
  );
  
  return (
    
    <div className={Loading ? 'App overflow-hidden' : 'App'}>
      <Loader Loading={Loading} />
      <Header />
      <Footer />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
      
    </div>
  );
}

export default App;
