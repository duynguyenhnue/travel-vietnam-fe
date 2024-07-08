import { Button, CardHeader, Grid, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import { DeleteCandidateType } from 'src/types/hr/candidate';
import { CardContentStyle } from './styles';
import { editCandidate } from 'src/redux/slices/hr/candidate/candidate';

const RestoreCandidate = (props: DeleteCandidateType) => {
  const { open, setOpen, candidate } = props;
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ send_email: false, view: false, edit: false, delete: false, restore: false });
  };
  const dispatch = useDispatch();

  const handleRestore = async (): Promise<void> => {

    if (candidate && candidate._id) {
      const updatedCandidate = {
        ...candidate,  
        deleted: false
      };

      await dispatch(editCandidate(updatedCandidate, candidate._id));
      handleClose();
    }
  };  

  return (
    <Modal
      open={open.restore || false}
      onClose={handleClose}
      aria-labelledby="restore-candidate"
      aria-describedby="restore-candidate"
    >
      <CardContentStyle>
        <Grid
          container
          spacing={3}
        >
          <CardHeader
            title={t(tokens.nav.doYouWantToRestoreItOrNot)}
            subheader=""
            sx={{ pb: 2 }}
          />
          <Grid
            item
            xs={12}
            display={'block'}
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
              onClick={handleRestore}
              sx={{ bgcolor: 'success.main', ml: 1 }}
            >
              {t(tokens.nav.yes)}
            </Button>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default RestoreCandidate;
