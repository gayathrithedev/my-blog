import {useState, useContext, useMemo} from 'react'
// next
import Link from 'next/link'
import Image from 'next/image'

// context
import {ThemeContext} from '../components/theme/ThemeProvider';

// theme
import {theme} from '../components/theme/theme';


const Header = () => {
  const {mode, setTheme} = useContext(ThemeContext);
  const menus = [
    {
      name: 'G3',
      url: '/'
    },
    {
      name: 'Blog',
      url: 'blog'
    },
    {
      name: 'Work',
      url: 'work'
    }
  ]

  const links = [
    {
      name: 'linkedin',
      img: '/linkedin.svg',
      url: 'https://linkedin.com/g3dev'
    },
    {
      name: 'twitter',
      img: '/twitter.svg',
      url: 'https://twitter.com/g3_dev'
    }
  ]

  const styles = useMemo(() => getStyles(mode), [mode]);

  return (
    <header style={styles.header}>
      <ul style={styles.navbar}>
        {
          menus.map(({name,url}) => (
            <Link href={url} key={name} onClick={() => setMenu(name)}>
              <li style={styles.menu}>
                {name}
              </li>
            </Link>
          ))
        }
      </ul>
      <div style={styles.links}>
        {
          links.map(({img, url}) => (
            <Link href={url} key={url}>
              <div style={styles.link}>
              <Image
                src={img}
                alt="links"
                width={20}
                height={20}
                style={styles.link}
              />
              </div>
            </Link>
          ))
        }
        {
          mode === 'dark' ? (
          <button onClick={setTheme} style={styles.link}>
            <Image
              src="/sun.svg"
              alt="theme"
              width={20}
              height={20}
            />
          </button>
          ) : null
        }

        {
          mode === 'light' ? (
            <button onClick={setTheme} style={styles.link}>
              <Image
                src="/moon.svg"
                alt="theme"
                width={20}
                height={20}
              />
            </button>
          ) : null
        }
        
      </div>
    </header>
  )
}

const getStyles = (mode) => ({
  header: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navbar: {
    flex: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    listStyle: 'none',
  },
  links: {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  menu: {
    cursor: 'pointer',
    color: theme[mode].textDark,
    fontSize: 16,
    padding: 10,
  },
  link: {
    cursor: 'pointer',
    padding: 10,
  }
})

export default Header;