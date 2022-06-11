import styles from './QuotationsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';
import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { IContactRequest } from '../../model/ContactRequest';

export type FormProps = {
    onFormSubmit: (request: IContactRequest) => void,
    loading: boolean
}
const QuotationsForm = ({onFormSubmit, loading}: FormProps) => {
    const {t} = useTranslation();

    const typeRef = useRef<HTMLSelectElement>(null);
    const contactRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const request: IContactRequest = {
            type: typeRef.current?.value || '',
            contactNo: contactRef.current?.value || '',
            message: messageRef.current?.value || ''
        }
        onFormSubmit(request);
    }

    return (
        <form className={styles.container} onSubmit={e => onSubmit(e)}>
            <NativeSelect sx={{borderColor: 'secondary.main'}}
                          defaultValue='informacion'
                          input={<BootstrapInput/>} inputRef={typeRef}>
                <option value='informacion'>{t('contact.info')}</option>
                <option value='preventiv'>{t('contact.quotation')}</option>
                <option value='mjete me qera'>{t('contact.renting')}</option>
                <option value='ujera te zeza'>{t('contact.eco')}</option>
                <option value='tjeter'>{t('contact.other')}</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">{t('contact.number')}*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required inputRef={contactRef}/>
            <br/>
            <InputLabel htmlFor="info-box">{t('contact.details')}*</InputLabel>
            <BootstrapInput inputRef={messageRef} id='info-box' required multiline rows={5}/>
            <br/>
            <Button disabled={loading} type='submit' variant='contained' color='secondary'>{t('send')}</Button>
        </form>
    )
}

export default QuotationsForm;
