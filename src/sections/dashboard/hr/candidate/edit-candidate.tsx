import { Button, CardContent, Grid, Modal, TextField, Typography } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useFormik } from 'formik';
import { MouseEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { editCandidate } from 'src/redux/slices/candidate';
import { useDispatch } from 'src/redux/store';
import { CandidateType } from 'src/types/hr/candidate';
import * as Yup from 'yup';

type NewCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
  currentCandidate: string;
};

const EditCandidate = (props: NewCandidateType) => {
  const { open, setOpen, candidate, currentCandidate } = props;
  const dispath = useDispatch();
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen({ send_email: false, view: false, edit: false, delete: false });
  };
  const formik = useFormik({
    initialValues: {
      name: (candidate && candidate.name) || '',
      status: candidate?.status || '',
      contact: {
        email: candidate?.contact.email || '',
        phone: candidate?.contact.phone || '',
      },
      interviewInformation: {
        dateTime: candidate?.interviewInformation.dateTime || '',
        linkGmeet: candidate?.interviewInformation.linkGmeet || '',
      },
      dob: candidate?.dob || '',
      universityMajor: candidate?.universityMajor || '',
      projectExperience: candidate?.projectExperience || '',
      skillsSummary: candidate?.skillsSummary || '',
      certificate: candidate?.certificate || '',
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Name is required'),
      status: Yup.string().max(255).required('Status is required'),
      dob: Yup.string().max(255).required('DOB is required'),
      universityMajor: Yup.string().max(255).required('University major is required'),
      projectExperience: Yup.string().max(255).required('Project experience is required'),
      skillsSummary: Yup.string().max(255).required('Skills summary is required'),
      certificate: Yup.string().max(255).required('Certificate is required'),
      contact: Yup.object({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        phone: Yup.string().max(10).min(10).required('Phone is required'),
      }),
      interviewInformation: Yup.object({
        dateTime: Yup.string().max(255).required('Date time is required'),
        linkGmeet: Yup.string().max(255).required('Link gmeet is required'),
      }),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await dispath(editCandidate(values, currentCandidate));
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
    candidate && formik.setValues({ ...candidate, submit: null });
  }, [candidate]);

  const listStatus = [
    {
      value: '',
      label: '',
    },
    {
      value: 'reject',
      label: 'Reject',
    },
    {
      value: 'schedule_interview',
      label: 'Schedule Interview',
    },
    {
      value: 'interviewed',
      label: 'Interviewed',
    },
    {
      value: 'pass',
      label: 'Pass',
    },
    {
      value: 'onboard',
      label: 'Onboard',
    },
  ];

  return (
    <Modal
      open={open.edit}
      onClose={handleClose}
      aria-labelledby="edit-candidate"
      aria-describedby="edit-candidate"
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
          <Grid
            item
            xs={12}
          >
            <Typography
              variant="h5"
              align="center"
            >
              {t(tokens.nav.candidate)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label={t(tokens.nav.name)}
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
            md={6}
          >
            <TextField
              error={!!(formik.touched.projectExperience && formik.errors.projectExperience)}
              fullWidth
              helperText={formik.touched.projectExperience && formik.errors.projectExperience}
              label={t(tokens.nav.projectExperience)}
              name="projectExperience"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.projectExperience}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.universityMajor && formik.errors.universityMajor)}
              fullWidth
              helperText={formik.touched.universityMajor && formik.errors.universityMajor}
              label={t(tokens.nav.universityMajor)}
              name="universityMajor"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.universityMajor}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              select
              fullWidth
              label={t(tokens.nav.status)}
              SelectProps={{
                native: true,
              }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.status}
              name="status"
              helperText={formik.touched.status && formik.errors.status}
              variant="filled"
              error={!!(formik.touched.status && formik.errors.status)}
            >
              {listStatus.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.value ? false : true}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.skillsSummary && formik.errors.skillsSummary)}
              fullWidth
              helperText={formik.touched.skillsSummary && formik.errors.skillsSummary}
              label={t(tokens.nav.skillsSummary)}
              name="skillsSummary"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              value={formik.values.skillsSummary}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.certificate && formik.errors.certificate)}
              fullWidth
              helperText={formik.touched.certificate && formik.errors.certificate}
              label={t(tokens.nav.certificate)}
              name="certificate"
              onBlur={formik.handleBlur}
              required
              onChange={formik.handleChange}
              value={formik.values.certificate}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <DatePicker
              format="dd/MM/yyyy"
              label="DOB"
              onChange={(value) => {
                formik.setFieldValue('dob', value, true);
              }}
              value={new Date(formik.values.dob)}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  required: true,
                  name: 'dob',
                  error: !!(formik.touched.dob && Boolean(formik.errors.dob)),
                  helperText: formik.touched.dob && formik.errors.dob,
                },
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Typography variant="h6">{t(tokens.nav.contact)}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.contact?.email && formik.errors.contact?.email)}
              fullWidth
              helperText={formik.touched.contact?.email && formik.errors.contact?.email}
              label={t(tokens.nav.email)}
              name="contact.email"
              onBlur={formik.handleBlur}
              required
              onChange={formik.handleChange}
              value={formik.values.contact.email}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.contact?.phone && formik.errors.contact?.phone)}
              fullWidth
              helperText={formik.touched.contact?.phone && formik.errors.contact?.phone}
              label={t(tokens.nav.phone)}
              name="contact.phone"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.contact.phone}
            />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Typography variant="h6">{t(tokens.nav.interviewInformation)}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <DateTimePicker
              label={t(tokens.nav.time)}
              onChange={(value) => {
                formik.setFieldValue('interviewInformation.dateTime', value, true);
              }}
              value={new Date(formik.values.interviewInformation.dateTime)}
              minDate={new Date()}
              minTime={new Date()}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  error: !!(
                    formik.touched.interviewInformation?.dateTime &&
                    formik.errors.interviewInformation?.dateTime
                  ),
                  helperText:
                    formik.touched.interviewInformation?.dateTime &&
                    formik.errors.interviewInformation?.dateTime,
                  required: true,
                  name: 'dateTime',
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={
                !!(
                  formik.touched.interviewInformation?.linkGmeet &&
                  formik.errors.interviewInformation?.linkGmeet
                )
              }
              fullWidth
              helperText={
                formik.touched.interviewInformation?.linkGmeet &&
                formik.errors.interviewInformation?.linkGmeet
              }
              label={t(tokens.nav.link)}
              name="interviewInformation.linkGmeet"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.interviewInformation.linkGmeet}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Button
              disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                formik.handleSubmit();
              }}
              sx={{ bgcolor: 'success.main' }}
            >
              {t(tokens.nav.update)}
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Button
              onClick={handleClose}
              variant="contained"
              disabled={formik.isSubmitting}
            >
              {t(tokens.nav.cancel)}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default EditCandidate;
