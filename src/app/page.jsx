import Header from '@/components/Header'
import Content from '@/components/Content'
import styles from '@/styles/page.module.css'
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  )
}
