import { CardContent, Grid, Modal, Typography, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { tokens } from 'src/locales/tokens';
import { CandidateType } from 'src/types/hr/candidate';
type ViewCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
};

const ViewCandidate = (props: ViewCandidateType) => {
  const { open, setOpen, candidate } = props;
  const theme = createTheme();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const handleClose = () => setOpen({ view: false, edit: false, delete: false });

  return (
    <Modal
      open={open.view}
      onClose={handleClose}
      aria-labelledby="view-candidate"
      aria-describedby="view-candidate"
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
          spacing={2}
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
          >
            <PropertyList>
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.name)}
                value={(candidate && candidate.name) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.status)}
                value={(candidate && candidate.status) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.contact)}
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {t(tokens.nav.email)}: {candidate && candidate.contact.email}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {t(tokens.nav.phone)}: {candidate && candidate.contact.phone}
                </Typography>
              </PropertyListItem>
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.interviewInformation)}
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {t(tokens.nav.time)}: {candidate && candidate.interviewInformation.dateTime}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {t(tokens.nav.link)}:{' '}
                  <Link to={(candidate && candidate.interviewInformation.linkGmeet) || ''}>
                    {candidate && candidate.interviewInformation.linkGmeet}
                  </Link>
                </Typography>
              </PropertyListItem>
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="DOB"
                value={
                  candidate && candidate.dob
                    ? `${new Date(candidate.dob).getDay()}-${
                        new Date(candidate.dob).getMonth() + 1
                      }-${new Date(candidate.dob).getFullYear()}`
                    : ''
                }
              />

              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.universityMajor)}
                value={(candidate && candidate.universityMajor) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.projectExperience)}
                value={(candidate && candidate.projectExperience) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.skillsSummary)}
                value={(candidate && candidate.skillsSummary) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={t(tokens.nav.certificate)}
                value={(candidate && candidate.certificate) || ''}
              />
            </PropertyList>
          </Grid>
        </Grid>
      </CardContent>
    </Modal>
  );
};

export default ViewCandidate;
