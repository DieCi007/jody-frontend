import styles from './JobsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';

const JobsForm = () => {
    return (
        <form className={styles.container}>
            <NativeSelect sx={{borderColor: 'secondary.main'}}
                          defaultValue={'en'}
                          input={<BootstrapInput/>}>
                <option value='en'>Puno me ne</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">Numer Kontakti*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required/>
            <br/>
            <InputLabel htmlFor="info-box">Dy fjale rreth teje*</InputLabel>
            <BootstrapInput id='info-box' required multiline rows={5}/>
            <br/>
            <Button type='submit' variant='contained' color='secondary'>Dergo</Button>
        </form>
    )
}

export default JobsForm;
