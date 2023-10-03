import { Container } from "./Container.style";
import { Wrapper } from "./Wrapper.style";
import { Texto } from "./Texto.style";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import styled from "styled-components";

export default function Footer() {
    const Itens = styled.div`
         color: #fff;
    display: flex;
    gap: 30px;
    `;

    const Conteudo = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
`;


    return (

        <Wrapper>
            <Container espacamento={'30px 30px'}>
                <Conteudo>
                    <Texto cor={'#fff'}>Copyright © 2023</Texto>
                    <Itens>
                        <BsDiscord size={35} />
                        <BiLogoTelegram size={35} />
                        <BsTwitter size={35} />
                    </Itens>
                </Conteudo>
            </Container>
        </Wrapper>
    );
}