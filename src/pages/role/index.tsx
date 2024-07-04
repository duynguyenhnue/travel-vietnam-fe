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
import { getRoles } from 'src/redux/slices/roles';
import NewRole from 'src/sections/roles/new-roles';
import EditRole from 'src/sections/roles/edit-roles';
import ViewRole from 'src/sections/roles/view-roles';
import DeleteRole from 'src/sections/roles/delete-roles';
import { getPermissions } from 'src/redux/slices/permissions';
import { ListRole } from 'src/sections/roles/list-roles';


const RolesPage = () => {
  const settings = useSettings();
  const [open, setOpen] = useState<boolean>(false);
  const [currentRole, setCurrentRole] = useState<string>('');
  const [viewOpen, setViewOpen] = useState<ViewOpenStateType>({
    send_email: false,
    view: false,
    edit: false,
    delete: false,
  });


  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();

  const { roles, page, size } = useSelector((state) => state.roles);
  const { permissions } = useSelector((state) => state.permissions);

  useEffect(() => {
    dispatch(getRoles(page,size));
    dispatch(getPermissions(0, 5));
  }, []);

  const role = roles && roles?.find((item) => item._id === currentRole);

  const findNameById = (id: string) => {
    const foundItem = permissions && permissions.find(item => item._id === id);
    return foundItem ? foundItem.actions.name : null;
    };

  return (
    <>
      <Seo title="Roles" />
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
                  <Typography variant="h4">Role</Typography>
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
                      New Role
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12}>
              <ListRole
                setViewOpen={setViewOpen}
                setCurrentRole={setCurrentRole}
                findNameById={findNameById}
              />
            </Grid>
            <Grid xs={12}>
              <NewRole
                open={open}
                setOpen={setOpen}
                permissions={permissions||[]}
              />
            </Grid>
            <Grid xs={12}>
              <EditRole
                open={viewOpen}
                setOpen={setViewOpen}
                role={role&& role}
                currentRole={currentRole}
                permissions={permissions||[]}
              />
            </Grid>
            <Grid xs={12}>
              <DeleteRole
                open={viewOpen}
                setOpen={setViewOpen}
                role={role && role}
              />
            </Grid>
            <Grid xs={12}>
              <ViewRole
                open={viewOpen}
                setOpen={setViewOpen}
                role={role&& role}
                findNameById={findNameById}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default RolesPage;
