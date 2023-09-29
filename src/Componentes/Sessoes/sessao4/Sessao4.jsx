import bitcoin from "../../../img/captura.png";
import styles from "./Sessao4.module.css";
import ItemExpandir from "../../accordion/ItemExpandir";

export default function Sessao4() {
    return (
        <section className={styles.sessao}>
            <div className={styles.container}>
                <div className={styles.containerConteudo}>
                    <div className={styles.conteudo}>
                        <h2 className={styles.title}>Questions</h2>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus quam tincidunt, sodales turpis ne.</p>

                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />


                    </div>
                    <img className={styles.img} src={bitcoin} />
                </div>
            </div>

        </section>
    );
}