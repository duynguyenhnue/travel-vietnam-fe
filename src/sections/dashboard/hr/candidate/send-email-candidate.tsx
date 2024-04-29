import { CardContent, CardHeader, Modal, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import MUIRichTextEditor from 'mui-rte';
import { Stack } from '@mui/system';
import { CandidateType } from 'src/types/hr/candidate';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type SendEmailCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
};
type DefaultValueType = {
  [key: string]: object;
};
function getTimePlusNDays(numberDay: number) {
  const now = new Date();
  now.setDate(now.getDate() + numberDay);
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

const SendEmailCandidate = (props: SendEmailCandidateType) => {
  const { open, setOpen, candidate } = props;
  const [tab, setTab] = useState<string>('application_received');
  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });
  const tabs = [
    {
      label: 'Application Received',
      value: 'application_received',
    },
    {
      label: 'Accepted',
      value: 'accepted',
    },
    {
      label: 'Rejected',
      value: 'rejected',
    },
  ];
  const formattedDate =
    candidate &&
    new Date(candidate && candidate.interviewInformation.dateTime).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

  const formattedTime =
    candidate &&
    new Date(candidate && candidate.interviewInformation.dateTime).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

  const defaultValue: DefaultValueType = {
    application_received: {
      blocks: [
        {
          key: '7po5',
          text: `Dear ${candidate && candidate.name},\n`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: 'apv19',
          text: `Thank you for your application for the  ${'intern'} position at Starack. We appreciate your interest in joining our team.\nOur hiring team is currently reviewing all applications. We will be contacting candidates selected for interviews within the next two weeks, starting from ${formattedTime} on ${formattedDate}.  If you are not contacted by then, we encourage you to continue exploring other opportunities.\nThank you again for your interest in Starack. We wish you all the best in your job search.\nSincerely,`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
    accepted: {
      blocks: [
        {
          key: '7po5',
          text: `Dear ${candidate && candidate.name},\n`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: 'apv19',
          text: `We are pleased to offer you the position of ${'intern'} at Starack. This is a Full-time position with a start date of ${'date'}.
We were impressed with your skills and experience, and believe you would be a valuable addition to our team. Please find attached a more detailed offer letter outlining the terms of your employment. To accept this offer, please sign and return the offer letter by ${getTimePlusNDays(
            2
          )}.  We look forward to welcoming you aboard!
Sincerely,\n`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: 'apv20',
          text: `Justin Nguyen\n
Starack JSC.
Starack PTY LTD
Address : 20/01 Tran Quoc Hoan Street, Ha Noi
Address : Innovation Campus, 1 Squires Way, Wollongong, NSW 2500
Mobile - VN: +84 969 666 537
Zalo: +84 969 666 537
Whatsapp: +84 969 666 537
Email: justin.nguyen@starack.net
Web: starack.net`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [
            {
              offset: 0,
              length: 13,
              style: 'BOLD',
              key: 0,
            },
            {
              offset: 14,
              length: 13,
              style: 'BOLD',
            },
            {
              offset: 15,
              length: 28,
              style: 'BOLD',
            },
            {
              offset: 44,
              length: 9,
              style: 'BOLD',
            },
            {
              offset: 90,
              length: 9,
              style: 'BOLD',
            },
            {
              offset: 155,
              length: 12,
              style: 'BOLD',
            },
            {
              offset: 184,
              length: 5,
              style: 'BOLD',
            },
            {
              offset: 205,
              length: 10,
              style: 'BOLD',
            },
            {
              offset: 231,
              length: 7,
              style: 'BOLD',
            },
            {
              offset: 265,
              length: 5,
              style: 'BOLD',
            },
          ],
          entityRanges: [
            {
              offset: 0,
              length: 6,
              key: 'justinEntity',
            },
          ],
          data: {},
        },
      ],
      entityMap: {},
    },
    rejected: {
      blocks: [
        {
          key: '7po5',
          text: `Dear ${candidate && candidate.name},\n`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: 'apv19',
          text: `Thank you for your interest in the ${'intern'} position at Starack. We appreciated the opportunity to review your application.\nWhile we were impressed with your qualifications, we have decided to move forward with other candidates whose experience more closely aligns with the requirements of this role.\nWe wish you all the best in your continued job search.`,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
  };

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  const muiRteTheme = {
    overrides: {
      MUIRichTextEditor: {
        root: {},
        editor: {
          apv20: {},
        },
      },
    },
  };

  Object.assign(defaultTheme, muiRteTheme);

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
          sx={{ pb: 0 }}
        />
        <Tabs
          value={tab}
          sx={{ px: 3 }}
        >
          {tabs.map((item) => (
            <Tab
              key={item.value}
              label={item.label}
              value={item.value}
              onClick={() => setTab(item.value)}
            />
          ))}
        </Tabs>

        <Stack
          sx={{
            '#mui-rte-root': {
              height: '500px',
              overflow: 'auto',
            },
          }}
        >
          <ThemeProvider theme={defaultTheme}>
            <MUIRichTextEditor
              label="Type something here..."
              defaultValue={JSON.stringify(defaultValue[tab])}
              readOnly
            />
          </ThemeProvider>
        </Stack>
      </CardContent>
    </Modal>
  );
};

export default SendEmailCandidate;
