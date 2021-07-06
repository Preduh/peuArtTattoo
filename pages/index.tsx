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
        <Card title="Promoções">
          <p>01 Tattoo 5cm - R$45,00</p>
          <p>02 Tattoo 5cm - R$70,00</p>
          <p>03 Tattoo 5cm - R$120,00</p>
        </Card>
      </section>
      <section className={styles.areas} id="contacts">
        <div className={styles.contatos}>
          <img src="/images/et.png" className={styles.contatosImg} />
          <p>Faça já seu orçamento</p>
          <div className={styles.contatosBtns}>
            <a
              href="https://www.instagram.com/peuarttattoo/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.instaBtn}>
                <img src="/images/instagram.png" />
              </button>
            </a>
            <a
              href="https://wa.me/message/WFSOXJP2Y5FEI1"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.wppBtn}>
                <img src="/images/whatsapp.png" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.areas} id="portifolio">
        Área do Portifólio
      </section>
    </div>
  )
}

export default Landing
