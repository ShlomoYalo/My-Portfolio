import React from 'react'
import styles from './About.module.css';
import  { getImageUrl } from "../../utils";

export const About = () => {
  return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/aboutImage.png" 
                            alt="Cursor icon"
                            className={styles.aboutImage} 
                        />
                        <div className={styles.aboutItemText}>
                           <h3>Software Developer</h3>
                            <p>
                            A passionate and motivated software developer with a degree in computer science. 
                            I specialize in backend development and have strong expertise in Python and Java. 
                            My experience includes working with Unity to create engaging and dynamic projects, including scripting with Pride Script.
                            As a lifelong learner, I take pride in tackling complex problems and delivering efficient, well-structured solutions.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/familyImage.png" 
                            alt="Server icon" 
                            className={styles.aboutImage}
                        />
                        <div className={styles.aboutItemText}>
                        <h3>My life</h3>
                            <p>
                            Beyond my professional pursuits, I'm a proud husband and father who cherishes time spent with my family.
                            In my personal life, I enjoy diving into the worlds of video games and books, always eager to discover new stories and ideas. 
                            I'm also an avid traveler who loves exploring new places, cultures, and experiences, as they often inspire my creativity and perspective.
                            Whether it's coding, gaming, reading, or traveling, I'm always seeking opportunities to grow, learn, and connect with the world around me.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}
