import { useState, useEffect } from 'react';

import { ProjectModal } from '../../components/ProjectModal/ProjectModal';1

import styles from './ProjectCard.module.css';

export const ProjectCard = ( { title, description, imageSrc, githubUrl, skills, images } ) => {
    
    const [ isModalOpened, setisModalOpened ] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isModalOpened ? 'hidden' : 'auto';
      }, [isModalOpened]);

    return (
        <div className={styles.abc}>
            <ProjectModal 
                className={styles.projectModal} 
                isOpened={isModalOpened} 
                onClose={ () => setisModalOpened(false) }
                details={{title, description, imageSrc, githubUrl, skills, images}}
            />
            
            <div className={styles.container} onClick={ () => setisModalOpened(!isModalOpened) }>
                <img className={styles.projectImg} src={imageSrc} alt={`Image of ${title}`} />
                <div className={styles.cardContent}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{ description }</p>
                    <a className={styles.seeDetails}>See details →</a>
                </div>
            </div>
        </div>
    )
}
