
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardWid from '../../CardWid/CardWid';
import styles from "./Sessao3.module.css"



export default function Sessao3() {
    return (
        <section className={styles.sessao}>
            <div className={styles.container}>

                <div className={styles.conteudo}>
                    <h2 className={styles.titulo}>
                        How it Works
                    </h2>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat.</div>

                </div>

                <div className={styles.grupoItens}>
                    <Grid container spacing={7} >
                        <Grid xs={12}  md={6} sm={6} mdOffset={0} >
                            <CardWid numero={1}/>
                        </Grid>
                       
                        <Grid xs={12} sm={6} md={6} mdOffset={6}>
                            <CardWid numero={2}/>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} mdOffset={0}>
                            <CardWid numero={3} />
                        </Grid>
                       
                        <Grid xs={12} sm={6} md={6} mdOffset={6}>
                            <CardWid numero={4} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}