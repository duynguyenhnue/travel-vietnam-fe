import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
