import Card from "../Card/Card";
import { Container } from "../Container.style";
import { CiLock, CiBitcoin, CiLink, CiGlobe } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { Wrapper } from "../Wrapper.style";

import { GroupCard } from "../GroupCard.style";
import { Fade } from "react-reveal";
export default function Sessao2() {
    return (


        <Wrapper>
            <Container>

                <GroupCard>
                    <Fade duration={1800}>
                        <Card icon={<CiLock size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                        <Card icon={<CiBitcoin size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                        <Card icon={<CiLink size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                        <Card icon={<CiGlobe size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                        <Card icon={<CiLock size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                        <Card icon={<GoGraph size={45} />} titulo={'Mauris faucibus'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus facilisis nibh, ut porttitor est malesuada at.'} />
                    </Fade>
                </GroupCard>

            </Container>
        </Wrapper>

    );
}