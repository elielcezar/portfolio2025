import React from 'react'
import styles from './MenuAdmin.module.css'

export default function MenuAdmin() {
  return (
    <>
        <div className={styles.menuAdmin}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <ul>
                        <li><a href="/admin/conteudo">Conteúdo</a></li>
                        <li><a href="/admin/novo/portfolio">Novo Portfólio</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/create-user">Criar Usuário</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>      
    </>
  )
}

