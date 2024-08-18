import { Oswald } from '@next/font/google'
import styles from './skills.module.css'
import Keyboard from '../Keyboard/Keyboard'

const oswald = Oswald({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
})

const Skills = () => {
  return (
    <div className={`${styles.container} ${oswald.className}`}>
      <div className={styles.main}>
        <div className={`${styles.header} ${oswald.className}`}>
          <h1 className={styles.heading}>Technical Skills</h1>
          <span className={styles.subHeading}>
            (hover your cursor over the keyboard)
          </span>
        </div>
        <Keyboard />
      </div>
    </div>
  )
}

export default Skills
