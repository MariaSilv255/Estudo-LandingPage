
import ItemExpandir from "../accordion/ItemExpandir";
import { Wrapper } from "../Wrapper.style";
import { Container } from "../Container.style";
import { SubTitle } from "../Subtitle.style";
import { Description } from "../description.styles";
import img from '../../img/captura.png';

import styled from "styled-components";

export default function Sessao4() {

    const Justificar = styled.div`
        display: flex;
        flex-wrap: wrap;
    
        
    `;
    const Line = styled.div`
      
      display: flex;
      flex-direction: column;
      gap: 30px ;
    `;

    const Img = styled.div`
           
            max-width: 550px;
            
    `;




    return (
        <Wrapper>
            <Container>
                <Justificar>
                    <Line>
                        <SubTitle cor={'#fff'}>Questions</SubTitle>
                        <Description cor={'#FFFFFF96'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus quam tincidunt, sodales turpis ne.</Description>

                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />
                        <ItemExpandir titulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus tortor at dolor venenatis lacinia. Quisque vulputate vehicula sapien maximus aliquam. Morbi ac dignissim erat. In hac habitasse platea dictumst.' />


                    </Line>

                    <Img><img width={'100%'} src={img} alt="Imagem de um bitcoin" title="Imagem de bitcoin"/></Img>
                </Justificar>

            </Container>
        </Wrapper >
    );
}