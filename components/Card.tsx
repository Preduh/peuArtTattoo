import styles from '../styles/Card.module.css'

type CardProps = {
  title?: string
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Card
