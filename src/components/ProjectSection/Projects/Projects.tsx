import styles from './projects.module.css'

const Projects = () => {
  return (
    <div className={styles.main}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectTitle}>My Projects</div>
        <div className={styles.projectList}>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
