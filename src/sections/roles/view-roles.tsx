import { Grid, Modal, Typography, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { PropertyList } from 'src/components/common/list/property-list';
import { PropertyListItem } from 'src/components/common/list/property-list-item';
import { tokens } from 'src/locales/tokens';
import { CardContentStyle } from './styles';
import { ViewRolesType } from 'src/types/roles';

const ViewRole = (props: ViewRolesType) => {
  const { open, setOpen, role, findNameById } = props;
  const theme = createTheme();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });

  return (
    <Modal
      open={open.view}
      onClose={handleClose}
      aria-labelledby="view-member"
      aria-describedby="view-member"
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
              Role
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
                value={(role && role.name) || ''}
              />

            <PropertyListItem
                align={align}
                disableGutters
                divider
                label="Permissions"
                value={(role && role.permissions.map(permission => findNameById(permission)).join(", ")) || ''}
              />
            </PropertyList>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default ViewRole;
