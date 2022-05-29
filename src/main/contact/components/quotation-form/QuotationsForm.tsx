import styles from './QuotationsForm.module.scss';
import { Button, InputLabel, NativeSelect } from '@mui/material';
import { BootstrapInput } from '../../../components/custom-mui';

const QuotationsForm = () => {

    return (
        <form className={styles.container}>
            <NativeSelect sx={{borderColor: 'secondary.main'}}
                          defaultValue={'en'}
                          input={<BootstrapInput/>}>
                <option value='en'>Informacion</option>
                <option value='it'>Preventiv punimesh</option>
                <option value='al'>Automjete dhe pajisje me qera</option>
                <option value='al'>Pastrim dhe zhbllokim nga ujerat e zeza</option>
                <option value='al'>Tjeter</option>
            </NativeSelect>
            <br/>
            <InputLabel htmlFor="phone-number">Numer Kontakti*</InputLabel>
            <BootstrapInput id='phone-number' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            type='number' required/>
            <br/>
            <InputLabel htmlFor="info-box">Info*</InputLabel>
            <BootstrapInput id='info-box' required multiline rows={5}/>
            <br/>
            <Button type='submit' variant='contained' color='secondary'>Dergo</Button>
        </form>
    )
}

export default QuotationsForm;
