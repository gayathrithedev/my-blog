import {useState} from 'react'
// next
import Link from 'next/link'
import Image from 'next/image'

// classnames
import classNames from 'classnames';

// styles
import styles from '../styles/Header.module.css';

// icons
import MenuIcon from '../assets/images/MenuIcon';
import CloseIcon from '../assets/images/CloseIcon';


const Header = ({menu, setMenu}) => {

  const [showMenu, setMenuVisible] = useState(false);

  const menus = [
    {
      name: 'Home',
      url: '/',
      as: '/'
    },
    {
      name: 'Blog',
      url: 'blog',
      as: 'blog'
    },
    {
      name: 'My works',
      url: 'myworks',
      as: 'my-works'
    },
    {
      name: 'Games',
      url: 'games',
      as: 'games'
    },
    {
      name: 'About me',
      url: 'aboutme',
      as: 'about-me'
    },
  ]

  return (
    <header className={styles.header}>
      <p className={styles.brand}>
        G3
      </p>
      <div className={styles.menuWrapper}>
        <button className={styles.menuIcon} onClick={() => setMenuVisible(!showMenu)}>
          {
            showMenu ? <CloseIcon /> : <MenuIcon />
          }
        </button>
        {
          showMenu ? (
            <ul className={styles.smNavbar}>
              {
                menus.map(({name,url, as}) => (
                  <button key={name} onClick={() => setMenu(name)}>
                    <li className={classNames(name === menu 
                      ? styles.activeMenu 
                      : styles.inActiveMenu, styles.smMenu)}>
                      {name}
                    </li>
                  </button>
                ))
              }
            </ul>
          ) : null
        }
        
      </div>
      <ul className={styles.navbar}>
        {
          menus.map(({name,url, as}) => (
            <button key={name} onClick={() => setMenu(name)}>
              <li className={classNames(name === menu 
                ? styles.activeMenu 
                : styles.inActiveMenu, styles.menu)}>
                {name}
              </li>
            </button>
            
          ))
        }
      </ul>
    </header>
  )
}

export default Header;