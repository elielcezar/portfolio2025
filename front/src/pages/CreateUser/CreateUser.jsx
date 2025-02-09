import { useRef, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './CreateUser.module.css';
import api from '../../services/api';



export default function CreateUser() {

    const [confirmationMessage, setConfirmationMessage] = useState(''); 

    const inputName = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const inputConfirmPassword = useRef();


    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Criar usuário');

        try{
            const response = await api.post('/api/create-users', {                
                name: inputName.current.value,
                email: inputEmail.current.value,
                password: inputPassword.current.value,
                confirmPassword: inputConfirmPassword.current.value
            });


            console.log('Resposta da API:', response);

            if(response.status === 200 || response.status === 201){
                setConfirmationMessage('Usuário criado com sucesso!');
                setTimeout(() => setConfirmationMessage(''), 5000);
            }

            console.log('Usuário criado com sucesso:', response.data);


        }catch(error){
            console.log('Erro ao criar usuário:', error);
            setConfirmationMessage(error.response?.data?.error || 'Erro ao criar usuário');
            setTimeout(() => setConfirmationMessage(''), 5000);
        }
    }


    return (
        <div className="container">
            <PageTitle title="Criar Usuário" />

            {confirmationMessage ? <p className="confirmation-message">{confirmationMessage}</p> : null}

            <form className={styles.form}>
                <div className="form-item">                    
                    <input type="text" id="name" name="name" ref={inputName} placeholder="Nome" />
                </div>

                <div className="form-item">                    
                    <input type="text" id="email" name="email" ref={inputEmail} placeholder="Email" />
                </div>

                <div className="form-item">                    
                    <input type="text" id="password" name="password" ref={inputPassword} placeholder="Senha" />
                </div>

                <div className="form-item">                    
                    <input type="text" id="confirmPassword" name="confirmPassword" ref={inputConfirmPassword} placeholder="Confirmar Senha" />
                </div>

                <div className="form-item">                    
                    <button type="submit" onClick={handleSubmit}>Criar</button>
                </div>
            </form>


        </div>
    );
}
