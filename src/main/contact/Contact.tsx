import styles from './Contact.module.scss';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking, { MOVE_TYPE } from '@egjs/react-flicking';
import contact from '../../assets/images/home-4.jpeg';
import contact1 from '../../assets/images/home-3.jpeg';
import contact2 from '../../assets/images/home-2.jpeg';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import QuotationsForm from './components/quotation-form/QuotationsForm';
import JobsForm from './components/jobs-form/JobsForm';

const Contact = () => {
    const autoPlayPlugin = new AutoPlay({duration: 4000, direction: 'NEXT', stopOnHover: true});
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
                    <div className={styles.title}>Informacion apo preventiv punimesh? Lidhu me <i>Jody Company</i></div>
                    <div className={styles.description}>Zgjidh nje nga kategorite me poshte dhe dergo nje kerkese. Do te
                        kontaktohesh se shpejti.
                    </div>
                </div>
            </section>
            <section className={styles.bottomSection}>
                <Routes>
                    <Route path='/' element={<QuotationsForm/>}/>
                    <Route path='/jobs' element={<JobsForm/>}/>
                    <Route path='/jobs/*' element={<JobsForm/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </section>
        </div>
    )
}

export default Contact;
/*
const plugin = new AutoPlay({duration: 4000 + index * 500, direction: 'NEXT', stopOnHover: true});
    const {palette} = useTheme();

    return <div style={{backgroundColor: palette.background.paper, ...style}}
                className={`${classNames ? classNames.join(' ') : ''} ${styles.container}`}>
        <Flicking plugins={[plugin]} circular={true} duration={700}>
            {
                images.map(imgName => (
                    <div key={imgName} className={styles.image}
                         style={{backgroundImage: `url(${imgName}`}}/>
                ))
            }
        </Flicking>
    </div>
 */
