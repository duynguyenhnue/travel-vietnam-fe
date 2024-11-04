import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Seo } from 'src/components/common/performance/seo';
import { useDispatch, useSelector } from 'src/redux/store';
import { useMounted } from 'src/hooks/use-mounted';
import { forgotPassword, handleOpenDialog } from 'src/redux/slices/authentication';
import { Container } from '@mui/system';
import { ArrowLeftIcon } from '@mui/x-date-pickers';

interface ForgotPasswordValues {
  email: string;
}

const initialValues: ForgotPasswordValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
});

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const isMounted = useMounted();

  const { loading, forgotEmailSent } = useSelector((state) => state.authentication);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispatch(forgotPassword());
      } catch (err) {
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  return (
    <>
      <Seo title="Forgot Password" />
      <Container maxWidth="sm">
        <Box
          sx={{ mb: 4, display: 'flex', alignItems: 'center' }}
          onClick={() => dispatch(handleOpenDialog('login'))}
        >
          <SvgIcon sx={{ mr: 1 }}>
            <ArrowLeftIcon />
          </SvgIcon>
          <Typography variant="subtitle2">Back to Login</Typography>
        </Box>
        <Stack
          sx={{ mb: 4 }}
          spacing={1}
        >
          <Typography variant="h5">{forgotEmailSent ? 'Email sent' : 'Forgot password'}</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {forgotEmailSent
              ? `If there is a PTE Magic account registered to ${formik.values.email} we have sent instructions for how to reset your password.`
              : 'Please insert your email in the input below and we will send an email with the link to reset your password.'}
          </Typography>
        </Stack>
        {!forgotEmailSent && (
          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              autoFocus
              error={!!(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
            />
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? <CircularProgress /> : 'Send reset link'}
            </Button>
          </form>
        )}
      </Container>
    </>
  );
};

export default ForgotPasswordPage;
