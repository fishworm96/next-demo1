import Image from 'next/image'
import styles from '@/styles/styles.module.css'
import mountains from '../../../public/mountains.jpg'

const BackgroundPage = () => (
  <div>
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default BackgroundPage
