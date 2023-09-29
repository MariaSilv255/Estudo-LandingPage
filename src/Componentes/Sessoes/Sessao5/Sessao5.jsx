import Card from '../../Card/Card';
import styles from './Sessao5.module.css'
import { BsPerson, BsPersonAdd, BsChatLeftDots } from "react-icons/bs";
export default function Sessao5() {

    return (
        <section className={styles.Sessao}>
            <div className={styles.container}>
                <div className={styles.containerConteudo}>
                    <h2 className={styles.titulo}>Find out more</h2>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.cards}>
                    <Card icon={<BsPerson size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                    <Card icon={<BsPersonAdd size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                    <Card icon={<BsChatLeftDots size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                </div>
            </div>
        </section>
    );
}