import styles from '../styles/Landing.module.css'

import { NextPage } from 'next'
import Image from 'next/image'

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
          <a href="#">Portifólio</a>
        </div>
      </header>
      <div className={styles.figure2}>
        <Image src="/images/figure2.svg" width={700} height={550} />
      </div>
      <div className={styles.figure1}>
        <Image src="/images/figure1.svg" width={300} height={200} />
      </div>
      <div className={styles.about}>
        <div className={styles.textarea}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <img src="/images/tattoo.png" />
        <button className={styles.wppBtn}>
          <img src="/images/wpp-icon.png" />
          (38) 9 9999-9999
        </button>
      </div>
    </div>
  )
}

export default Landing
