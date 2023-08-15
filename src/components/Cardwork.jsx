import styles from '../styles/cardwork.module.css';
import Tag from './Tag';
export default function Cardwork(props) {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <span>{props.date}</span>
      </div>
      <div className={styles.work}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.company}>{props.company}</p>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.tag}>
          <ul>
            <li><Tag title={props.tag1}/></li>
            <li><Tag title={props.tag2}/></li>
            <li><Tag title={props.tag3}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}