import NavLinks from '../NavLink/NavLink'
import styles from './nav.module.css'

const Navigation = () => {
  return (
    <div className={styles.nav}>
      {/* <div>IB</div> */}
      <NavLinks />
    </div>
  )
}

export default Navigation
