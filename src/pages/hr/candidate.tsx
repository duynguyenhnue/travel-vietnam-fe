import { Box, Stack } from '@mui/system';
import { Seo } from 'src/components/common/performance/seo';
import { useSettings } from 'src/hooks/use-settings';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Unstable_Grid/Grid';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { Button, SvgIcon, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { CandidateTransactions } from 'src/sections/hr/candidate/list-candidate';
import { useEffect, useState } from 'react';
import NewCandidate from 'src/sections/hr/candidate/new-candidate';
import EditAndDeleteCandidate from 'src/sections/hr/candidate/edit-candidate';
import DeleteCandidate from 'src/sections/hr/candidate/delete-candidate';
import ViewCandidate from 'src/sections/hr/candidate/view-candidate';
import { useDispatch, useSelector } from 'src/redux/store';
import { getCandidate } from 'src/redux/slices/hr/candidate/candidate';
import SendEmailCandidate from 'src/sections/hr/candidate/send-email-candidate';
import FilterCandidate from 'src/sections/hr/candidate/filter-candidate';
import { ViewOpenStateType } from 'src/types/hr/candidate';



const CandidatePage = () => {
  const settings = useSettings();
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [currentCandidate, setCurrentCandidate] = useState<string>('');
  const [viewOpen, setViewOpen] = useState<ViewOpenStateType>({
    send_email: false,
    view: false,
    edit: false,
    delete: false,
  });
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();

  const { candidates, page, size } = useSelector((state) => state.candidate);
  useEffect(() => {
    dispatch(getCandidate(page, size));
  }, []);

  const candidate = candidates && candidates?.find((item) => item._id === currentCandidate);

  return (
    <>
      <Seo title="HR - Candidate" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <div>
                  <Typography variant="h4">{t(tokens.nav.candidate)}</Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      startIcon={
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      }
                      onClick={handleOpen}
                      variant="contained"
                    >
                      {t(tokens.nav.newCandidate)}
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid
              xs={8}
              sm={4}
              md={3}
            >
              <FilterCandidate />
            </Grid>
            <Grid xs={12}>
              <CandidateTransactions
                setViewOpen={setViewOpen}
                setCurrentCandidate={setCurrentCandidate}
              />
            </Grid>
            <Grid xs={12}>
              <NewCandidate
                open={open}
                setOpen={setOpen}
              />
            </Grid>
            <Grid xs={12}>
              <EditAndDeleteCandidate
                open={viewOpen}
                setOpen={setViewOpen}
                candidate={candidate && candidate}
                currentCandidate={currentCandidate}
              />
            </Grid>
            <Grid xs={12}>
              <DeleteCandidate
                open={viewOpen}
                setOpen={setViewOpen}
                candidate={candidates && candidate}
              />
            </Grid>
            <Grid xs={12}>
              <ViewCandidate
                open={viewOpen}
                setOpen={setViewOpen}
                candidate={candidates && candidate}
              />
            </Grid>
            <Grid xs={12}>
              {candidate && (
                <SendEmailCandidate
                  open={viewOpen}
                  setOpen={setViewOpen}
                  candidate={candidate && candidate}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default CandidatePage;
