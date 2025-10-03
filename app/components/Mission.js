'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from '../styles/Mission.module.css'

export default function Mission() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // Changed to false so animations replay on scroll
      easing: 'ease-in-out', // Smoother easing function
      offset: 50, // Reduced offset for earlier trigger
      delay: 0,
      anchorPlacement: 'top-bottom',
      mirror: true, // Animations occur when scrolling past element in both directions
      disable: false
    })

    // Refresh AOS on window resize for better responsiveness
    const handleResize = () => {
      AOS.refresh()
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className={styles.mission}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 
            className={styles.title}
            data-aos="fade-down"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
          >
            Empowering Global Education Through Innovation
          </h1>
          <p 
            className={styles.subtitle}
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            Transforming minds, building futures, and creating positive change through STEM education and neurological advancement
          </p>
        </div>
        
        <div className={styles.content}>
          <div 
            className={styles.missionStatement}
            data-aos="zoom-in"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.mainText}>
              At OGLENN ENTERPRISES, we are dedicated to revolutionizing education on a global scale. 
              Our mission is to bridge the gap between cutting-edge neuroscience research and practical 
              educational applications, creating pathways for learners of all backgrounds to achieve their 
              full potential.
            </p>
          </div>

          <div 
            className={styles.visionSection}
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <h3 className={styles.subsectionTitle}>Our Vision</h3>
            <p className={styles.bodyText}>
              We envision a world where quality education transcends geographical boundaries and socioeconomic 
              barriers. Through strategic STEM initiatives and innovative neurological research applications, 
              we're building an ecosystem where every individual has access to transformative learning experiences 
              that unlock their unique capabilities and drive meaningful innovation.
            </p>
          </div>

          <div 
            className={styles.approachSection}
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <h3 className={styles.subsectionTitle}>Our Approach</h3>
            <p className={styles.bodyText}>
              We pioneer cutting-edge educational methodologies that integrate the latest findings in neuroscience 
              with hands-on, practical learning experiences. Our programs are designed to foster critical thinking, 
              creativity, and problem-solving skills while nurturing a deep passion for continuous learning and 
              intellectual growth.
            </p>
          </div>

          <div 
            className={styles.impactSection}
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <h3 className={styles.subsectionTitle}>Global Impact</h3>
            <p className={styles.bodyText}>
              Through collaboration with educators, institutions, and communities worldwide, we're creating 
              sustainable change that ripples across generations. Our work extends beyond traditional classrooms, 
              reaching underserved populations and empowering educators with the tools and knowledge needed to 
              inspire the next generation of innovators, leaders, and change-makers..
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}