'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/ContactPage.module.css';

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.1/dist/dotlottie-wc.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-out-cubic',
        mirror: true,
      });
    };
    initAOS();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Side - Lottie Animation */}
      

        {/* Right Side - Contact Form */}
        <div className={styles.formSection}>
          <div className={styles.formWrapper}>
            <h1 className={styles.title} data-aos="fade-down">Get In Touch</h1>
            <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
              Fill out the form below and we'll get back to you shortly
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup} data-aos="fade-right" data-aos-delay="200">
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup} data-aos="fade-left" data-aos-delay="300">
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup} data-aos="fade-right" data-aos-delay="400">
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup} data-aos="fade-left" data-aos-delay="500">
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.button} >
                <span>Send Message</span>
                <span className={styles.buttonIcon}>→</span>
              </button>
            </form>
          </div>
        </div>
  <div className={styles.lottieSection}>
          <div className={styles.lottieContent} data-aos="zoom-in">
            <dotlottie-wc
              src="https://lottie.host/d7de2f8e-32ce-455a-8bcb-3016875d976a/O9QFyDMAKM.lottie"
              className={styles.lottieAnimation}
              style={{ width: '100vw', height: '80vh' }}
              autoplay
              loop
            ></dotlottie-wc>
          </div>
        </div>

      </div>
    </div>
  );
}