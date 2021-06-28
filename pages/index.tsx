import styles from '../styles/Landing.module.css'

import { NextPage } from 'next'

const Landing: NextPage = () => {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          Peu Tatto
        </a>
        <div className={styles.menu}>
          <a href="/">Home</a>
          <a href="#">Contato</a>
          <a href="portifolio">Portifólio</a>
        </div>
      </header>
    </div>
  )
}

export default Landing
