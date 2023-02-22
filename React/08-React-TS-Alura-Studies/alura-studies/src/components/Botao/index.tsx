import React from 'react';
import styles from './Botao.module.scss'

interface IBotaoProps {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

class Botao extends React.Component<IBotaoProps> {
  render() {
    const { children, type = 'button', onClick } = this.props
    return (
      <button
        className={styles.botao}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}

export default Botao;