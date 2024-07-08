import { Grid, Modal, Typography, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PropertyList } from 'src/components/common/list/property-list';
import { PropertyListItem } from 'src/components/common/list/property-list-item';
import { tokens } from 'src/locales/tokens';
import { ViewCandidateType } from 'src/types/hr/candidate';
import { CardContentStyle } from './styles';

const ViewCandidate = (props: ViewCandidateType) => {
  const { open, setOpen, candidate } = props;
  const theme = createTheme();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });

  return (
    <Modal
      open={open.view}
      onClose={handleClose}
      aria-labelledby="view-candidate"
      aria-describedby="view-candidate"
    >
      <CardContentStyle>
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
                label={t(tokens.nav.role)}
                value={(candidate && candidate.role) || ''}
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
                label={t(tokens.nav.skillsSummary)}
                value={(candidate && candidate.skillsSummary) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label={'CV'}
                value={
                  candidate?.cvUrl && (
                    <Link to={candidate?.cvUrl || ''}>
                      {candidate?.cvUrl.split('/')[candidate?.cvUrl.split('/').length - 1]}
                    </Link>
                  )
                }
              />
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
                label={t(tokens.nav.interview)}
                value={(candidate && candidate.interview) || ''}
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
                label={t(tokens.nav.onboardDate)}
                value={(candidate && candidate.onboardDate) || ''}
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
                label="DOB"
                value={
                  candidate && candidate.dob
                    ? `${new Date(candidate.dob).getDay()}-${
                        new Date(candidate.dob).getMonth() + 1
                      }-${new Date(candidate.dob).getFullYear()}`
                    : ''
                }
              />
            </PropertyList>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default ViewCandidate;
