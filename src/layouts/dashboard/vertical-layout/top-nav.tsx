import { useEffect, useState, type FC } from 'react';
import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { alpha } from '@mui/system/colorManipulator';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, useTheme } from '@mui/system';
import { localStorageConfig } from 'src/config';
import { t } from 'i18next';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaHotel, FaPlane, FaShuttleVan, FaUser } from 'react-icons/fa';
import { useDialog } from 'src/hooks/use-dialog';
import { tokens } from 'src/locales/tokens';
import { useDispatch, useSelector } from 'src/redux/store';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Dialog } from '@mui/material';
import { RouterLink } from 'src/components/common/router/router-link';
import LoginPage from 'src/pages/auth/login';
import RegisterPage from 'src/pages/auth/register';
import { handleOpenDialog, handleRefreshToken, logout } from 'src/redux/slices/authentication';
import { StyledButton } from 'src/styles/user/nav-bar';
import { LanguageSwitch } from '../language-switch';

const menuItems = [
  { icon: <FaHotel />, label: t(tokens.common.hotels), path: '/hotels' },
  { icon: <FaPlane />, label: t(tokens.common.flights), path: '/flights' },
  { icon: <FaShuttleVan />, label: t(tokens.common.airportTransfer), path: '/airport-transfer' },
];

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { ...other } = props;

  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dialog = useDialog();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.authentication);

  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(localStorageConfig.accessToken);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp > currentTime) {
          setIsTokenValid(true);
        } else {
          dispatch(handleRefreshToken());
        }
      } catch (error) {
        toast.error('Invalid JWT token');
        localStorage.removeItem(localStorageConfig.accessToken);
        localStorage.removeItem(localStorageConfig.refreshToken);
        setIsTokenValid(false);
      }
    }
  }, [open]);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
      {...other}
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ padding: '0 !important' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <RouterLink href="/">Travel Vietnamese</RouterLink>
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <Menu01Icon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleClose}
                    >
                      <RouterLink href={item.path}>
                        <Box
                          display="flex"
                          alignItems="center"
                          gap={1}
                        >
                          {item.icon}
                          {item.label}
                        </Box>
                      </RouterLink>
                    </MenuItem>
                  ))}
                  <LanguageSwitch />
                  {isTokenValid ? (
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        dialog.handleOpen();
                        dispatch(handleOpenDialog('logout'));
                      }}
                    >
                      {t(tokens.nav.logout)}
                    </MenuItem>
                  ) : (
                    <>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          dialog.handleOpen();
                          dispatch(handleOpenDialog('login'));
                        }}
                      >
                        {t(tokens.nav.login)}
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          dialog.handleOpen();
                          dispatch(handleOpenDialog('register'));
                        }}
                      >
                        {t(tokens.nav.register)}
                      </MenuItem>
                    </>
                  )}
                </Menu>
              </>
            ) : (
              <>
                {menuItems.map((item, index) => (
                  <RouterLink
                    href={item.path}
                    key={index}
                  >
                    <StyledButton
                      color="inherit"
                      startIcon={item.icon}
                    >
                      {item.label}
                    </StyledButton>
                  </RouterLink>
                ))}
                <LanguageSwitch />
                {isTokenValid ? (
                  <StyledButton
                    color="inherit"
                    variant="outlined"
                    onClick={() => {
                      dialog.handleOpen();
                      dispatch(handleOpenDialog('logout'));
                    }}
                  >
                    {t(tokens.nav.logout)}
                  </StyledButton>
                ) : (
                  <>
                    <StyledButton
                      color="inherit"
                      startIcon={<FaUser />}
                      onClick={() => {
                        dialog.handleOpen();
                        dispatch(handleOpenDialog('login'));
                      }}
                    >
                      {t(tokens.nav.login)}
                    </StyledButton>
                    <StyledButton
                      color="inherit"
                      variant="outlined"
                      onClick={() => {
                        dialog.handleOpen();
                        dispatch(handleOpenDialog('register'));
                      }}
                    >
                      {t(tokens.nav.register)}
                    </StyledButton>
                  </>
                )}
              </>
            )}
          </Toolbar>
          {open !== '' && (
            <Dialog
              fullWidth
              maxWidth="sm"
              onClose={dialog.handleClose}
              open={dialog.open}
            >
              <Stack p={4}>
                {open === 'login' && <LoginPage />}
                {open === 'register' && <RegisterPage />}
                {open === 'logout' && (
                  <Stack spacing={2}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                    >
                      Bạn có muốn đăng xuất hay không!
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-around"
                    >
                      <RouterLink href="/">
                        <StyledButton
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            dispatch(logout());
                            dialog.handleClose();
                            setIsTokenValid(false);
                          }}
                        >
                          Đăng xuất
                        </StyledButton>
                      </RouterLink>
                      <StyledButton
                        variant="outlined"
                        onClick={dialog.handleClose}
                      >
                        Hủy
                      </StyledButton>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Dialog>
          )}
        </Container>
      </AppBar>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
