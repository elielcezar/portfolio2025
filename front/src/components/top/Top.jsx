import React from 'react';
import eliel from '../../assets/eliel.png';
import styles from './Top.module.css';
import { Briefcase, Mail } from 'lucide-react';

const Top = () => {
  return (
    <div className={styles.top}>
      <div className='container'>
        <img src={eliel} alt='' />
        <h1>Olá! 🤘<br />Meu nome é Eliel, sou designer e programador de sites e apps</h1>
        
        <div className={styles.cta}>
          <a href='#portfolio' className={'btn active anchor ' + styles.btn}><Briefcase /> Portfólio</a>
          <a href='#contato' className={'btn active anchor ' + styles.btn}><Mail /> Contato</a>
        </div>
      </div>
    </div>
  );
};

export default Top;
