import Divider from './Divider/Divider'
import Header from './Header/Header'
import styles from './projects.module.css'
import Projects from './Projects/Projects'

const ProjectSection = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Divider />
      <Projects />
    </div>
  )
}

export default ProjectSection
