import {useState, useEffect} from 'react'
import styles from './Clients.module.css'
import { createMarkup } from '../util';

export const Clients = () => {

  const [clientes, setClientes] = useState(null);
  const [logos, setLogos] = useState([]);
  const [body, setSetbody] = useState([]);
  
  /*const fetchData = async() => {
    try{            
      const response = await fetch ('/api/admin/web/api/pagina/44')      
      const data = await response.json()
      setClientes(data)      
    }catch(error){      
      console.log('Erro:', error)      
    }
  }

  useEffect(() => {
    fetchData();      
  },[])*/

  useEffect(() => {
    if(clientes){
      const listaLogos = clientes[0].field_imagens.split(',')
      const body = clientes[0].body
      setLogos(listaLogos)   
      setSetbody(body)
    }
  },[clientes])

  return (
      <section id={styles.clientes}>        
          <div className={'container '+styles.container}>
            <div className={'row '+styles.row}>
              <div className={styles.title}>                                   
                <h3 className={styles.itemDescription} dangerouslySetInnerHTML={createMarkup(body)}  />                                
              </div> 
              <div className={styles.logos}>
                {logos.map((logo) => (
                  <div className={styles.logo} key={logo}>
                    <img src={logo} />
                  </div>
                ))}
              </div>     
            </div>

          </div> 
    </section>
  )
}

export default Clients