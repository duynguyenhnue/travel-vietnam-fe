import { Button, CircularProgress, Grid, Modal, TextField, Typography } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useFormik } from 'formik';
import { MouseEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { newCandidate, uploadFile } from 'src/redux/slices/hr/candidate/candidate';
import { useDispatch } from 'src/redux/store';
import { convertLocateTimezone, convertStringToDateWithTimezone } from 'src/utils/date-locale';
import * as Yup from 'yup';
import { CardContentStyle } from './styles';
import { NewCandidateType } from 'src/types/hr/candidate';

const NewCandidate = (props: NewCandidateType) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      name: '',
      status: '',
      contact: {
        email: '',
        phone: '',
      },
      interviewInformation: {
        dateTime: '',
        linkGmeet: '',
      },
      dob: '',
      universityMajor: '',
      projectExperience: '',
      skillsSummary: '',
      certificate: '',
      role: '',
      cvUrl: '',
      onboardDate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Name is required'),
      status: Yup.string().required('Status is required'),
      role: Yup.string().required('Role is required'),
      // dob: Yup.string().required('DOB is required'),
      // universityMajor: Yup.string().required('University major is required'),
      // projectExperience: Yup.string().required('Project experience is required'),
      // skillsSummary: Yup.string().required('Skills summary is required'),
      // certificate: Yup.string().required('Certificate is required'),
      contact: Yup.object({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        phone: Yup.string().max(10).min(10).required('Phone is required'),
      }),
      // interviewInformation: Yup.object({
      //   dateTime: Yup.string().required('Date time is required'),
      //   linkGmeet: Yup.string().required('Link gmeet is required'),
      // }),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        if (selectedFile) {
          const uploadfile = await dispatch(uploadFile(fileName, selectedFile));
          values.cvUrl = uploadfile;
        }
        await dispatch(newCandidate(values));
        handleClose();
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        formik.resetForm();
        handleClose();
      } catch (err) {
        toast.error('Create Candidate false');
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleClick = () => {
    hiddenInputRef.current?.click();
  };

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const [dragOver, setDragOver] = useState<boolean>(false);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
    setDragOver(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-candidate"
      aria-describedby="new-candidate"
    >
      <CardContentStyle sx={{ overflowY: 'auto' }}>
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
            <DatePicker
              format="dd/MM/yyyy"
              label="DOB"
              onChange={(value) => {
                formik.setFieldValue('dob', value, true);
              }}
              value={formik.values.dob}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  required: false,
                  name: 'dob',
                  error: !!(formik.touched.dob && Boolean(formik.errors.dob)),
                  helperText: formik.touched.dob && formik.errors.dob,
                  fullWidth: true,
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
              error={!!(formik.touched.universityMajor && formik.errors.universityMajor)}
              fullWidth
              helperText={formik.touched.universityMajor && formik.errors.universityMajor}
              label={t(tokens.nav.universityMajor)}
              name="universityMajor"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.universityMajor}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              error={!!(formik.touched.role && formik.errors.role)}
              required
              fullWidth
              helperText={formik.touched.role && formik.errors.role}
              label={t(tokens.nav.role)}
              name="role"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.role}
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
              label={t(tokens.nav.skillsSummary)}
              name="skillsSummary"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.skillsSummary}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            sx={{
              position: 'relative',
              cursor: dragOver ? 'pointer' : 'default',
            }}
          >
            <TextField
              label="CV"
              fullWidth
              variant="outlined"
              value={fileName}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <Button
                    variant="contained"
                    onClick={handleClick}
                  >
                    Browse
                  </Button>
                ),
              }}
              disabled
            />
            <input
              type="file"
              accept="/*"
              onChange={handleFileChange}
              ref={hiddenInputRef}
              style={{ display: 'none' }}
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
              onChange={(value) => {
                if (value) {
                  formik.setFieldValue(
                    'interviewInformation.dateTime',
                    convertLocateTimezone(value),
                    true
                  );
                }
              }}
              value={
                typeof formik.values.interviewInformation?.dateTime === 'string'
                  ? new Date(
                      convertStringToDateWithTimezone(formik.values.interviewInformation.dateTime)
                    )
                  : formik.values.interviewInformation.dateTime
              }
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
                  required: false,
                  name: 'dateTime',
                  fullWidth: true,
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.interviewInformation.linkGmeet}
            />
          </Grid>
          {(formik.values.status === 'pass' || formik.values.status === 'onboard') && (
            <Grid
              item
              xs={12}
            >
              <Typography variant="h6">{t(tokens.nav.onboardDate)}</Typography>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ mt: 2 }}
              >
                <DateTimePicker
                  onChange={(value) => {
                    if (value) {
                      formik.setFieldValue('onboardDate', convertLocateTimezone(value), true);
                    }
                  }}
                  value={
                    typeof formik.values.onboardDate === 'string'
                      ? new Date(convertStringToDateWithTimezone(formik.values.onboardDate))
                      : formik.values.onboardDate
                  }
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      error: !!(formik.touched.onboardDate && formik.errors.onboardDate),
                      helperText: formik.touched.onboardDate && formik.errors.onboardDate,
                      required: false,
                      name: 'dateTime',
                    },
                  }}
                />
              </Grid>
            </Grid>
          )}
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

export default NewCandidate;
