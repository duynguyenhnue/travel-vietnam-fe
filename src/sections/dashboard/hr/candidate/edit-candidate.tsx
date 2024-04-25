import { Button, CardContent, Grid, Modal, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
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

  const handleClose = () => {
    window.location.reload();

    setOpen({ view: false, edit: false, delete: false });
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
        phone: Yup.string().max(10).required('Phone is required'),
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

  return (
    <Modal
      open={open.edit}
      onClose={handleClose}
      aria-labelledby="new-candidate"
      aria-describedby="new-candidate"
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
              Candidate
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
              label="Full name"
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
              label="Project experience"
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
              error={!!(formik.touched.skillsSummary && formik.errors.skillsSummary)}
              fullWidth
              helperText={formik.touched.skillsSummary && formik.errors.skillsSummary}
              label="Skills summary"
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
              label="Certificate"
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
          >
            <Typography variant="h6">Contact</Typography>
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
              label="Email"
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
              label="Phone"
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
            <Typography variant="h6">Interview information</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={
                !!(
                  formik.touched.interviewInformation?.dateTime &&
                  formik.errors.interviewInformation?.dateTime
                )
              }
              fullWidth
              required
              helperText={
                formik.touched.interviewInformation?.dateTime &&
                formik.errors.interviewInformation?.dateTime
              }
              label="Date time"
              name="interviewInformation.dateTime"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.interviewInformation.dateTime}
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
              label="Link gmeet"
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
            sx={{ display: 'flex', justifyContent: 'center' }}
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
              Update
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              disabled={formik.isSubmitting}
              onClick={handleClose}
            >
              {'Cancel'}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default EditCandidate;
