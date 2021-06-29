import styles from '../styles/Card.module.css'

type CardProps = {
  title?: string
  img?: string
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <img src={props.img} />
    </div>
  )
}

export default Card
