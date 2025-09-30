import styles from '../styles/NeuroChange.module.css'

export default function NeuroChange() {
  return (
    <section className={styles.neuroChange}>
      <div className={styles.container}>
        <h2 className={styles.title}>Global Neuro Change Director</h2>
        <p className={styles.subtitle}>
          Leading revolutionary approaches to understanding and optimizing human learning through neuroscience
        </p>
        
        <div className={styles.content}>
          <div className={styles.overview}>
            <h3>Transforming Education Through Neuroscience</h3>
            <p>
              As Global Neuro Change Director, Dr. Glenn spearheads initiatives that integrate cutting-edge neuroscientific research with educational practices, creating more effective and personalized learning experiences.
            </p>
          </div>
          
          <div className={styles.initiatives}>
            <div className={styles.initiative}>
              <div className={styles.initiativeHeader}>
                <span className={styles.icon}>🧠</span>
                <h4>Neuroplasticity Research</h4>
              </div>
              <p>Investigating how the brain adapts and changes during learning processes to develop more effective educational strategies.</p>
            </div>
            
            <div className={styles.initiative}>
              <div className={styles.initiativeHeader}>
                <span className={styles.icon}>📊</span>
                <h4>Cognitive Assessment Tools</h4>
              </div>
              <p>Developing advanced assessment methodologies that measure learning effectiveness and cognitive development patterns.</p>
            </div>
            
            <div className={styles.initiative}>
              <div className={styles.initiativeHeader}>
                <span className={styles.icon}>🎯</span>
                <h4>Personalized Learning Algorithms</h4>
              </div>
              <p>Creating AI-driven systems that adapt educational content based on individual neurological learning profiles.</p>
            </div>
            
            <div className={styles.initiative}>
              <div className={styles.initiativeHeader}>
                <span className={styles.icon}>🔬</span>
                <h4>Clinical Applications</h4>
              </div>
              <p>Translating neuroscience research into practical applications for learning disabilities and cognitive enhancement.</p>
            </div>
          </div>
          
          <div className={styles.research}>
            <h3>Current Research Focus</h3>
            <div className={styles.researchAreas}>
              <div className={styles.researchArea}>
                <h4>Memory Consolidation</h4>
                <p>Optimizing long-term retention through strategic learning intervals and neurological feedback mechanisms.</p>
              </div>
              <div className={styles.researchArea}>
                <h4>Attention Enhancement</h4>
                <p>Developing techniques to improve focus and attention span in diverse learning environments.</p>
              </div>
              <div className={styles.researchArea}>
                <h4>Emotional Learning Integration</h4>
                <p>Understanding the role of emotions in learning and memory formation for enhanced educational outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}