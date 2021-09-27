import React, {useState} from 'react';
import './styles/App.css';
import './styles/Fonts.css';
import './styles/Loader.css';
import Header from './components/Header.jsx';
import Links from './components/Links.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Loader from './components/Loader.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

// import Contact from './components/Contact.jsx';

const App = () => {
  const [Loading, setLoading] = useState(true);
  
  setTimeout(()=>{
      setLoading(false);
    }, 2000
  );
  
  return (
    
    <div className={Loading ? 'App overflow-hidden' : 'App'}>
      
      <Loader Loading={Loading} />
      <Header />
      <Links />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      {/* <Contact />  */}
      <Footer />
      
    </div>
  );
}

export default App;
