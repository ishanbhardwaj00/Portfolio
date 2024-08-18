import styles from './navlink.module.css'

type NavItemType = {
  title: string
  button: boolean
}

const navItems: NavItemType[] = [
  {
    title: 'About',
    button: false,
  },
  {
    title: 'Skills',
    button: false,
  },
  {
    title: 'Projects',
    button: false,
  },
  {
    title: 'Contact',
    button: true,
  },
]
const NavLink = () => {
  return (
    <div className={styles.container}>
      {navItems.map(({ title, button }) => {
        if (button) return <div className={styles.button}>{title}</div>
        return <div className={styles.item}>{title}</div>
      })}
    </div>
  )
}

export default NavLink
