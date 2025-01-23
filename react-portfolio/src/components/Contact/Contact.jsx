import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 className={styles.title}>Contact</h2>
            <p>Fell free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <il className={styles.link}>
                <img 
                    src={"/assets/contact/emailIcon.png"} alt="Email Icon"/>
                <a href="mailto:shlomoyalo8@gmail.com">Shlomoyalo8@gmail.com</a>    
            </il>
            <il className={styles.link}>
                <img 
                    src={"/assets/contact/linkedinIcon.png"} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/shlomo-yalo-85a01a22b">linkedin.com/shlomoyalo</a>    
            </il>
            <il className={styles.link}>
                <img 
                    src={"/assets/contact/githubIcon.png"} alt="Github Icon"/>
                <a href="https://github.com/ShlomoYalo">github.com/shlomoyalo</a>    
            </il>
        </ul>
    </footer>
  )
}
