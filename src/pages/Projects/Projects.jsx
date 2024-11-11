import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <div className={styles.title}>
                <img src={getImageUrl('headers/projects-icon.svg')} alt="Project icon" />
                <h1>Projects</h1>
            </div>
            <div className={styles.projects}>
                {
                    projects.map(( project, index ) => {
                        return (
                            <ProjectCard 
                                title={ project.title }
                                description={ project.description }
                                imageSrc={ project.imageSrc }
                                githubUrl={ project.githubUrl }
                                skills={ project.skills }
                                images={ project.images }
                                key={ index }
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
