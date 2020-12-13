import {useState, useEffect} from 'react'

// next
import Head from 'next/head'

// header
import Header from '../components/Header';

// styles
import styles from '../styles/Home.module.css';

// components
import HomeC from '../components/Home';
import BlogC from '../components/Blog';
import MyWorks from '../components/MyWorks';
import Games from '../components/Games';
import AboutMe from '../components/AboutMe';
import ThemeProvider from '../components/theme/ThemeProvider';

export default function Blog() {

  return(
    <ThemeProvider>
    <div className={styles.container}>
      <Head>
        <title>Gayathri's Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <BlogC />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </ThemeProvider>
  )
}