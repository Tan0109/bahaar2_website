import React from 'react';
import './App.css';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Testimonial from './components/Testimonial';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
//import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
//import { Router } from 'express';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
      <Hero />0
      <Navbar />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <Contact />
     <Footer />
    </div>
    
    
    {/* <Router>
      <Routes>
    
       <Route exact path="/navbar" component={Navbar}></Route>
       <Route exact path="/hero" component={Hero}></Route>
       <Route exact path="/footer" component={Footer}></Route>
       <Route exact path="/testimonial" component={Testimonial}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/pricing" component={Pricing}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
