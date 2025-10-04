'use client'
import { useEffect } from 'react'
import styles from '../styles/About.module.css'

export default function About() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-out-cubic',
        mirror: true,
      })
    }
    initAOS()
  }, [])

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection} data-aos="fade-right">
            <div className={styles.profileImage}>
              <div className={styles.placeholder}>
                Dr. Odell Glenn
              </div>
            </div>
          </div>
          
          <div className={styles.textSection}>
            <h2 className={styles.title} data-aos="fade-down">About Dr. Odell Glenn</h2>
            <p className={styles.introduction} data-aos="fade-up" data-aos-delay="100">
              A visionary leader in education and neuroscience, Dr. Odell Glenn has dedicated his career to revolutionizing how we understand and implement learning methodologies.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlight} data-aos="fade-up" data-aos-delay="200">
                <h3>Educational Background</h3>
                <p>Advanced degrees in Education and Neuroscience, with specialized research in cognitive learning processes and global educational systems.</p>
              </div>
              
              <div className={styles.highlight} data-aos="fade-up" data-aos-delay="300">
                <h3>Professional Journey</h3>
                <p>Over two decades of experience spanning classroom education, research institutions, and international educational consulting.</p>
              </div>
              
              <div className={styles.highlight} data-aos="fade-up" data-aos-delay="400">
                <h3>Core Philosophy</h3>
                <p>Believes in the transformative power of education when combined with neurological insights and innovative teaching methodologies.</p>
              </div>
            </div>
            
            <div className={styles.achievements} data-aos="fade-left" data-aos-delay="500">
              <h3>Key Achievements</h3>
              <ul>
                <li data-aos="fade-left" data-aos-delay="600">Founded OGLENN ENTERPRISES, LLC to scale educational innovation globally</li>
                <li data-aos="fade-left" data-aos-delay="700">Developed proprietary learning frameworks based on neuroscience research</li>
                <li data-aos="fade-left" data-aos-delay="800">Consulted for educational institutions across five continents</li>
                <li data-aos="fade-left" data-aos-delay="900">Published research on cognitive learning enhancement techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}