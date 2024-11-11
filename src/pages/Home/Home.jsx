
import { getImageUrl } from '../../utils';

import styles from './Home.module.css';

export const Home = () => {
    return (
        <section className={styles.container}>
            <div className={styles.homeHeader}>
                <img className={styles.heroImg} src={getImageUrl('hero/hero-img.jpg')} alt="Hero Image" />
                <span className={styles.availabilityBackground}>
                    <span className={styles.availability}>Available to work</span>
                </span>
            </div>
            <div className={styles.descContainer}>
                <h1 className={styles.title}>Hi, I am Rafael Castellanos</h1>
                <p className={styles.presentation}>
                    <span>Electronics Engineering student</span> and <span>Microsoft Certified Azure AI Engineer</span> from <span className={styles.location}>Lima, Peru</span>. Specializing in <span>Data Analytics and Artificial Intelligence</span>. Currently enhancing my skills to turn data into actionable insights.
                </p>
            </div>
            <div className={styles.itemsContainer}>
                <a className={styles.item} href="mailto:rafaelcg2718@gmail.com">
                    <img src={getImageUrl('contact/envelope-icon.svg')} alt="Email icon" />
                    <span>Contact Me</span>
                </a>
                <a className={styles.item} href="https://www.google.com">
                    <img src={getImageUrl('contact/file-icon.svg')} alt="Resume icon" />
                    <span>Resume</span>
                </a>
                <a className={styles.item} href="https://www.linkedin.com/in/rafael-castellanos-guzman">
                    <img src={getImageUrl('contact/linkedin-icon.svg')} alt="LinkedIn icon" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}