import styles from '../styles/StemOutreach.module.css'

export default function StemOutreach() {
  return (
    <section className={styles.stemOutreach}>
      <div className={styles.container}>
        <h2 className={styles.title}>STEM Global Outreach</h2>
        <p className={styles.subtitle}>
          Expanding STEM education opportunities worldwide through innovative programs and partnerships
        </p>
        
        <div className={styles.programsGrid}>
          <div className={styles.program}>
            <div className={styles.programIcon}>🔬</div>
            <h3>Research Initiatives</h3>
            <p>Collaborative research programs that bridge theoretical knowledge with practical STEM applications in underserved communities.</p>
            <ul>
              <li>Mobile science laboratories</li>
              <li>Virtual reality learning experiences</li>
              <li>Community-based research projects</li>
            </ul>
          </div>
          
          <div className={styles.program}>
            <div className={styles.programIcon}>👥</div>
            <h3>Teacher Training</h3>
            <p>Comprehensive professional development programs for educators worldwide, focusing on innovative STEM teaching methodologies.</p>
            <ul>
              <li>Online certification programs</li>
              <li>Hands-on workshop series</li>
              <li>Mentorship networks</li>
            </ul>
          </div>
          
          <div className={styles.program}>
            <div className={styles.programIcon}>🌐</div>
            <h3>Global Partnerships</h3>
            <p>Strategic alliances with educational institutions, governments, and NGOs to implement scalable STEM education solutions.</p>
            <ul>
              <li>International school networks</li>
              <li>Government education initiatives</li>
              <li>Corporate social responsibility programs</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.impact}>
          <h3>Global Impact Metrics</h3>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.number}>50+</span>
              <span className={styles.label}>Countries Reached</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.number}>10,000+</span>
              <span className={styles.label}>Educators Trained</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.number}>500,000+</span>
              <span className={styles.label}>Students Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}