import { Button, Checkbox, CircularProgress ,FormControl,FormHelperText,Grid, InputLabel, ListItemText, MenuItem, Modal,Select,TextField,Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import * as Yup from 'yup';
import { CardContentStyle } from './styles';
import { NewRolesType } from 'src/types/roles';
import { newRole } from 'src/redux/slices/roles';
import { PermissionsType } from 'src/types/redux/permissions';

const NewRole = (props: NewRolesType) => {
  const { open, setOpen, permissions } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name:  "",
      permissions:  [],
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Permissions is required'),
      permissions: Yup.array().min(1, 'At least one role must be selected').required('Permissions are required')
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispatch(newRole(values));
        handleClose();
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        handleClose();
      } catch (err) {
        toast.error('Create Candidate false');
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-candidate"
      aria-describedby="new-candidate"
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
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.name}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
          <FormControl
        fullWidth
        error={formik.touched.permissions && Boolean(formik.errors.permissions)}
        required
        variant="outlined"
        margin="normal"
      >
        <InputLabel id="permissions-label">Permissions</InputLabel>
        <Select
          labelId="permissions-label"
          id="permissions"
          multiple
          value={formik.values.permissions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="permissions"
          label="Permissions"
          renderValue={(selected) => selected.join(', ')}
        >
          {permissions && permissions.map((permission: PermissionsType | undefined) => (
            permission && (
              <MenuItem key={permission._id} value={permission._id}>
                <Checkbox checked={formik.values.permissions.indexOf(permission?._id as never || "") > -1} />
                <ListItemText primary={permission?.scope} />
              </MenuItem>
            )
          ))}
        </Select>
        {formik.touched.permissions && formik.errors.permissions && (
          <FormHelperText>{formik.errors.permissions}</FormHelperText>
        )}
      </FormControl>
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
                t(tokens.nav.create)
              )}
            </Button>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default NewRole;
