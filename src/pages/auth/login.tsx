import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, CircularProgress, Stack, TextField, Typography, useTheme } from '@mui/material';
import { Seo } from 'src/components/common/performance/seo';
import { paths } from 'src/paths';
import { useDispatch, useSelector } from 'src/redux/store';
import { handleOpenDialog, login } from '../../redux/slices/authentication';
import { useRouter } from 'src/hooks/use-router';
import { useMounted } from 'src/hooks/use-mounted';
import { useEffect } from 'react';
import { useDialog } from 'src/hooks/use-dialog';

interface LoginValues {
  email: string;
  password: string;
  submit: null;
}

const initialValues: LoginValues = {
  email: '',
  password: '',
  submit: null,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .max(100, 'Email must be at most 100 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isMounted = useMounted();
  const theme = useTheme();
  const dialog = useDialog();

  const { loading, isAuthenticated } = useSelector((state) => state.authentication);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const loginData = {
          email: values.email,
          password: values.password,
        };
        await dispatch(login(loginData));
        dialog.handleClose();
        dispatch(handleOpenDialog(''));
      } catch (err) {
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push(paths.index);
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Seo title="Login" />
      <div>
        <Stack
          sx={{ mb: 4 }}
          spacing={1}
        >
          <Typography variant="h5">Log in</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            display="flex"
          >
            Don&apos;t have an account? &nbsp;
            <Typography
              color={theme.palette.primary.main}
              variant="subtitle2"
              onClick={() => dispatch(handleOpenDialog('register'))}
            >
              Sign up
            </Typography>
          </Typography>
        </Stack>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              autoFocus
              error={!!(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
            />
            <TextField
              error={!!(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              autoComplete="current-password"
            />
          </Stack>
          <Button
            fullWidth
            sx={{ mt: 3 }}
            size="large"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress /> : 'Login'}
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
