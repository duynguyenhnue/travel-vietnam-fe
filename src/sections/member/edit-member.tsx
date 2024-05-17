import { Button, Checkbox, CircularProgress, FormControl, FormHelperText, Grid, InputLabel, ListItemText, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch } from 'src/redux/store';
import * as Yup from 'yup';
import { CardContentStyle } from './styles';
import { editMember } from 'src/redux/slices/member';
import { EditMemberType } from 'src/types/member';

const EditMember = (props: EditMemberType) => {
  const { open, setOpen, member, currentMember, roles } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ send_email: false, view: false, edit: false, delete: false });
  };

  const formik = useFormik({
    initialValues: {
      username: member?.username || "",
      password: member?.password || "",
      fullName:  member?.fullName || "",
      roles:  member?.roles || [],
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
      roles: Yup.array().min(1, 'At least one role must be selected').required('Roles are required'),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispatch(editMember(values, currentMember));
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
    member && formik.setValues({ ...member, submit: null });
  }, [member]);

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
          {roles.map((role) => (
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
                t(tokens.nav.edit)
              )}
            </Button>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default EditMember;
