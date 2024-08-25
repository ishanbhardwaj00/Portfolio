import styles from './header.module.css'
import { Inter, Poppins } from '@next/font/google'

const poppins = Inter({
  weight: ['300', '700'],
  style: 'normal',
  subsets: ['latin'],
})

const Header = () => {
  return (
    <div className={`${styles.header} ${poppins.className}`}>
      <span className={`${styles.title}`}>FULL-STACK</span>
      <span className={`${styles.subtitle}`}>DEVELOPER</span>
    </div>
  )
}

export default Header
