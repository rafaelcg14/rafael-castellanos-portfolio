
import styles from './Timeline.module.css';

export const Timeline = ( { role, organization, date, description, additionalInfo } ) => {
    return (
        <li className={styles.box}>
            <span></span>
            <div className={styles.leftColumn}>
                <div className={styles.timelineTitle}>{ role }</div>
                <div className={styles.timelineCompanyName}>{ organization }</div>
                <div className={styles.timelineSubtitle}>{ date }</div>
            </div>
            <div className={styles.rightColumn}>
                <p className={styles.timelineInfo}>{ description }</p>
                {
                    additionalInfo &&
                    <a href={additionalInfo} target="_blank">Learn more →</a>
                }
            </div>
        </li>
    )
}
