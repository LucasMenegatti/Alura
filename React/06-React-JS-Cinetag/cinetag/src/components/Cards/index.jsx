import Card from 'components/Card'
import styles from './Cards.module.css'

export default function Cards({ lista }) {
    return (
        <section className={styles.container}>
            {lista.map((item) => (<Card {...item} key={item.id} />))}
        </section>
    )
}