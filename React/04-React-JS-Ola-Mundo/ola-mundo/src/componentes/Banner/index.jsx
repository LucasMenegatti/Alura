import React from 'react'
import styles from './Banner.module.css'

import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem quidem dicta id sunt, voluptate ipsam placeat.
            </p>
        </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt=""
                />
            </div>
    </div>
  )
}
