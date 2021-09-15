import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Where should I move?</title>
        <meta name="description" content="Where should I move?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Moving is hard.</h1>
        <h2 className={styles.typing}>Let&apos;s make it easier :)</h2>
        <Link href="/start">
          <a>Get Started</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Logan Web Dev'}
          <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  )
}

export default Home
