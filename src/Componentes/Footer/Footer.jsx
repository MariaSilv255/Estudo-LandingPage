import { BsDiscord, BsTwitter } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import styles from './Footer.module.css';
export default function Footer() {
    return (

        <footer className={styles.footer}>

            <div className={styles.container}>
                <div className={styles.conteudo}>
                    <div className={styles.texto}>Copyright © 2022</div>
                    <div className={styles.icon}>
                        <BsDiscord size={35}/>
                        <BiLogoTelegram size={35}/>
                        <BsTwitter size={35}/>
                    </div>
                </div>
            </div>

        </footer>

    )
}