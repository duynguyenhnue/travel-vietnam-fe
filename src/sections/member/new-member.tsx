import { Button, Checkbox, CircularProgress, FormControl, FormHelperText, Grid, InputLabel, ListItemText, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import * as Yup from 'yup';
import { CardContentStyle } from './styles';
import { newMember } from 'src/redux/slices/member';
import { NewMemberType } from 'src/types/member';



const NewMember = (props: NewMemberType) => {
  const { open, setOpen, roles } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      fullName: "",
      roles: [],
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .min(4, 'Username must be between 4 and 20 characters')
      .max(20, 'Username must be between 4 and 20 characters')
      .matches(/^\S+$/, 'Username must be written without spaces')
      .required('Username cannot be empty'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^\S+$/, 'Password must be written without spaces')
      .required('Password cannot be empty'),
      fullName: Yup.string().required('Role is required'),
      roles: Yup.array().min(1, 'At least one role must be selected').required('Roles are required')
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispatch(newMember(values));
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
              error={!!(formik.touched.fullName && formik.errors.fullName)}
              fullWidth
              helperText={formik.touched.fullName && formik.errors.fullName}
              label="FullName"
              name="fullName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.fullName}
            />
          </Grid>
          <Grid
            item
            xs={12}          >
            <TextField
              error={!!(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.username}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              error={!!(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.password}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
          <FormControl
        fullWidth
        error={formik.touched.roles && Boolean(formik.errors.roles)}
        required
        variant="outlined"
        margin="normal"
      >
        <InputLabel id="roles-label">Roles</InputLabel>
        <Select
          labelId="roles-label"
          id="roles"
          multiple
          value={formik.values.roles}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="roles"
          label="Roles"
          renderValue={(selected) => selected.join(', ')}
        >
          {roles && roles.map((role) => (
            <MenuItem key={role} value={role}>
              <Checkbox checked={formik.values.roles.indexOf(role) > -1} />
              <ListItemText primary={role} />
            </MenuItem>
          ))}
        </Select>
        {formik.touched.roles && formik.errors.roles && (
          <FormHelperText>{formik.errors.roles}</FormHelperText>
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

export default NewMember;
