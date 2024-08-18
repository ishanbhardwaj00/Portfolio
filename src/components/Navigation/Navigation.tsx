import NavLinks from '../NavLink/NavLink'
import styles from './nav.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {/* <div>IB</div> */}
      <NavLinks />
    </nav>
  )
}

export default Navigation
