import { Oswald } from '@next/font/google'
import styles from './main.module.css'
import Image from 'next/image'

const oswald = Oswald({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
})

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.about}>
          <div>
            <h1 className={`${styles.firstName} ${oswald.className}`}>ISHAN</h1>
            <h1 className={`${styles.lastName} ${oswald.className}`}>
              BHARDWAJ
            </h1>
          </div>
          <div>
            <span className={styles.code}>&lt;</span>
            <span className={styles.code}>&gt;</span>{' '}
          </div>
          <div className={styles.aboutMe}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            assumenda expedita ex quasi vel vero. At nihil quod dolor dicta
            minus quaerat dolorem tenetur excepturi! Accusantium ea doloribus
            perspiciatis voluptatum dolores repellat deserunt autem? Corrupti
            numquam ut voluptatem eaque sit quod distinctio, vitae culpa
            suscipit nobis ducimus provident dicta odit vero error laborum,
            dolor beatae esse soluta nesciunt at impedit quaerat. Adipisci optio
            totam praesentium? Corporis nemo expedita, dolorem asperiores veniam
            consectetur placeat non perspiciatis.
          </div>
        </div>
      </div>
      <div className={styles.meContainer}>
        <img
          className={styles.me}
          src="/images/me.png"
          alt="Ishan in Udaipur"
        />
      </div>
    </main>
  )
}

export default Main
