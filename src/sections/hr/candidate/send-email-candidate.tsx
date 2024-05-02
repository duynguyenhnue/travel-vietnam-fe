import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Modal,
  Tab,
  Tabs,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { tokens } from 'src/locales/tokens';
import { useTranslation } from 'react-i18next';
import JoditEditor from 'jodit-pro-react';
import { renderToString } from 'react-dom/server';
import { useDispatch } from 'src/redux/store';
import HRApplicationReceivedEmailTemplate from 'src/templates/email/01-hr-application-received';
import HRRejectedEmailTemplate from 'src/templates/email/03-hr-rejected';
import HRAcceptedEmailTemplate from 'src/templates/email/02-hr-accepted';
import { SendEmailCandidateType, SendEmailTabType } from 'src/types/hr/candidate';
import { joditEditorStyles } from './styles/jodit-editor-styles';
import { sendEmail } from 'src/redux/slices/send-email/send-email';
import { SendEmailType } from 'src/types/send-email';

const SendEmailCandidate = (props: SendEmailCandidateType) => {
  const { open, setOpen, candidate } = props;
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classes = joditEditorStyles();

  const [tab, setTab] = useState<SendEmailTabType>({
    label: 'Application Received',
    value: 'application_received',
    senderName: '[STARACK] Application Recieved',
    emailTemplate: renderToString(
      <HRApplicationReceivedEmailTemplate
        candidate={props.candidate}
        signature=""
      />
    ),
  });

  useEffect(() => {
    setTab({
      label: 'Application Received',
      value: 'application_received',
      senderName: '[STARACK] Application Recieved',
      emailTemplate: renderToString(
        <HRApplicationReceivedEmailTemplate
          candidate={props.candidate}
          signature=""
        />
      ),
    });
  }, [candidate]);

  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });

  const handleSetTab = (value: string) => {
    const tab: SendEmailTabType | undefined = tabs.find((item) => item.value == value);
    if (tab) {
      setTab(tab);
    }
  };

  const { t } = useTranslation();

  const tabs: SendEmailTabType[] = [
    {
      label: 'Application Received',
      value: 'application_received',
      senderName: '[STARACK] Application Recieved',
      emailTemplate: renderToString(
        <HRApplicationReceivedEmailTemplate
          candidate={props.candidate}
          signature=""
        />
      ),
    },
    {
      label: 'Accepted',
      value: 'accepted',
      senderName: '[STARACK] HR Accept ',
      emailTemplate: renderToString(
        <HRAcceptedEmailTemplate
          candidate={props.candidate}
          signature=""
        />
      ),
    },
    {
      label: 'Rejected',
      value: 'rejected',
      senderName: '[STARACK] HR Reject ',
      emailTemplate: renderToString(
        <HRRejectedEmailTemplate
          candidate={props.candidate}
          signature=""
        />
      ),
    },
  ];

  const updateContent = (value: string) => {
    tab.emailTemplate = value;
    setTab(tab);
  };

  const handleSubmit = async () => {
    if (candidate) {
      setIsSubmitting(true);
      const data: SendEmailType = {
        email: candidate.contact.email,
        senderName: tab.senderName,
        subject: '[STARACK] HR Recruitment',
        content: tab.emailTemplate,
      };
      await dispatch(sendEmail(data));
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      open={open.send_email}
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
        <CardHeader
          title="Send Email"
          subheader=""
          sx={{ pb: 2 }}
        />
        <Tabs
          value={tab.value}
          sx={{ px: 3 }}
        >
          {tabs.map((item) => (
            <Tab
              key={item.value}
              label={item.label}
              value={item.value}
              onClick={() => handleSetTab(item.value)}
            />
          ))}
        </Tabs>
        {candidate && (
          <Stack sx={{ pt: 2 }}>
            <JoditEditor
              value={tab.emailTemplate}
              className={classes.root}
              // tabIndex={1} // tabIndex of textarea
              onBlur={updateContent}
            />
          </Stack>
        )}
        <CardActions style={{ float: 'right' }}>
          <Grid
            item
            xs={12}
          >
            <Button
              disabled={isSubmitting}
              onClick={handleClose}
              variant="contained"
            >
              {t(tokens.nav.cancel)}
            </Button>
            <Button
              disabled={isSubmitting}
              variant="contained"
              onClick={handleSubmit}
              sx={{ bgcolor: 'success.main', ml: 1 }}
            >
              {isSubmitting ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                t(tokens.nav.sendEmail)
              )}
            </Button>
          </Grid>
        </CardActions>
      </CardContent>
    </Modal>
  );
};

export default SendEmailCandidate;
