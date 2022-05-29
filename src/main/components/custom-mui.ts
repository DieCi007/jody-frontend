import { InputBase, styled } from '@mui/material';

export const BootstrapInput = styled(InputBase)(({theme}) => ({
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
