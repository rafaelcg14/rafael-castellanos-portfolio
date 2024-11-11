import { InterestCard } from '../../components/InterestCard/InterestCard';

import { getImageUrl } from '../../utils';
import interests from '../../data/interests.json';

import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.title}>
                <img src={getImageUrl('headers/about-icon.svg')} alt="About icon" />
                <h1>About Me</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.presentation}>
                    <div className={styles.description}>
                        <p>Hi again! My name is Rafael Castellanos. I’m currently in my final semester of Electronics Engineering at Universidad Nacional Mayor de San Marcos (UNMSM) in Lima, Peru. Throughout my studies, I’ve developed a strong foundation in <span>programming applied to math and statistics</span>, which has fueled my passion for <span>Data Analytics and Artificial Intelligence</span>.</p>
                        <p>Beyond my interest in data, I have hands-on <span>experience in front-end development</span>, working with technologies like <span>React and Angular</span>. I’ve built interactive web applications, allowing me to combine data-driven insights with user-centric design.</p>
                        <p>I’m excited to <span>continue learning, solving complex problems, and creating impactful solutions—whether</span> through data analysis or building intuitive web experiences.</p>        
                    </div>
                    <img src="" alt="" />
                </div>
                <h3>Areas of Interest</h3>
                <article className={styles.interestsContainer}>
                    {
                        interests.map(( data, index ) => {
                            return (
                                <InterestCard 
                                    icon={ data.iconPath }
                                    title={ data.title }
                                    description={ data.description }
                                    key={ index }
                                />
                            )
                        })
                    }
                </article>
            </div>
        </section>
    )
}
