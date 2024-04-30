import { Button, CardContent, CardHeader, Grid, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { deleteCandidate } from 'src/redux/slices/hr/candidate/candidate';
import { useDispatch } from 'src/redux/store';
import { CandidateType } from 'src/types/hr/candidate';

type NewCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
};

const DeleteCandidate = (props: NewCandidateType) => {
  const { open, setOpen, candidate } = props;
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ view: false, edit: false, delete: false });
  };
  const dispatch = useDispatch();

  const handleDelete = async (): Promise<void> => {
    if(candidate && candidate._id){
      await dispatch(deleteCandidate(candidate._id));
      handleClose();
    }
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
           <CardHeader
            title={t(tokens.nav.doYouWantToDeleteItOrNot)}
            subheader=""
            sx={{ pb: 2 }}
          />
          <Grid
            item
            xs={12}
            display={open.delete ? 'block' : 'none'}
          >
            <Typography
              variant="inherit"
              align="left"
            >
              Candidate: {candidate?.name} - {candidate?.role}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            />
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'right' }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
            >
              {t(tokens.nav.no)}
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={handleDelete}
              sx={{ bgcolor: 'success.main', ml: 1 }}
            >
              {t(tokens.nav.yes)}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default DeleteCandidate;
