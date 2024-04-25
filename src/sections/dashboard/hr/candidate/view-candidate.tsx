import { CardContent, Grid, Modal, Typography, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { CandidateType } from 'src/types/hr/candidate';
type ViewCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
};

const ViewCandidate = (props: ViewCandidateType) => {
  const { open, setOpen, candidate } = props;
  const theme = createTheme();

  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const handleClose = () => setOpen({ view: false, edit: false, delete: false });

  return (
    <Modal
      open={open.view}
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
              Candidate details
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
                label="FullName"
                value={(candidate && candidate.name) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Status"
                value={(candidate && candidate.status) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Contact"
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Email: {candidate && candidate.contact.email}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Phone: {candidate && candidate.contact.phone}
                </Typography>
              </PropertyListItem>
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Interview information"
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Time: {candidate && candidate.interviewInformation.dateTime}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Link:{' '}
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
                value={(candidate && candidate.dob) || ''}
              />

              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="University major"
                value={(candidate && candidate.universityMajor) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Project experience"
                value={(candidate && candidate.projectExperience) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Skills summary"
                value={(candidate && candidate.skillsSummary) || ''}
              />
              <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Certificate"
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
