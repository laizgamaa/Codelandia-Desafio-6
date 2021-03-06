import Head from 'next/head'
import { Content } from '../components/Content'
import styles from '../styles/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codelândia - Desafio 5</title>
        <meta name="description" content="Praticando Front-end com a Codelândia" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Content />
      </main>

    </div>
  )
}
