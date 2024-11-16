import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


import { getImageUrl } from '../../utils';

import styles from './ProjectModal.module.css';

const mountElement = document.getElementById('project-modal');

export const ProjectModal = ( {isOpened, onClose, details} ) => {
    
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscapeKey);
        
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);
    
    if ( !isOpened ) {
        return null;
    }

    return createPortal(
        <div className={styles.modal}>
            <section className={styles.container} ref={modalRef}>
                <div className={styles.content} >
                    <div className={styles.closeBtnContainer} onClick={onClose}>
                        <img 
                        className={styles.closeBtn} 
                        src={getImageUrl('nav/closeMenu.svg')} 
                        alt="close-modal-btn"
                        />
                    </div>
                    
                    <div className={styles.presentation}>
                        <div className={styles.contentItem}>
                            <h2 className={styles.titleProject}>{details.title}</h2>
                            <p className={styles.descriptionProject}>{details.introduction}</p>
                            <a href={details.githubUrl} className={styles.linkProject} target="_blank">{details.githubUrl}</a>
                            <div className={styles.skills}>
                                { details.skills.map( (skill, id) => {
                                    return (
                                        <div key={id} className={styles.skill}>
                                            <img className={styles.skillImg} src={getImageUrl(skill.skillIcon)} alt={skill.skillName} />
                                            <span className={styles.skillName}>{skill.skillName}</span>
                                        </div>
                                    );
                                } ) }
                            </div>

                            <div className={styles.imageContainer}>
                                {
                                    details.images.map( (image, index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                className={styles.imageItemContainer}
                                            >
                                                <img 
                                                    className={styles.imageItem}
                                                    src={image.imgUrl}
                                                    alt={image.imgName}
                                                />
                                                <span className={styles.imgTitle}>{image.imgName}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        

                    </div>
                    
                </div>
            </section>
        </div>
    , mountElement)
  
}
