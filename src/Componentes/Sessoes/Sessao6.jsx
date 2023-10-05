import { Container } from '../Container.style';
import { Wrapper } from '../Wrapper.style'
import { Slogan } from '../Slogan.style';
import { Title } from '../Title.style';
import { Description } from '../description.styles';
import styled from 'styled-components';
import { Botton } from '../Botton.style';
import { Fade } from 'react-reveal';
export default function Sessao6() {

    const Line = styled.div`
      
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
  `;

    return (

        <Wrapper cor={'#35f5a1'}>
            <Container>
                <Fade duration={2000}>
                    <Line>
                        <div>
                            <Slogan cor={'#000'}>SAFE / SECURE / PRIVATE</Slogan>
                            <Title cor={'#000'}>The future of finance is DeFi</Title>
                            <Description tamanho={'720px'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec augue semper, malesuada tellus quis, ultricies augue. Cras tincidunt non tellus quis euismod. Vivamus aliquet tortor pharetra erat pellentesque, non consequat nibh sagittis. In sed.</Description>
                        </div>
                        <div>
                            <Botton color={'#fff'} background={'#000'}>GET INVOLVED ➔ </Botton>
                        </div>
                    </Line>
                </Fade>
            </Container>

        </Wrapper>

    );

}