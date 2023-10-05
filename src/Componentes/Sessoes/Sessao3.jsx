
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardWid from '../CardWid/CardWid';
import { Wrapper } from '../Wrapper.style';
import { Container } from '../Container.style';
import { SubTitle } from '../Subtitle.style';
import { Description } from '../description.styles';
import { Center } from '../Center.style';
import { Fade } from 'react-reveal';



export default function Sessao3() {
    return (
        <Wrapper img={'branco'} cor={'#ebe1e16e'}>
            <Container>
                <Center>
                    <Fade bottom duration={2000}>
                        <SubTitle>
                            How it Works
                        </SubTitle>
                        <Description> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat.</Description>
                    </Fade>
                </Center>




                <Grid container rowSpacing={10}>
                    <Grid xs={12} md={6} sm={12} mdOffset={0} >
                        <CardWid numero={1} />
                    </Grid>

                    <Grid xs={12} sm={12} md={6} mdOffset={6}>
                        <CardWid numero={2} />
                    </Grid>

                    <Grid xs={12} sm={12} md={6} mdOffset={0}>
                        <CardWid numero={3} />
                    </Grid>

                    <Grid xs={12} sm={12} md={6} mdOffset={6}>
                        <CardWid numero={4} />
                    </Grid>
                </Grid>

            </Container>
        </Wrapper>
    );
}