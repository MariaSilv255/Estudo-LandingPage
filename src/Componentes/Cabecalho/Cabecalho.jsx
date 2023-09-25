
import logo from '../../img/logo.png';
import styles from './Cabecalho.module.css';
import { IoBagHandleOutline } from "react-icons/io5";

export default function Cabecalho() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.center}>
                    <div className={styles.logo}><img src={logo} alt='Logo da Stratus' /></div>
                    <nav className={styles.menu}>
                        <a>Home</a>
                        <a>Pages</a>
                        <a>Portfolio</a>
                        <a>Features</a>
                        <a>Blog</a>
                        <a>Shops</a>
                        <a>Purchase</a>
                        <a><IoBagHandleOutline size={22} /></a>
                    </nav >
                </div >
            </header >

            

        </>

    );
}



