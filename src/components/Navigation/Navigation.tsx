'use client'

import { useEffect, useState } from 'react'
import NavLinks from '../NavLink/NavLink'
import styles from './nav.module.css'

const Navigation = ({ theme, setTheme }: { setTheme: any; theme: any }) => {
  const [isVisible, setIsVisible] = useState(true)
  let lastScrollTop = 0
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleTheme() {
    setTheme(!theme)
  }

  return (
    <nav className={`${styles.nav} ${isVisible ? '' : styles.hide}`}>
      {/* <div>IB</div> */}
      <NavLinks />
      <button onClick={toggleTheme}>THEME</button>
    </nav>
  )
}

export default Navigation
