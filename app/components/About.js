import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.profileImage}>
              <div className={styles.placeholder}>
                Dr. Odell Glenn
              </div>
            </div>
          </div>
          
          <div className={styles.textSection}>
            <h2 className={styles.title}>About Dr. Odell Glenn</h2>
            <p className={styles.introduction}>
              A visionary leader in education and neuroscience, Dr. Odell Glenn has dedicated his career to revolutionizing how we understand and implement learning methodologies.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>Educational Background</h3>
                <p>Advanced degrees in Education and Neuroscience, with specialized research in cognitive learning processes and global educational systems.</p>
              </div>
              
              <div className={styles.highlight}>
                <h3>Professional Journey</h3>
                <p>Over two decades of experience spanning classroom education, research institutions, and international educational consulting.</p>
              </div>
              
              <div className={styles.highlight}>
                <h3>Core Philosophy</h3>
                <p>Believes in the transformative power of education when combined with neurological insights and innovative teaching methodologies.</p>
              </div>
            </div>
            
            <div className={styles.achievements}>
              <h3>Key Achievements</h3>
              <ul>
                <li>Founded OGLENN ENTERPRISES, LLC to scale educational innovation globally</li>
                <li>Developed proprietary learning frameworks based on neuroscience research</li>
                <li>Consulted for educational institutions across five continents</li>
                <li>Published research on cognitive learning enhancement techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}