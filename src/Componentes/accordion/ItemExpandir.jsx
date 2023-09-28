import { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import styled from "styled-components";
import styles from "./ItemExpandir.module.css";
export default function ItemExpandir({ titulo, desc }) {

    const [open, setOpen] = useState(false);
    const showOrHide = () => setOpen(!open);

    



    return (

        <div className={styles.container}>
          
            <div onClick={showOrHide}>
                <div className={styles.titulo}>
                <MdArrowDropUp/> <h3 className={styles.titulo}>{titulo}</h3>
                </div>
                <div>
                    { open ? <span>{desc}</span> : null }
                </div>
            </div>
        </div>

    );

}