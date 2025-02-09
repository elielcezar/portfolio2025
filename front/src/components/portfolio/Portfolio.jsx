import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import { createMarkup } from '../util'
import { MoveRight } from 'lucide-react'

export const Portfolio = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    /*fetch('/api/admin/web/api/portfolios')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        console.error(err.message)
      })*/
  }, [])

  return (
    <div className={styles.mainPortfolio} id="portfolio">
      <div className={'container ' + styles.container}>
        <div className="title darkbg">
          <h3>Portfólio</h3>
          <span>Projetos Recentes</span>
        </div>

        <div className={styles.lista}>
          {posts.map((item) => (
            <div className={styles.item} key={item.nid} data-aos="zoom-in-up">
              <div className={styles.itemImg} data-aos="zoom-in-up">
                <a href={item.field_link} target="_blank" rel="noopener noreferrer">
                  <img src={item.field_image} alt={item.title} />
                </a>
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <div 
                  className={styles.itemDescription} 
                  dangerouslySetInnerHTML={createMarkup(item.field_descricao)} 
                />
                <a 
                  href={item.field_link} 
                  className={'btn ' + styles.btn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Acesse <MoveRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio