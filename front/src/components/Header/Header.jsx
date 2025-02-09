import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import MenuAdmin from '../MenuAdmin/MenuAdmin';
import { smoothScroll } from '../../utils/smoothscroll';
import styles from './Header.module.css';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {  
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    smoothScroll();
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  let prevScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < prevScroll);
      prevScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isVisible ? styles.show : ''}`}>
      <div className={`container ${styles.container}`}>
        <h1>elielcezar</h1>
        <nav>
          <ul>
            <li><a href="#portfolio" className="anchor">Portfólio</a></li>
            <li><a href="#sobre" className="anchor">Sobre</a></li>
            <li><a href="#contato" className="anchor">Contato</a></li>
            <li><a href="https://github.com/elielcezar" className={styles.social} target="_blank" rel="noopener noreferrer"><Github /></a></li>
            <li><a href="https://www.linkedin.com/in/elielcezar/" className={styles.social} target="_blank" rel="noopener noreferrer"><Linkedin /></a></li>
          </ul>
        </nav>
      </div>
      {isAuthenticated && <MenuAdmin />}
    </header>
  );
};

export default Header;
