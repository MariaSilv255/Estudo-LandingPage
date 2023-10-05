import styles from "./CardWid.module.css";
import { Fade } from 'react-reveal';

export default function CardWid({numero}) {
    return (

        <div className={styles.container}>
            <div className={styles.caixa}>
                <Fade top>
                <div className={styles.caixinha}>
                   {numero}
                </div>
                </Fade>
                <div className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nulla, vulputate quis interdum ac, venenatis
                </div>
            </div>
        </div>

    );
}