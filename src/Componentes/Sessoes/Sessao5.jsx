import Card from '../Card/Card';
import { Container } from '../Container.style';
import { Wrapper } from '../Wrapper.style';
import { BsPerson, BsPersonAdd, BsChatLeftDots } from "react-icons/bs";
import { GroupCard } from '../GroupCard.style';
import { SubTitle } from '../Subtitle.style';
import { Description } from '../description.styles';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

export default function Sessao5() {


    const Line = styled.div`
      
    display: flex;
    flex-direction: column;
    padding-bottom:25px;
  `;

    return (
        <Wrapper >
            <Container>

                <Line>
                    <Fade bottom duration={2000}>
                        <SubTitle cor={'#fff'}>Find out more</SubTitle>

                        <Description cor={'#FFFFFF96'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
                    </Fade>
                </Line>
                <GroupCard>
                    <Fade duration={1800}>
                        <Card icon={<BsPerson size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                        <Card icon={<BsPersonAdd size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                        <Card icon={<BsChatLeftDots size={45} />} titulo={'Meet the Team'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor.'} />
                    </Fade>
                </GroupCard>
            </Container>
        </Wrapper>
    );
}