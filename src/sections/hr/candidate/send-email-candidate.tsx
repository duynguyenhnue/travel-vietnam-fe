import { Button, CardActions, CardContent, CardHeader, Grid, Modal, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/system';
import { tokens } from 'src/locales/tokens';
import { useTranslation } from 'react-i18next';
import JoditEditor from "jodit-pro-react";
import { renderToString } from 'react-dom/server';
import HRApplicationReceivedEmailTemplate from 'src/templates/email/01-hr-application-received';
import HRRejectedEmailTemplate from 'src/templates/email/03-hr-rejected';
import HRAcceptedEmailTemplate from 'src/templates/email/02-hr-accepted';
import { SendEmailCandidateType, SendEmailTabType } from 'src/types/hr/candidate';
import { joditEditorStyles } from './styles/jodit-editor-styles';

const SendEmailCandidate = (props: SendEmailCandidateType) => {
  const { open, setOpen, candidate } = props;
   const classes = joditEditorStyles();
  
  const [tab, setTab] = useState<SendEmailTabType>({
      label: 'Application Received',
      value: 'application_received',
      emailTemplate: renderToString(<HRApplicationReceivedEmailTemplate candidate={props.candidate} signature='' />)
    },);

  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });

  const handleSetTab = (value: string) => {
    const tab : SendEmailTabType | undefined  = tabs.find(item => item.value == value);
    if(tab){
      setTab(tab);
    }
  }

  const { t } = useTranslation();

  const tabs: SendEmailTabType[] = [
    {
      label: 'Application Received',
      value: 'application_received',
      emailTemplate: renderToString(<HRApplicationReceivedEmailTemplate candidate={props.candidate} signature='' />)
    },
    {
      label: 'Accepted',
      value: 'accepted',
      emailTemplate: renderToString(<HRAcceptedEmailTemplate candidate={props.candidate} signature=''/>)
    },
    {
      label: 'Rejected',
      value: 'rejected',
      emailTemplate: renderToString(<HRRejectedEmailTemplate candidate={props.candidate} signature=''/>)
    },
  ];

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
          {candidate && 
          <Stack sx={{pt: 2}}>
            <JoditEditor
              value={tab.emailTemplate}
              className={classes.root}
              // tabIndex={1} // tabIndex of textarea
              // onBlur={this.updateContent}
            />
          </Stack>
          }
        <CardActions>
          <Grid
            item
            xs={6}
          >
            <Button
              // disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
              // onClick={handleSubmit}
              sx={{ bgcolor: 'success.main' }}
            >
              {t(tokens.nav.sendEmail)}
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Button
              onClick={handleClose}
              variant="contained"
              // disabled={formik.isSubmitting}
            >
              {t(tokens.nav.cancel)}
            </Button>
          </Grid>
        </CardActions>
      </CardContent>
    </Modal>
  );
};

export default SendEmailCandidate;
