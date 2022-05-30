import styles from './JobsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';
import { useTranslation } from 'react-i18next';

const JobsForm = () => {
    const {t} = useTranslation();
    return (
        <form className={styles.container}>
            <NativeSelect sx={{borderColor: 'secondary.main'}}
                          defaultValue={'en'}
                          input={<BootstrapInput/>}>
                <option value='en'>{t('jobsHeader')}</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">{t('contact.number')}*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required/>
            <br/>
            <InputLabel htmlFor="info-box">{t('jobs.aboutYou')}*</InputLabel>
            <BootstrapInput id='info-box' required multiline rows={5}/>
            <br/>
            <Button type='submit' variant='contained' color='secondary'>{t('send')}</Button>
        </form>
    )
}

export default JobsForm;
