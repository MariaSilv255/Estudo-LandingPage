
import { Container } from "../Container.style";
import { Wrapper } from "../Wrapper.style";
import { Slogan } from "../Slogan.style";
import { GroupBotton } from "../GroupBotton.style";
import { Botton } from "../Botton.style";
import { Title } from "../Title.style";

export default function Sessao1() {
    
    return (

        <Wrapper img={'bolinha'} anima='sim'>
            <Container  espacamento={'150px 30px'}>

                <Slogan>SAFE / SECURE / PRIVATE</Slogan>
                <Title>The future of finance is DeFi</Title>

                <GroupBotton>
                    <Botton>START FOR FREE ➔ </Botton>
                    <Botton background={'transparent'} color={'#fff'} bordercolor={'#FFFFFF2B'} borderwidth={'2px'}>LEARN MORE ➔ </Botton>
                </GroupBotton>

            </Container>
        </Wrapper>
    );
}