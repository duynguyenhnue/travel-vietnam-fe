import { Button, CircularProgress,  Grid, Modal,  TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import * as Yup from 'yup';
import { CardContentStyle } from './styles';
import { EditPermissionsType } from 'src/types/permissions';
import { editPermission } from 'src/redux/slices/permissions';

const EditPermission = (props: EditPermissionsType) => {
  const { open, setOpen, permission, currentPermission } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ send_email: false, view: false, edit: false, delete: false });
  };

  const formik = useFormik({
    initialValues: {
    scope: "",
    actions: {
      name: "",
      description: "",
    },
      submit: null,
    },
    validationSchema: Yup.object({
    
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispatch(editPermission(values, currentPermission));
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        handleClose();
      } catch (err) {
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    permission && formik.setValues({ ...permission, submit: null });
  }, [permission]);

  return (
    <Modal
      open={open.edit}
      onClose={handleClose}
      aria-labelledby="edit-candidate"
      aria-describedby="edit-candidate"
    >
     <CardContentStyle>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              variant="h5"
              align="center"
            >
              {t(tokens.nav.newCandidate)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              error={!!(formik.touched.scope && formik.errors.scope)}
              fullWidth
              helperText={formik.touched.scope && formik.errors.scope}
              label="Scope"
              name="scope"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.scope}
            />
          </Grid>
          <Grid
            item
            xs={12}          >
            <TextField
              error={!!(formik.touched.actions?.name && formik.errors.actions?.name)}
              fullWidth
              helperText={formik.touched.actions?.name && formik.errors.actions?.name}
              label="Name"
              name="actions.name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.actions?.name}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              error={!!(formik.touched.actions?.description && formik.errors.actions?.description)}
              fullWidth
              helperText={formik.touched.actions?.description && formik.errors.actions?.description}
              label="Description"
              name="actions.description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.actions?.description}
            />
          </Grid>
          <Grid
            item
            xs={6}
          />

          <Grid
            item
            xs={6}
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={handleClose}
              variant="contained"
              disabled={formik.isSubmitting}
            >
              {t(tokens.nav.cancel)}
            </Button>
            <Button
              disabled={!formik.isValid || !formik.touched || formik.isSubmitting}
              variant="contained"
              type="submit"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                formik.handleSubmit();
              }}
              sx={{ bgcolor: 'success.main', ml: 1 }}
            >
              {formik.isSubmitting ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                t(tokens.nav.edit)
              )}
            </Button>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default EditPermission;
