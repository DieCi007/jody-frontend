import { NativeSelect } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BootstrapInput } from '../custom-mui';

const LanguageSelect = () => {
    const {i18n} = useTranslation();

    return (
        <NativeSelect sx={{borderColor: 'secondary.main'}}
                      defaultValue={i18n.language}
                      input={<BootstrapInput/>}
                      onChange={v => i18n.changeLanguage(v.target.value)}>
            <option value='it'>ITALIANO</option>
            <option value='en'>ENGLISH</option>
            <option value='al'>SHQIP</option>
        </NativeSelect>
    )
}

export default LanguageSelect;
