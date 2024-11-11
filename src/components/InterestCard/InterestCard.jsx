import { getImageUrl } from '../../utils';

import styles from './InterestCard.module.css';

export const InterestCard = ( { title, description, icon } ) => {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.icon} src={getImageUrl(icon)} alt="Interest icon" />
            <h4 className={styles.title}>{ title }</h4>
            <p className={styles.description}>{ description }</p>
        </div>
    )
}
