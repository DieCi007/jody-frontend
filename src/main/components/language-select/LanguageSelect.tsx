import { InputBase, NativeSelect, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BootstrapInput = styled(InputBase)(({theme}) => ({
    '& .MuiInputBase-input': {
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper),
        border: '1px solid #fed100',
        fontSize: 16,
        padding: '8px 26px 8px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: '10px',
            borderColor: theme.palette.secondary.light,
            backgroundColor: theme.palette.background.paper,
        },
    },
}));

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
