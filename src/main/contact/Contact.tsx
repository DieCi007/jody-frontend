import styles from './Contact.module.scss';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking, { MOVE_TYPE } from '@egjs/react-flicking';
import contact from '../../assets/images/home-4.jpeg';
import contact1 from '../../assets/images/home-3.jpeg';
import contact2 from '../../assets/images/home-2.jpeg';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import QuotationsForm from './components/quotation-form/QuotationsForm';
import JobsForm from './components/jobs-form/JobsForm';
import { useTranslation } from 'react-i18next';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Alert, Snackbar, useMediaQuery, useTheme } from '@mui/material';
import { IContactRequest } from './model/ContactRequest';
import { sendContactRequest } from './ContactService';

const Contact = () => {
    const autoPlayPlugin = new AutoPlay({duration: 4000, direction: 'NEXT', stopOnHover: true});
    const {pathname} = useLocation();
    const {t} = useTranslation();
    const {breakpoints} = useTheme();
    const isDownMd = useMediaQuery(breakpoints.down('md'));
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [loading, setLoading] = useState(false);

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

    const onFormSubmit = (request: IContactRequest) => {
        setLoading(true);
        sendContactRequest(request)
            .then(onSubmitSuccess)
            .catch(onSubmitError)
            .finally(() => setLoading(false));
    }

    const onSubmitSuccess = () => {
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
    }

    const onSubmitError = () => {
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
    }

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
                    <Route path='/' element={<QuotationsForm onFormSubmit={onFormSubmit} loading={loading}/>}/>
                    <Route path='/jobs' element={<JobsForm onFormSubmit={onFormSubmit} loading={loading}/>}/>
                    <Route path='/jobs/*' element={<JobsForm onFormSubmit={onFormSubmit} loading={loading}/>}/>
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
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackbarOpen} autoHideDuration={4000}
                      onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{width: '100%'}}>
                    {
                        snackbarSeverity === 'success' ?
                            <>
                                {t('contact.success')}
                            </> :
                            <>
                                {t('contact.error')} <a style={{textDecoration: 'none', color: 'rgb(177, 146, 0)'}}
                                                        href={`mailto:diego@jody.al`}>diego@jody.al</a>
                            </>
                    }
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Contact;
