import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { GoFileCode } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }        
    };

    // Função para verificar qual seção está visível
    const handleScroll = () => {
        const sections = ['home', 'experience', 'skills', 'education', 'portfolio', 'contact'];
        
        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-[15vh] left-[0] xl:left-[1vw] 2xl:left-[4vw] right-0 z-50 bg-amber-300 max-w-13 shadow-xl shadow-neutral-800/20">
            <ul>
                <li>
                    <a 
                    href="#home"
                    onClick={(e) => scrollToSection(e, 'home')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'home' ? 'bg-white' : ''}`}
                    >
                        <IoHomeOutline size={26} />
                        <span className="hidden">Home</span>
                    </a>
                </li>
                <li>
                    <a 
                    href="#experience"
                    onClick={(e) => scrollToSection(e, 'experience')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'experience' ? 'bg-white' : ''}`}
                    >
                        <FaListCheck size={26} />
                        <span className="hidden">Experience</span>
                    </a>
                </li>
                <li>
                    <a 
                    href="#skills"
                    onClick={(e) => scrollToSection(e, 'skills')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'skills' ? 'bg-white' : ''}`}
                    >
                        <GoFileCode size={26} />
                        <span className="hidden">Skills</span>
                    </a>
                </li>
                <li>
                    <a 
                    href="#education"
                    onClick={(e) => scrollToSection(e, 'education')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'education' ? 'bg-white' : ''}`}
                    >
                        <IoBookOutline size={26} />
                        <span className="hidden">Education</span>
                    </a>
                </li>
                <li>
                    <a 
                    href="#portfolio"
                    onClick={(e) => scrollToSection(e, 'portfolio')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'portfolio' ? 'bg-white' : ''}`}
                    >
                        <IoBriefcaseOutline size={26} />
                        <span className="hidden">Portfolio</span>
                    </a>
                </li>
                <li>
                    <a 
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className={`block px-3 py-4 hover:bg-white transition-all duration-300 ${activeSection === 'contact' ? 'bg-white' : ''}`}
                    >
                        <IoMailUnreadOutline size={26} />
                        <span className="hidden">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}