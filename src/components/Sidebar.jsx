import {PencilLine} from 'phosphor-react'
import {Avatar} from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
                alt="imagem de capa" 
            />

            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/109995781?v=4" />

                <strong>Nome do usuário</strong>
                <span>Cargo do usuário</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size = {20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}