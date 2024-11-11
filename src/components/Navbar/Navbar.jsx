import { useEffect, useState } from 'react';

import styles from './Navbar.module.css';

export const Navbar = () => {

    const [ activeSection, setActiveSection ] = useState(null);

    useEffect( () => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver( ( entries ) => {
            entries.forEach( ( entry ) => {
                if ( entry.isIntersecting ) {
                    setActiveSection( entry.target.id );
                }
            } );
        }, observerOptions );

        sections.forEach( (section) => observer.observe(section) );

        return () => {
            sections.forEach( (section) => observer.unobserve(section) );
        };
    }, [] );

    return (
        <nav
            className={styles.navbar}
        >
            <div className={styles.menu}>
                <ul className={styles.menuItems }>
                    <li>
                        <a href="#about" className={ activeSection === 'about' ? styles.active : '' }>About</a>
                    </li>
                    <li>
                        <a href="#projects" className={ activeSection === 'projects' ? styles.active : '' }>Projects</a>
                    </li>
                    <li>
                        <a href="#experience" className={ activeSection === 'experience' ? styles.active : '' }>Experience</a>
                    </li>
                    <li>
                        <a href="#education" className={ activeSection === 'education' ? styles.active : '' }>Education</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
