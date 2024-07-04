import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Button,
  CircularProgress,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { RouterLink } from 'src/components/common/router/router-link';
import { Seo } from 'src/components/common/performance/seo';
import { paths } from 'src/paths';
import { useDispatch, useSelector } from 'src/redux/store';
import { login } from '../../redux/slices/authentication';
import { useRouter } from 'src/hooks/use-router';
import { useMounted } from 'src/hooks/use-mounted';
import { useEffect } from 'react';

interface LoginValues {
  username: string;
  password: string;
  submit: null;
}

const initialValues: LoginValues = {
  username: '',
  password: '',
  submit: null,
};

const validationSchema = Yup.object({
  username: Yup.string().max(255).required('Username is required'),
  password: Yup.string().max(255).required('Password is required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isMounted = useMounted();

  const { loading, errorMessage, isAuthenticated } = useSelector((state) => state.authentication);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const loginData = {
          username: values.username,
          password: values.password,
        };
        await dispatch(login(loginData));

        if (isAuthenticated && errorMessage !== '') {
          router.push(paths.dashboard.index);
        }
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
      router.push(paths.dashboard.index);
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Seo title="Login" />
      <div>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href={paths.dashboard.index}
            sx={{
              alignItems: 'center',
              display: 'inline-flex',
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">Back</Typography>
          </Link>
        </Box>
        <Stack
          sx={{ mb: 4 }}
          spacing={1}
        >
          <Typography variant="h5">Log in</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Don&apos;t have an account? &nbsp;
            <Link
              href={paths.auth.register}
              underline="hover"
              variant="subtitle2"
            >
              Sign up
            </Link>
          </Typography>
        </Stack>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              autoFocus
              error={!!(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.username}
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
