import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './MenuAdmin.module.css'


const MenuAdmin = () => {

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    }


  return (
    <>
        <div className={styles.menuAdmin}>

            <div className={`container ${styles.container}`}>
                <nav>
                    <ul>
                        <li><a href="/admin/conteudo">Conteúdo</a></li>
                        <li><a href="/admin/novo/portfolio">Novo Portfólio</a></li>                        
                        <li><a href="/create-user">Criar Usuário</a></li>
                        <li><button onClick={handleLogout}>Sair</button></li>
                    </ul>
                </nav>
            </div>
        </div>      
    </>
  )
}

export default MenuAdmin;