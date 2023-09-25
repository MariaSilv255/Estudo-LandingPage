import Card from "../../Card/Card";
import styles from "./Sessao2.module.css"
import { CiLock , CiBitcoin ,CiLink, CiGlobe} from "react-icons/ci";
import { GoGraph} from "react-icons/go";
export default function Sessao2() {
    return (

        <section className={styles.section} >
            <div className={styles.container}>
                <Card icon={<CiLock size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                <Card icon={<CiBitcoin size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                <Card icon={<CiLink size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                <Card icon={<CiGlobe size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                <Card icon={<CiLock size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                <Card icon={<GoGraph size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
            </div>

        </section>

    );
}