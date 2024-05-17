import { Grid, Modal, Typography, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { PropertyList } from 'src/components/common/list/property-list';
import { PropertyListItem } from 'src/components/common/list/property-list-item';
import { tokens } from 'src/locales/tokens';
import { CardContentStyle } from './styles';
import { ViewPermissionsType } from 'src/types/permissions';

const ViewPermission = (props: ViewPermissionsType) => {
  const { open, setOpen, permission } = props;
  const theme = createTheme();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const handleClose = () => setOpen({ send_email: false, view: false, edit: false, delete: false });

  return (
    <Modal
      open={open.view}
      onClose={handleClose}
      aria-labelledby="view-permission"
      aria-describedby="view-permission"
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
              Permission
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
                value={(permission && permission.scope) || ''}
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
                  name: {permission && permission.actions.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Description: {permission && permission.actions.description}
                </Typography>
              </PropertyListItem>
            </PropertyList>
          </Grid>
        </Grid>
      </CardContentStyle>
    </Modal>
  );
};

export default ViewPermission;
