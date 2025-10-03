'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import styles from '../styles/CoursesSection.module.css'

export default function CoursesSection() {
  const [activeCard, setActiveCard] = useState(0)

  const courses = [
    {
      title: 'Neuro Change Practitioner Course',
      color: 'rgba(163, 230, 53, 0.5)',
      items: [
        'Guide your clients through the process of Neuro Change from Purpose to Neuroplasticity.',
        'A complete online and live system with all the tools you need to deliver to your clients.',
      ],
    },
    {
      title: 'Electives',
      color: 'rgba(251, 191, 36, 0.5)',
      items: [
        'Master Practitioner',
        'Neuro Health Practitioner (Mental Health)',
        'Science of Excellence (Corporate Trainer)',
        'Youth Potential Practitioner',
      ],
    },
    {
      title: 'Master Trainer Opportunity',
      color: 'rgba(249, 168, 212, 0.5)',
      items: [
        'You represent the Institute offering structured mentoring to practitioner level students live or online',
        'Speak to our Global Director for suitability.',
      ],
    },
  ]

  const handleCardClick = (index) => {
    if (index !== activeCard) {
      setActiveCard((activeCard + 1) % 3)
    }
  }

  const getCardStyle = (index) => {
    const position = (index - activeCard + 3) % 3
    if (position === 0) {
      return { 
        zIndex: 3, 
        transform: 'translate(-50%, -50%) translateY(0) scale(1)', 
        opacity: 1, 
        pointerEvents: 'auto' 
      }
    } else if (position === 1) {
      return { 
        zIndex: 2, 
        transform: 'translate(-50%, -50%) translateY(100px) scale(0.92)', 
        opacity: 0.65, 
        pointerEvents: 'none' 
      }
    } else {
      return { 
        zIndex: 1, 
        transform: 'translate(-50%, -50%) translateY(200px) scale(0.84)', 
        opacity: 0.35, 
        pointerEvents: 'none' 
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>What Our Courses Offer You</h2>
        </div>

        <div className={styles.cardsWrapper}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleCardClick(index)}
              style={{
                ...getCardStyle(index),
                '--dot-color': course.color,
                '--header-bg': course.color,
              }}
            >
              <div
                className={styles.decorativeCorner}
                style={{ background: `linear-gradient(to bottom left, ${course.color}, transparent)` }}
              ></div>

              <header className={styles.cardHeader}>
                <h2>{course.title}</h2>
                <label
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveCard((prev) => (prev + 1) % 3)
                  }}
                >
                  &#10539;
                </label>
              </header>

              <div className={styles.cardContent}>
                <ul className={styles.itemsList}>
                  {course.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <div className={styles.iconWrapper}>
                        <div className={styles.iconCircle}>
                          <ChevronRight className={styles.icon} />
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}