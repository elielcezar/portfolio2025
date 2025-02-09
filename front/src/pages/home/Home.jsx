import Top from '../../components/top/Top';
import Portfolio from '../../components/portfolio/Portfolio';
import { Services } from '../../components/services/Services';
import Clients from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';    


export default function Home() {
  return (
    <>
        <Top/>  
        <Portfolio/>                    
        <Services/>
        <Clients/>          
        <Contact/>        
    </>
  )
}
