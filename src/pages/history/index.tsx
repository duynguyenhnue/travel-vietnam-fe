import { Box, Stack } from '@mui/system';
import { Seo } from 'src/components/common/performance/seo';
import { useSettings } from 'src/hooks/use-settings';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Unstable_Grid/Grid';
import {Typography } from '@mui/material';
import { CandidateTransactions } from 'src/sections/hr/candidate/list-candidate';
import { useEffect, useState } from 'react';
import DeleteCandidate from 'src/sections/hr/candidate/delete-candidate';
import ViewCandidate from 'src/sections/hr/candidate/view-candidate';
import { useDispatch, useSelector } from 'src/redux/store';
import { getCandidate } from 'src/redux/slices/hr/candidate/candidate';
import { ViewOpenStateType } from 'src/types/hr/candidate';
import RestoreCandidate from 'src/sections/hr/candidate/restore-candidate';



const HistoryPage = () => {
  const settings = useSettings();
  const [currentCandidate, setCurrentCandidate] = useState<string>('');
  const [viewOpen, setViewOpen] = useState<ViewOpenStateType>({
    send_email: false,
    view: false,
    edit: false,
    delete: false,
    restore: false
  });
  const dispatch = useDispatch();

  const { candidates, page, size } = useSelector((state) => state.candidate);
  useEffect(() => {
    dispatch(getCandidate(page, size, "deleted"));
  }, []);

  const candidate = candidates && candidates?.find((item) => item._id === currentCandidate);

  return (
    <>
      <Seo title="HR - History" />
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
                  <Typography variant="h4">History</Typography>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12}>
              <CandidateTransactions
                setViewOpen={setViewOpen}
                setCurrentCandidate={setCurrentCandidate}
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
              <RestoreCandidate
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default HistoryPage;
