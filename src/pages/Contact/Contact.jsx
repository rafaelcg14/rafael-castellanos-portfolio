
import { getImageUrl } from '../../utils';

import styles from './Contact.module.css';

export const Contact = () => {
  
    return (
        <section className={styles.container}>
            
            <div className={styles.content}>
                <div className={styles.description}>
                    <h2 className={styles.subtitle}>Let’s Get in Touch!</h2>
                    <p>I’m always open to discuss new projects, collaborations, or opportunities to grow. If you'd like to connect, feel free to reach out through LinkedIn or send me an email.</p>
                    <p>Prefer email? Just click the button on the left, and my email will be copied to your clipboard!</p>
                </div>
                <div className={styles.items}>
                    <a className={styles.item} href="mailto:rafaelcg2718@gmail.com">
                        <img src={getImageUrl('contact/envelope-icon.svg')} alt="Email icon" />
                        <span>Email</span>
                    </a>
                    <a className={styles.item} href="https://github.com/rafaelcg14" target="_blank">
                        <img src={getImageUrl('contact/github-icon.svg')} alt="GitHub icon" />
                        <span>GitHub</span>
                    </a>
                    <a className={styles.item} href="https://www.linkedin.com/in/rafael-castellanos-guzman" target="_blank">
                        <img src={getImageUrl('contact/linkedin-icon.svg')} alt="LinkedIn icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

        </section>
    )
}
