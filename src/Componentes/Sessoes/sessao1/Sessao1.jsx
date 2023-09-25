import styles from './sessao.module.css';

export default function Sessao1() {
    
    return (
        <section className={styles.section}>
            <div className={styles.conteudo}>
                <p className={styles.slogan}>SAFE / SECURE / PRIVATE</p>
                <h1 className={styles.title}>The future of finance is DeFi</h1>

                <div className={styles.grupoBotoes}>
                    <button className={styles.botaoStart}>START FOR FREE ➔ </button>
                    <button className={styles.botaoLear}>LEARN MORE ➔ </button>
                </div>
            </div>
        </section>
    );
}