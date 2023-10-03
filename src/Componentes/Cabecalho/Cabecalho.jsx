
import logo from '../../img/logo.png';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.center}>
                    <div className={styles.logo}><img src={logo} alt='Logo da Stratus' /></div>
                    <nav className={styles.menu}>
                        <a>Home</a>
                        <a>Blog</a>
                        <a>Produtos</a>
                        <a>Sobre</a>
                    </nav >
                </div >
            </header >

            

        </>

    );
}



