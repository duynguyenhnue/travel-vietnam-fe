import { makeStyles } from '@mui/styles';

export const joditEditorStyles = makeStyles({
  root: {
    '& > .jodit-toolbar__box': {
      display: 'none',
    },
    '& > .jodit-workplace': {
      maxHeight: '500px !important',
      scrollBehavior: 'smooth',
    },
  },
});
