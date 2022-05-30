import styles from './QuotationsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';
import { useTranslation } from 'react-i18next';

const QuotationsForm = () => {
    const {t} = useTranslation();

    return (
        <form className={styles.container}>
            <NativeSelect sx={{borderColor: 'secondary.main'}}
                          defaultValue='informacion'
                          input={<BootstrapInput/>}>
                <option value='informacion'>{t('contact.info')}</option>
                <option value='preventiv'>{t('contact.quotation')}</option>
                <option value='mjete me qera'>{t('contact.renting')}</option>
                <option value='ujera te zeza'>{t('contact.eco')}</option>
                <option value='tjeter'>{t('contact.other')}</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">{t('contact.number')}*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required/>
            <br/>
            <InputLabel htmlFor="info-box">{t('contact.details')}*</InputLabel>
            <BootstrapInput id='info-box' required multiline rows={5}/>
            <br/>
            <Button type='submit' variant='contained' color='secondary'>Dergo</Button>
        </form>
    )
}

export default QuotationsForm;
