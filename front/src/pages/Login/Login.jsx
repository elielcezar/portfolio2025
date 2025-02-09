import { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import api from '../../services/api';
import styles from './Login.module.css';


export default function Login() {     
    
    const [confirmationMessage, setConfirmationMessage] = useState('');      
    
    const inputEmail = useRef();        
    const inputPassword = useRef();        

    async function handleSubmit(event) {

        event.preventDefault();
        
        const formData = new FormData();
            formData.append('email', inputEmail.current.value);            
            formData.append('password', inputPassword.current.value); 
            
        console.log('Dados recebidos:', inputEmail.current.value);
        console.log('Dados recebidos:', inputPassword.current.value);

        try {            
            const response = await api.post('/login', formData, {
                headers: {
                    'Content-Type': 'application/json'                    
                }
            });

            console.log('Response:', response);

            if (response.status === 200 || response.status === 201) {                

                inputEmail.current.value = '';                
                inputPassword.current.value = '';                                

                setConfirmationMessage('Login realizado com sucesso!');
                setTimeout(() => setConfirmationMessage(''), 5000);
                
            } else {
                throw new Error('Erro ao fazer login');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            console.error('Detalhes do erro:', error.response ? error.response.data : error.message);
            setConfirmationMessage('Email ou senha inválidos.');
            setTimeout(() => setConfirmationMessage(''), 5000);
        }
    }
   
  return (
    <>        
        <div id="main">
        <div className="container">        

            <PageTitle title="Login" />
            
            {confirmationMessage ? <p className="confirmation-message">{confirmationMessage}</p> : null}

            <form>                                                                    
                <div className="form-item">                       
                    <input type="text" name="email" className="email" ref={inputEmail} placeholder="Email"></input>
                </div>               
                <div className="form-item">                       
                    <input type="password" name="password" className="password" ref={inputPassword} placeholder="Senha"></input>
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

