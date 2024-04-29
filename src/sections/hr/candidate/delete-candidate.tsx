import { Button, CardContent, Grid, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { deleteCandidate } from 'src/redux/slices/candidate';
import { useDispatch } from 'src/redux/store';

type NewCandidateType = {
  open: any;
  setOpen: any;
  currentCandidate: string;
};

const DeleteCandidate = (props: NewCandidateType) => {
  const { open, setOpen, currentCandidate } = props;
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ view: false, edit: false, delete: false });
  };
  const dispath = useDispatch();

  const handleDelete = async (): Promise<void> => {
    await dispath(deleteCandidate(currentCandidate));
    handleClose();
  };

  return (
    <Modal
      open={open.delete}
      onClose={handleClose}
      aria-labelledby="new-candidate"
      aria-describedby="new-candidate"
    >
      <CardContent
        sx={{
          backgroundColor: 'background.paper',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            display={open.delete ? 'block' : 'none'}
          >
            <Typography
              variant="h6"
              align="center"
            >
              {t(tokens.nav.doYouWantToDeleteItOrNot)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              type="submit"
              onClick={handleDelete}
              sx={{ bgcolor: 'success.main' }}
            >
              {t(tokens.nav.yes)}
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
            >
              {t(tokens.nav.no)}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default DeleteCandidate;
