
import styles from './Card.module.css';
export default function Card({ icon, titulo, desc }) {
    return (

        <div className={styles.container}> 
            <div className={styles.conteudo}>
                <div className={styles.icone}>{icon}</div>
                <h4 className={styles.titulo}>{titulo}</h4>
                <p className={styles.desc}>{desc}</p>
                <a className={styles.link} href='#'>Lear More ❯❯ </a>
            </div>
        </div>

    );
}