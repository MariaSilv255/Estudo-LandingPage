import { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import styles from "./ItemExpandir.module.css";
import { Transform } from "@mui/icons-material";
export default function ItemExpandir({ titulo, desc }) {

    const [open, setOpen] = useState(false);

    const showOrHide = () => {
        setOpen(!open);
    }
   

    




    return (

        <div className={styles.container}>

            <div onClick={showOrHide}>
                <div className={styles.titulo}>
                    <MdArrowDropUp /> <h3 className={styles.titulo}>{titulo}</h3>
                </div>
                <div>
                    {open ? <span className={styles.desc}>{desc}</span> : null}
                </div>
            </div>
        </div>

    );

}