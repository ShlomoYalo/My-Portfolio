import React from 'react'
import styles from './Hero.module.css';
export const Hero = () => {
  return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shlomo</h1>
            <p className={styles.description}>
                I'm a Software Developer who experience 
                with Java, Python, C#, Unity, React, 
                NodeJS and more. Reach out if you'd like to learn more! 
            </p>
            <a href= "mailto:shlomoyalo8@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src="assets/hero/heroImage2.png" 
            alt='Hero image of me' 
            className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}
