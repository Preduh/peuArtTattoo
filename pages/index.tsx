import styles from '../styles/Landing.module.css'

import { NextPage } from 'next'
import Card from '../components/Card'

const Landing: NextPage = () => {
  return (
    <div className={styles.landing} id="landing">
      <header className={styles.header}>
        <a href="#hero">
          <img src="/images/logo.png" id={styles.logo} />
        </a>
        <div className={styles.menu}>
          <a href="#hero">Home</a>
          <a href="#contacts">Contatos</a>
          <a href="#portifolio">Portifólio</a>
        </div>
      </header>
      <section className={styles.firstView} id="hero">
        <h1 className={styles.title}>
          TEM
          <br />
          ESPAÇO?
          <br />
          FAZ
          <br />
          TATTOO!
        </h1>
        <Card title="Promoção">
          <p>01 Tattoo 5cm - R$45,00</p>
          <p>01 Tattoo 5cm - R$45,00</p>
          <p>01 Tattoo 5cm - R$45,00</p>
        </Card>
      </section>
      <section className={styles.areas} id="contacts">
        Área de Contatos
      </section>
      <section className={styles.areas} id="portifolio">
        Área do Portifólio
      </section>
    </div>
  )
}

export default Landing
