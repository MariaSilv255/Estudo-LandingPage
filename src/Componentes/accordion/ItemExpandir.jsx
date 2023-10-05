import { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { Texto } from "../Texto.style";
import styled, { keyframes } from "styled-components";



export default function ItemExpandir({ titulo, desc }) {

    const [open, setOpen] = useState(false);

    const showOrHide = () => {
        setOpen(!open);
    }


    const conteudo = keyframes`
  from { 
   
        opacity: 0.3;
        transform: translateY(5px);
    }
    to{
                transform: translateY(0px);
    
  }  
`;
    const Conteudo = styled.span`
    animation: ${conteudo} 2s ;
    display: flex;
    justify-content: row;
    color: #B1B1B1;
    font-family: "DM Sans", Sans-serif;
    padding: 10px 15px 20px 50px;
    max-width: 580px;
    line-height: 1.4em;
    font-weight: bold;
    font-size: 15px;
    `
        ;

    return (

        <>
            <div onClick={showOrHide}>
                <Texto>
                    <MdArrowDropUp size={35}/> <Texto> {titulo}</Texto>
                </Texto>
                <div>
                    {open ?
                        <Conteudo>{desc}</Conteudo>
                        : null}
                </div>
            </div>


        </>
    );

}