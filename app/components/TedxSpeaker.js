import styles from '../styles/TedxSpeaker.module.css'

export default function TedxSpeaker() {
  return (
    <section className={styles.tedxSpeaker}>
      <div className={styles.container}>
        <h2 className={styles.title}>Global TEDx Speaker</h2>
        <p className={styles.subtitle}>
          Inspiring audiences worldwide with transformative ideas about education, neuroscience, and human potential
        </p>
        
        <div className={styles.content}>
          <div className={styles.speakerProfile}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playButton}>▶</div>
              <span>Watch Latest TEDx Talk</span>
            </div>
            
            <div className={styles.profileText}>
              <h3>Inspiring Global Change</h3>
              <p>
                Dr. Glenn's TEDx presentations have captivated audiences across the globe, sharing groundbreaking insights into how neuroscience can revolutionize education and unlock human potential. His talks blend scientific rigor with practical applications, making complex concepts accessible to diverse audiences.
              </p>
            </div>
          </div>
          
          <div className={styles.talks}>
            <h3>Featured TEDx Presentations</h3>
            <div className={styles.talksGrid}>
              <div className={styles.talk}>
                <h4>"The Neuroscience of Learning: Rewiring Education for the 21st Century"</h4>
                <p className={styles.venue}>TEDx Cambridge</p>
                <p>Exploring how understanding brain plasticity can transform educational approaches and improve learning outcomes globally.</p>
                <div className={styles.stats}>
                  <span>2.3M+ Views</span>
                  <span>15 Languages</span>
                </div>
              </div>
              
              <div className={styles.talk}>
                <h4>"Breaking Barriers: STEM Education in Underserved Communities"</h4>
                <p className={styles.venue}>TEDx Johannesburg</p>
                <p>Addressing the global education gap and innovative solutions for bringing STEM education to every corner of the world.</p>
                <div className={styles.stats}>
                  <span>1.8M+ Views</span>
                  <span>12 Languages</span>
                </div>
              </div>
              
              <div className={styles.talk}>
                <h4>"The Future of Learning: AI, Neuroscience, and Human Connection"</h4>
                <p className={styles.venue}>TEDx Singapore</p>
                <p>Examining the intersection of technology and human cognition in shaping the future of educational experiences.</p>
                <div className={styles.stats}>
                  <span>3.1M+ Views</span>
                  <span>18 Languages</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.impact}>
            <h3>Speaking Impact</h3>
            <div className={styles.impactStats}>
              <div className={styles.stat}>
                <span className={styles.number}>50+</span>
                <span className={styles.label}>TEDx Events</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>25</span>
                <span className={styles.label}>Countries</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>7.2M+</span>
                <span className={styles.label}>Total Views</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>30+</span>
                <span className={styles.label}>Languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}