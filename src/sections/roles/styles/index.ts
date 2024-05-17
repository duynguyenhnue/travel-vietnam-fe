import { CardContent } from '@mui/material';
import { styled } from '@mui/system';

export const CardContentStyle = styled(CardContent)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: "32px",
    borderRadius: '10px',
    maxHeight: "100%"
}));


