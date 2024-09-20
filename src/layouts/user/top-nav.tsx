import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
  Container,
  Dialog,
  Stack,
} from '@mui/material';
import { alpha } from '@mui/system/colorManipulator';
import { FaHotel, FaPlane, FaShuttleVan, FaUser } from 'react-icons/fa';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { localStorageConfig } from 'src/config';
import { LanguageSwitch } from '../dashboard/language-switch';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { StyledButton } from 'src/styles/user/nav-bar';
import { RouterLink } from 'src/components/common/router/router-link';
import { useDialog } from 'src/hooks/use-dialog';
import LoginPage from 'src/pages/auth/login';
import RegisterPage from 'src/pages/auth/register';
import { useDispatch, useSelector } from 'src/redux/store';
import { handleOpenDialog, logout } from 'src/redux/slices/authentication';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

const SIDE_NAV_WIDTH = 280;

const NavBar = () => {
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
          setIsTokenValid(false);
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

  const menuItems = [
    { icon: <FaHotel />, label: t(tokens.common.hotels) },
    { icon: <FaPlane />, label: t(tokens.common.flights) },
    { icon: <FaShuttleVan />, label: t(tokens.common.airportTransfer) },
  ];

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ padding: '0 !important' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Travel Vietnamese
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
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        {item.icon}
                        {item.label}
                      </Box>
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
                  <StyledButton
                    key={index}
                    color="inherit"
                    startIcon={item.icon}
                  >
                    {item.label}
                  </StyledButton>
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
        </Container>
      </AppBar>
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
    </Box>
  );
};

export default NavBar;
