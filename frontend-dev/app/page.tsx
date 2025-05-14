'use client';

import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        
        <About />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Contact /> 
        <Footer />
        
      </main>      
    </>
  );
}
