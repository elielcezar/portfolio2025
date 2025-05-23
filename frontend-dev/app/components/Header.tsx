'use client';
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export default function Header() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header id="home" className="bg-neutral-800 pt-20">
        <div className="w-full lg:max-w-[1100px] lg:mx-auto min-h-[350px] flex items-start align-center my-0 flex-col sm:flex-row  px-10 xl:px-0">
          <div className="w-full sm:w-1/3 relative flex justify-center">
            <Image src="/photo.jpg" className="sm:absolute border-12 border-white max-w-[350px] max-h-[450px] shadow-lg shadow-neutral-800/20" alt="Eliel Cezar" width={330} height={450} layout="responsive" />
          </div>
          <div className="w-full h-full sm:w-2/3 flex gap-[16px] flex-col justify-center align-center px-9 min-h-[350px] py-10 sm:py-0">
              <h1 className="text-amber-200 text-6xl font-bold font-semibold tracking-tight">Hello World!<span className="cursor-blink">_</span></h1>
              <h2 className="text-white text-2xl font-normal max-w-[80%]">My name is Eliel and I´m a Front End Developer from Brazil</h2>
              <p className="text-md text-neutral-400 sm:max-w-[85%] my-2">
                I spent the last 15 years creating websites for startups, digital agencies and a large variety of companies.
              </p>
              <div className="w-full flex gap-[16px] justify-start mb-2">
                <button className="flex items-center gap-2 justify-center text-white text-md w-full sm:w-3xl border-1 border-white max-w-[150px] p-2 hover:bg-amber-200 hover:border-amber-200 hover:text-neutral-800 transition-all duration-300 hover:cursor-pointer">
                  <FaLinkedin size={20} />
                  Linkedin
                </button>
                <button className="flex items-center gap-2 justify-center text-white text-md w-full sm:w-3xl border-1 border-white max-w-[150px] p-2 hover:bg-amber-200 hover:border-amber-200 hover:text-neutral-800 transition-all duration-300 hover:cursor-pointer">
                  <IoDocumentAttachOutline size={20} />
                  Resume
                </button>                
              </div>                
          </div>
        </div> 
        <div className="flex gap-[16px] bg-white my-0 border-b-1 border-neutral-300">
          <div className="w-full flex-col sm:flex-row sm:max-w-[1100px] sm:mx-auto flex items-center justify-between">
            <div className="w-1/3 hidden sm:block">
              
            </div>
            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-0">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-2 justify-center text-neutral-800 text-md py-5 px-12 w-full sm:w-3xl hover:cursor-pointer hover:bg-amber-200 transition-all duration-300 group"
              >
                <BsBriefcase size={24} className="text-amber-300 mb-1 group-hover:text-neutral-800 transition-all duration-300" />
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="flex items-center gap-2 justify-center text-neutral-800 text-md py-5 px-12 w-full sm:w-3xl hover:cursor-pointer hover:bg-amber-200 transition-all duration-300 group"
              >
                <IoDocumentsOutline size={24} className="text-amber-300 mb-1 group-hover:text-neutral-800 transition-all duration-300" />
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 justify-center text-neutral-800 text-md py-5 px-12 w-full sm:w-3xl hover:cursor-pointer hover:bg-amber-200 transition-all duration-300 group"
              >
                <HiOutlineMail size={24} className="text-amber-300 mb-1 group-hover:text-neutral-800 transition-all duration-300"/>
                Contact
              </button>
            </div>
          </div>
        </div>        
      </header>   
    </>
  )
}
