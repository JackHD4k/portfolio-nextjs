import styles from '@/styles/tag.module.css'

export default function Tag(props) {
  return (
    <div className={styles.container}>
      <span>{props.title}</span>
    </div>
  )
}