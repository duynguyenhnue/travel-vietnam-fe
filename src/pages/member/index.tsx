import { Box, Stack } from '@mui/system';
import { Seo } from 'src/components/common/performance/seo';
import { useSettings } from 'src/hooks/use-settings';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Unstable_Grid/Grid';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { Button, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { ViewOpenStateType } from 'src/types/hr/candidate';
import { ListMember } from 'src/sections/member/list-member';
import { getMember } from 'src/redux/slices/member';
import NewMember from 'src/sections/member/new-member';
import ViewMember from 'src/sections/member/view-member';
import EditMember from 'src/sections/member/edit-member';
import DeleteMember from 'src/sections/member/delete-member';


const roles: string[] = [
  'Admin',
  'Editor',
  'User',
  'Viewer',
  'Contributor',
];

const MemberPage = () => {
  const settings = useSettings();
  const [open, setOpen] = useState<boolean>(false);
  const [currentMember, setCurrentMember] = useState<string>('');
  const [viewOpen, setViewOpen] = useState<ViewOpenStateType>({
    send_email: false,
    view: false,
    edit: false,
    delete: false,
  });


  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();

  const { members, page, size } = useSelector((state) => state.member);
  useEffect(() => {
    dispatch(getMember(page,size));
  }, []);

  const member = members && members?.find((item) => item._id === currentMember);

  return (
    <>
      <Seo title="Member" />
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
                  <Typography variant="h4">Member</Typography>
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
                      New Member
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12}>
              <ListMember
                setViewOpen={setViewOpen}
                setCurrentMember={setCurrentMember}
              />
            </Grid>
            <Grid xs={12}>
              <NewMember
                open={open}
                setOpen={setOpen}
                roles={roles}
              />
            </Grid>
            <Grid xs={12}>
              <EditMember
                open={viewOpen}
                setOpen={setViewOpen}
                member={member && member}
                currentMember={currentMember}
                roles={roles}
              />
            </Grid>
            <Grid xs={12}>
              <DeleteMember
                open={viewOpen}
                setOpen={setViewOpen}
                member={member && member}
              />
            </Grid>
            <Grid xs={12}>
              <ViewMember
                open={viewOpen}
                setOpen={setViewOpen}
                member={member&& member}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default MemberPage;
