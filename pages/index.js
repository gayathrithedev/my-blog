import {useState, useEffect} from 'react'

// next
import Head from 'next/head'

// header
import Header from '../components/Header';

// styles
import styles from '../styles/Home.module.css';

// components
import HomeC from '../components/Home';
import Blog from '../components/Blog';
import MyWorks from '../components/MyWorks';
import Games from '../components/Games';
import AboutMe from '../components/AboutMe';

export default function Home() {
  const [menu, setMenu] = useState('Home');

  console.log(menu, 'menu');

  const renderMainContent = () => {
    switch(menu) {
      case 'Blog':
        return <Blog />
      case 'My works':
        return <MyWorks />
      case 'Games':
        return <Games />
      case 'About me':
        return <AboutMe />
      default:
        return <HomeC />
    }
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>Gayathri's Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={menu} setMenu={setMenu} />
      <main className={styles.main}>
        {renderMainContent()}
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
  )
}