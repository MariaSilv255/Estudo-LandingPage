
import { Container } from "../Container.style";
import { Wrapper } from "../Wrapper.style";
import { Slogan } from "../Slogan.style";
import { GroupBotton } from "../GroupBotton.style";
import { Botton } from "../Botton.style";
import { Title } from "../Title.style";
import { Fade } from "react-reveal";

export default function Sessao1() {



    return (

        <Wrapper img={'bolinha'} anima='sim'>
            <Container espacamento={'200px 30px'}>

                <Fade top duration={2000}>
                    <Slogan>SAFE / SECURE / PRIVATE</Slogan>
                </Fade>
                <Fade duration={2000}>
                    <Title>The future of finance is DeFi</Title>
                </Fade>
                <Fade bottom duration={2000}>
                <GroupBotton>
                 
                        <Botton>START FOR FREE ➔ </Botton>
                        <Botton background={'transparent'} color={'#fff'} bordercolor={'#FFFFFF2B'} borderwidth={'2px'}>LEARN MORE ➔ </Botton>
               
                </GroupBotton>
                     </Fade>

            </Container>
        </Wrapper>
    );
}