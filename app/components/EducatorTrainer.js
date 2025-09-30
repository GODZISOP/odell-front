import styles from '../styles/EducatorTrainer.module.css'

export default function EducatorTrainer() {
  return (
    <section className={styles.educatorTrainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Educator Trainer</h2>
        <p className={styles.subtitle}>
          Empowering educators worldwide with cutting-edge teaching methodologies and professional development programs
        </p>
        
        <div className={styles.content}>
          <div className={styles.philosophy}>
            <h3>Training Philosophy</h3>
            <p>
              Great educators aren't just born—they're developed through continuous learning, innovative methodologies, and supportive communities. Our training programs combine neuroscience-based teaching techniques with practical classroom applications.
            </p>
          </div>
          
          <div className={styles.programs}>
            <h3>Training Programs</h3>
            <div className={styles.programsGrid}>
              <div className={styles.program}>
                <div className={styles.programHeader}>
                  <span className={styles.icon}>🎓</span>
                  <h4>Certified STEM Educator Program</h4>
                </div>
                <p>Comprehensive 12-month certification program covering advanced STEM teaching methodologies, assessment strategies, and classroom management.</p>
                <div className={styles.features}>
                  <span>12 months</span>
                  <span>Online & In-person</span>
                  <span>Certificate</span>
                </div>
              </div>
              
              <div className={styles.program}>
                <div className={styles.programHeader}>
                  <span className={styles.icon}>🧠</span>
                  <h4>Neuroscience-Based Learning Workshop</h4>
                </div>
                <p>Intensive workshops focusing on how brain science can inform teaching practices and improve student engagement and retention.</p>
                <div className={styles.features}>
                  <span>3-day intensive</span>
                  <span>Hands-on</span>
                  <span>CPE Credits</span>
                </div>
              </div>
              
              <div className={styles.program}>
                <div className={styles.programHeader}>
                  <span className={styles.icon}>🌐</span>
                  <h4>Global Education Leadership</h4>
                </div>
                <p>Leadership development program for education administrators and policy makers focused on implementing systemic educational change.</p>
                <div className={styles.features}>
                  <span>6 months</span>
                  <span>Cohort-based</span>
                  <span>Leadership Certificate</span>
                </div>
              </div>
              
              <div className={styles.program}>
                <div className={styles.programHeader}>
                  <span className={styles.icon}>💻</span>
                  <h4>Digital Learning Transformation</h4>
                </div>
                <p>Training educators to effectively integrate technology and digital tools into their teaching practice for enhanced learning outcomes.</p>
                <div className={styles.features}>
                  <span>8 weeks</span>
                  <span>Virtual</span>
                  <span>Tech Certification</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.methodology}>
            <h3>Training Methodology</h3>
            <div className={styles.methodGrid}>
              <div className={styles.method}>
                <h4>Evidence-Based Practices</h4>
                <p>All training content is grounded in peer-reviewed research and proven educational methodologies.</p>
              </div>
              <div className={styles.method}>
                <h4>Hands-On Application</h4>
                <p>Participants immediately apply new concepts through practical exercises and real classroom scenarios.</p>
              </div>
              <div className={styles.method}>
                <h4>Peer Collaboration</h4>
                <p>Training includes collaborative learning experiences with educators from diverse backgrounds and contexts.</p>
              </div>
              <div className={styles.method}>
                <h4>Ongoing Support</h4>
                <p>Continuous mentorship and resource access ensure long-term implementation success.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.outcomes}>
            <h3>Training Outcomes</h3>
            <div className={styles.outcomeStats}>
              <div className={styles.outcome}>
                <span className={styles.percentage}>95%</span>
                <span className={styles.description}>Completion Rate</span>
              </div>
              <div className={styles.outcome}>
                <span className={styles.percentage}>87%</span>
                <span className={styles.description}>Implement New Techniques</span>
              </div>
              <div className={styles.outcome}>
                <span className={styles.percentage}>92%</span>
                <span className={styles.description}>Report Improved Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}