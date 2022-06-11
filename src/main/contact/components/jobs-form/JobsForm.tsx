import styles from './JobsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';
import { useTranslation } from 'react-i18next';
import { FormProps } from '../quotation-form/QuotationsForm';
import React, { useRef } from 'react';
import { IContactRequest } from '../../model/ContactRequest';

const JobsForm = ({onFormSubmit, loading}: FormProps) => {
    const {t} = useTranslation();
    // TODO: apparently I have two quite similar components. Refactor if you have time :)
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
                          defaultValue={'kerkese per pune'}
                          input={<BootstrapInput/>} inputRef={typeRef}>
                <option value='kerkese per pune'>{t('jobsHeader')}</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">{t('contact.number')}*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required inputRef={contactRef}/>
            <br/>
            <InputLabel htmlFor="info-box">{t('jobs.aboutYou')}*</InputLabel>
            <BootstrapInput inputRef={messageRef} id='info-box' required multiline rows={5}/>
            <br/>
            <Button disabled={loading} type='submit' variant='contained' color='secondary'>{t('send')}</Button>
        </form>
    )
}

export default JobsForm;
