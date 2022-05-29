import styles from './HomepageTextContact.module.scss';
import { useTranslation } from 'react-i18next';

const HomepageTextContact = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {t('contactsHeader')}
            </div>
        </div>
    )
}

export default HomepageTextContact;
