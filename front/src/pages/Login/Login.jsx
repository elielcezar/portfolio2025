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
        
        try {            
            const response = await api.post('/login', {
                email: inputEmail.current.value,
                password: inputPassword.current.value
            });

            if (response.status === 200 || response.status === 201) {                
                // Salvar o token no localStorage
                localStorage.setItem('token', response.data.token);
                
                inputEmail.current.value = '';                
                inputPassword.current.value = '';                                

                setConfirmationMessage('Login realizado com sucesso!');
                setTimeout(() => setConfirmationMessage(''), 5000);
                
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            console.error('Detalhes do erro:', error.response?.data);
            setConfirmationMessage(error.response?.data?.error || 'Erro ao fazer login');
            setTimeout(() => setConfirmationMessage(''), 5000);
        }
    }
   
  return (
    <>        
        <div id="main">
        <div className="container">        

            <PageTitle title="Login" />
            
            {confirmationMessage ? <p className="confirmation-message">{confirmationMessage}</p> : null}

            <form className={styles.loginForm}>                                                                    
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

