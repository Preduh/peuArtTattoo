import styles from '../styles/Landing.module.css'

import { NextPage } from 'next'

const Landing: NextPage = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.firstView} id="home">
        <header className={styles.header}>
          <img src="/images/logo.png" id={styles.logo} />
          <div className={styles.menu}>
            <a href="#home">Home</a>
            <a href="#contacts">Contato</a>
            <a href="#portifolio">Portifólio</a>
          </div>
        </header>
      </div>
      <div className={styles.contacts} id="contacts">
        Área de Contatos
      </div>
      <div className={styles.contacts} id="portifolio">
        Área do Portifólio
      </div>
    </div>
  )
}

export default Landing
