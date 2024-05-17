import { Button, CardHeader, Grid, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import { CardContentStyle } from './styles';
import { DeletePermissionsType } from 'src/types/permissions';
import {  deletePermission } from 'src/redux/slices/permissions';

const DeletePermission = (props: DeletePermissionsType) => {
  const { open, setOpen, permission } = props;
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ send_email: false, view: false, edit: false, delete: false });
  };
  const dispatch = useDispatch();

  const handleDelete = async (): Promise<void> => {
    if (permission && permission._id) {
      await dispatch(deletePermission(permission._id));
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
      <CardContentStyle>
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
              Candidate: {permission?.scope} - {permission?.actions.name}
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
      </CardContentStyle>
    </Modal>
  );
};

export default DeletePermission;
