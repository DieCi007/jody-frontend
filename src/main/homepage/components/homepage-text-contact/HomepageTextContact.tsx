import styles from './HomepageTextContact.module.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HomepageTextContact = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content} onClick={() => navigate('/contact')}>
                {t('contactsHeader')}
            </div>
        </div>
    )
}

export default HomepageTextContact;
