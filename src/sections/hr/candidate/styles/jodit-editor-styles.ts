import { Stack, styled } from '@mui/system';

export const JoditEditorStyles = styled(Stack)(({ theme }) => ({
  '& .jodit-toolbar__box': {
    display: 'none',
  },
  '& .jodit-workplace': {
    maxHeight: '500px !important',
    scrollBehavior: 'smooth',
  },
  paddingTop: theme.spacing(2),
}));