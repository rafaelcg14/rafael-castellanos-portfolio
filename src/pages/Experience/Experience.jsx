
import { Timeline } from '../../components/Timeline/Timeline';

import { getImageUrl } from '../../utils';
import experiences from '../../data/experiences.json';

import styles from './Experience.module.css';

export const Experience = () => {
  
    return (
        <section className={styles.container} id='experience'>
            <div className={styles.title}>
                <img src={getImageUrl('headers/experience-icon.svg')} alt="Experience icon" />
                <h1>Experience</h1>
            </div>
            <div className={styles.timeline}>
                <ul>
                    {
                        experiences.map((experience, index) => (
                            <Timeline
                                key={index}
                                role={experience.role}
                                organization={experience.organization}
                                date={experience.date}
                                description={experience.description}
                                additionalInfo={experience.additionalInfo}
                            />
                        ))
                    }
                </ul>
                    
            </div>

        </section>
    )
}
