
import { Timeline } from '../../components/Timeline/Timeline';

import { getImageUrl } from '../../utils';
import education from '../../data/education.json';

import styles from './Education.module.css';

export const Education = () => {
  
    return (
        <section className={styles.container} id='education'>
            <div className={styles.title}>
                <img src={getImageUrl('headers/education-icon.svg')} alt="Experience icon" />
                <h1>Education</h1>
            </div>
            
            <div className={styles.timeline}>
                <ul>
                    {
                        education.map((educationItem, index) => (
                            <Timeline
                                key={index}
                                role={educationItem.role}
                                organization={educationItem.organization}
                                date={educationItem.date}
                                description={educationItem.description}
                                additionalInfo={educationItem.additionalInfo}
                            />
                        ))
                    }
                </ul>
                    
            </div>

            <div className={styles.badges}>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/RafaelCastellanos-8806/B0394CF1DBAC90FC?sharingId" className={styles.badge} target="_blank">
                    <img src={getImageUrl('badges/ai-102.svg')} alt="AI-102 Badge" />
                </a>
            </div>
            

        </section>
    )
}
