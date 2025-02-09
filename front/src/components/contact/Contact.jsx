// import { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import icoWpp from '../../assets/ico-wpp.png';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id='contato' className={styles.contato}>
      <div className={styles.clip}>
        <div className={'container ' + styles.container}>
          <h3 className={styles.chamada}>Entre em contato e vamos tirar seu projeto do papel!</h3>
        </div>

        <section id={styles.marquee}>
          <div className={styles.container}>
            <div className={styles.aSectionMarqueeBox}>
              <h2>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vue</span>
                <span>PHP</span>
                <span>NextJS</span>
                <span>Wordpress</span>
                <span>Drupal</span>
              </h2>
              <h2>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vue</span>
                <span>PHP</span>
                <span>NextJS</span>
                <span>Wordpress</span>
                <span>Drupal</span>
              </h2>
              <h2>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vue</span>
                <span>PHP</span>
                <span>NextJS</span>
                <span>Wordpress</span>
                <span>Drupal</span>
              </h2>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.bSectionMarqueeBox}>
              <h2>
                <span>Sites Institucionais</span>
                <span>E-commerce</span>
                <span>Lojas no Shopify</span>
                <span>Landing Pages</span>
                <span>Anúncios no Google</span>
              </h2>
              <h2>
                <span>Sites Institucionais</span>
                <span>E-commerce</span>
                <span>Lojas no Shopify</span>
                <span>Landing Pages</span>
                <span>Anúncios no Google</span>
              </h2>
            </div>
          </div>
        </section>

        <div className={'container ' + styles.info}>
          <p className={styles.telefone1}>
            <img src={icoWpp} />
            <a href='https://wa.me/41999631609?text=Olá!' target='_blank'>
              41 99963-1609
            </a>
          </p>
          <p className={styles.telefone2}>
            <img src={icoWpp} />
            <a href='https://web.whatsapp.com/send?phone=41999631609?text=Olá' target='_blank'>
              41 99963-1609
            </a>
          </p>
          <p className={styles.email}>
            <Mail size={26} /> elielcezar@gmail.com
          </p>
          <p className={styles.local}>
            <MapPin size={26} /> Curitiba - Brasil
          </p>
          <p> 😎</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
