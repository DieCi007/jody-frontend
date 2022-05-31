import styles from './Contact.module.scss';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking, { MOVE_TYPE } from '@egjs/react-flicking';
import contact from '../../assets/images/home-4.jpeg';
import contact1 from '../../assets/images/home-3.jpeg';
import contact2 from '../../assets/images/home-2.jpeg';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import QuotationsForm from './components/quotation-form/QuotationsForm';
import JobsForm from './components/jobs-form/JobsForm';
import { useTranslation } from 'react-i18next';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useMediaQuery, useTheme } from '@mui/material';

const Contact = () => {
    const autoPlayPlugin = new AutoPlay({duration: 4000, direction: 'NEXT', stopOnHover: true});
    const {pathname} = useLocation();
    const {t} = useTranslation();
    const {breakpoints} = useTheme();
    const isDownMd = useMediaQuery(breakpoints.down('md'));
    const contacts = [
        {
            name: 'Simon Cipa',
            location: t('administrator'),
            phone: '+355 692094007',
            mail: 'simon@jody.al'
        },
        {
            name: 'Joni Cipa',
            location: t('mainOffice'),
            phone: '+355 695529281',
            mail: 'joni@jody.al'
        }
    ]
    return (
        <div className={styles.container}>
            <section className={styles.topSection}>
                <Flicking moveType={[MOVE_TYPE.STRICT, {count: 1}]}
                          circular={true} duration={700} plugins={[autoPlayPlugin]}>
                    <div className={styles.flickingImg} style={{backgroundImage: `url(${contact}`}}/>
                    <div className={styles.flickingImg} style={{backgroundImage: `url(${contact1}`}}/>
                    <div className={styles.flickingImg} style={{backgroundImage: `url(${contact2}`}}/>
                </Flicking>
                <div className={styles.titleContainer}>
                    <div
                        className={styles.title}>{pathname.includes('jobs') ? t('jobs.title')
                        : <>{t('contact.title')} <i>Jody Company</i></>}</div>
                    <div
                        className={styles.description}>{pathname.includes('jobs') ? t('jobs.description') : t('contact.description')}</div>
                </div>
            </section>
            <section className={styles.contactSection}>
                <Routes>
                    <Route path='/' element={<QuotationsForm/>}/>
                    <Route path='/jobs' element={<JobsForm/>}/>
                    <Route path='/jobs/*' element={<JobsForm/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </section>
            <section className={styles.addressSection}
                     style={{paddingBottom: isDownMd ? '50px' : '.5rem'}}>
                <div className={styles.address}><LocationOnOutlinedIcon/>{t('address')}</div>
                {
                    contacts.map(c => (
                        <div key={c.name} className={styles.contactBox}>
                            <div className={styles.contactName}>{c.name}</div>
                            <div>{c.location}</div>
                            <div className={styles.iconContact}>
                                <LocalPhoneOutlinedIcon/>
                                <span><i>{c.phone}</i></span>
                                <AlternateEmailIcon/>
                                <a href={`mailto:${c.mail}`}>{c.mail}</a>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Contact;
