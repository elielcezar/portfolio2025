'use client';

import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />

      <main>        
        
        <Skills />
        <Experience />        
        <Education />        
        <Portfolio />
        <Contact /> 
        <Footer />
        
      </main>      
    </>
  );
}
