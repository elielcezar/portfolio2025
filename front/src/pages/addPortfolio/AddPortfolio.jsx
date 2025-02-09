import { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import api from '../../services/api';
import styles from './AddPortfolio.module.css';



function CadastroPortfolio() {     
    
    const [confirmationMessage, setConfirmationMessage] = useState('');      
    
    const inputTitulo = useRef();        
    const inputDescricao = useRef();        
    const inputImagem = useRef();
    async function handleSubmit(event) {

        event.preventDefault();
        
        const formData = new FormData();
            formData.append('titulo', inputTitulo.current.value);            
            formData.append('descricao', inputDescricao.current.value);     
            // Adiciona múltiplas fotos ao FormData e ao objeto userData para log
            Array.from(imagem.current.files).forEach((file, index) => {
                formData.append('imagem', file);            
            });

        // Loga o conteúdo do FormData no console
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }        

        try {            
            const response = await api.post('/portfolio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response);

            if (response.status === 200 || response.status === 201) {                

                inputTitulo.current.value = '';                
                inputDescricao.current.value = '';                
                inputImagem.current.value = '';     

                setConfirmationMessage('Portfólio cadastrado com sucesso!');
                setTimeout(() => setConfirmationMessage(''), 5000);
                
            } else {
                throw new Error('Erro ao cadastrar portfólio');
            }
        } catch (error) {
            console.error('Erro ao cadastrar portfólio:', error);
            console.error('Detalhes do erro:', error.response ? error.response.data : error.message);
            setConfirmationMessage('Erro ao cadastrar portfólio.');
            setTimeout(() => setConfirmationMessage(''), 5000);
        }
    }
   
  return (
    <>        
        <div id="main">
        <div className="container">        

            <PageTitle title="Novo Portfólio" />
            
            {confirmationMessage ? <p className="confirmation-message">{confirmationMessage}</p> : null}

            <form>                
                <div className="form-item">                    
                    <input type="text" name="titulo" className="titulo" ref={inputTitulo} placeholder="Título" />
                </div>                                           
                <div className="form-item">                       
                    <textarea name="descricao" className="descricao" ref={inputDescricao} placeholder="Descrição"></textarea>
                </div>               
                <div className="form-item">
                    <label htmlFor="subtitulo">Imagem</label>
                    <input type="file" name="imagem" className="imagem" ref={inputImagem} multiple />
                </div>    

                <div className="form-item">
                    <button type='button' onClick={handleSubmit}>Enviar</button>
                </div>

            </form>       
        </div>      
    </div>
    </>    
  )
}

export default CadastroPortfolio