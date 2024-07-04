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
import { ListPermission } from 'src/sections/permissions/list-permissions';
import { getPermissions } from 'src/redux/slices/permissions';
import DeletePermission from 'src/sections/permissions/delete-permissions';
import ViewPermission from 'src/sections/permissions/view-permissions';
import NewPermission from 'src/sections/permissions/new-permissions';
import EditPermission from 'src/sections/permissions/edit-permissions';


const PermissionsPage = () => {
  const settings = useSettings();
  const [open, setOpen] = useState<boolean>(false);
  const [currentPermission, setCurrentPermission] = useState<string>('');
  const [viewOpen, setViewOpen] = useState<ViewOpenStateType>({
    send_email: false,
    view: false,
    edit: false,
    delete: false,
  });


  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();

  const { permissions, page, size } = useSelector((state) => state.permissions);
  useEffect(() => {
    dispatch(getPermissions(page,size));
  }, []);

  const permission = permissions && permissions?.find((item) => item._id === currentPermission);

  return (
    <>
      <Seo title="Permissions" />
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
                  <Typography variant="h4">Permission</Typography>
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
                      New Permission
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12}>
              <ListPermission
                setViewOpen={setViewOpen}
                setCurrentPermission={setCurrentPermission}
              />
            </Grid>
            <Grid xs={12}>
              <NewPermission
                open={open}
                setOpen={setOpen}
              />
            </Grid>
            <Grid xs={12}>
              <EditPermission
                open={viewOpen}
                setOpen={setViewOpen}
                permission={permission&& permission}
                currentPermission={currentPermission}
              />
            </Grid>
            <Grid xs={12}>
              <DeletePermission
                open={viewOpen}
                setOpen={setViewOpen}
                permission={permission && permission}
              />
            </Grid>
            <Grid xs={12}>
              <ViewPermission
                open={viewOpen}
                setOpen={setViewOpen}
                permission={permission&& permission}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default PermissionsPage;
