import React from 'react';
import styles from './Services.module.css';
import { CodeXml, PanelsTopLeft, BugOff, TextSearch } from 'lucide-react';

export const Services = () => {
  const technologies = ['JavaScript', 'React', 'Vue', 'PHP', 'NextJS', 'Wordpress', 'Drupal'];
  const services = ['Sites Institucionais', 'E-commerce', 'Lojas no Shopify e Nuvem Shop', 'Landing Pages', 'Anúncios no Google'];

  return (
    <>
      <section className={styles.sobre} id='sobre'>
        <div className='container'>
          <div className={'title ' + styles.title}>
            <h3>Serviços</h3>
            <span>O que eu faço</span>
          </div>

          <div className={styles.resumo}>
            <p>Sou formado em <strong>Design Gráfico</strong> pela UTFPR, possuo pós-graduação em <strong>Engenharia de Software para Dispositivos Móveis</strong> e trabalho há 10 anos com desenvolvimento para a web. Posso ajudar sua empresa com os seguintes serviços:</p>
          </div>

          <div className={styles.row}>
            <div className={styles.item}>
              <div className={styles.icon}><CodeXml size={64} /></div>
              <h4>Programação</h4>
              <p>de sites, blogs, landing pages e e-commerce</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><PanelsTopLeft size={64} /></div>
              <h4>Criação</h4>
              <p>de identidade visual e design para seu site</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><TextSearch size={64} /></div>
              <h4>S E O</h4>
              <p>melhoria de desempenho e posicionamento do seu site nos resultados do Google</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><BugOff size={64} /></div>
              <h4>Correção de Problemas</h4>
              <p>análise técnica e plano de melhorias em sites desenvolvidos por terceiros</p>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.marquee}>
        <div className={styles.container}>
          <div className={styles.aSectionMarqueeBox}>
            {[...Array(3)].map((_, index) => (
              <h2 key={index}>
                {technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </h2>
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.bSectionMarqueeBox}>
            {[...Array(2)].map((_, index) => (
              <h2 key={index}>
                {services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </h2>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
