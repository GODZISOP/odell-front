import styles from '../styles/Mission.module.css'

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Empowering Global Education Through Innovation
          </h1>
          <p className={styles.subtitle}>
            Transforming minds, building futures, and creating positive change through STEM education and neurological advancement
          </p>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.iconWrapper}>
                🎯
              </div>
              <h3>Vision</h3>
              <p>To create a world where every individual has access to transformative education that unlocks their potential and drives global innovation.</p>
            </div>
            
            <div className={styles.missionCard}>
              <div className={styles.iconWrapper}>
                🌍
              </div>
              <h3>Global Impact</h3>
              <p>Bridging educational gaps across continents through strategic STEM initiatives and neurological research applications.</p>
            </div>
            
            <div className={styles.missionCard}>
              <div className={styles.iconWrapper}>
                🚀
              </div>
              <h3>Innovation</h3>
              <p>Pioneering cutting-edge educational methodologies that integrate neuroscience with practical learning experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}