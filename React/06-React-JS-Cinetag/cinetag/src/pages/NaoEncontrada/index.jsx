import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada() {
    return (
        <section>
            <img className={styles.imagem} src="imagens/404.png" alt="" />        
        </section>
    )
}