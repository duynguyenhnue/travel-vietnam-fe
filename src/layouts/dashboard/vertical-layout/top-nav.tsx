import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, List, ListItem, ListItemText, Drawer, Dialog, Stack, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';
import { localStorageConfig } from 'src/config';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import LoginPage from 'src/pages/auth/login';
import RegisterPage from 'src/pages/auth/register';
import { RouterLink } from 'src/components/common/router/router-link';
import { StyledButton } from 'src/styles/user/nav-bar';
import { useDispatch, useSelector } from 'src/redux/store';
import { useDialog } from 'src/hooks/use-dialog';
import { handleOpenDialog, logout } from 'src/redux/slices/authentication';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { LanguageSwitch } from '../language-switch';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
  { path: '/hotels', display: 'Hotels' },
];

export const TopNav = () => {
  const dialog = useDialog();
  const dispatch = useDispatch();
  const headerRef = useRef<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (headerRef.current) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          headerRef.current.style.backgroundColor = '#fff';
          headerRef.current.style.boxShadow = '3px 3px 8px -3px #ddd';
        } else {
          headerRef.current.style.backgroundColor = 'transparent';
          headerRef.current.style.boxShadow = 'none';
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  const { open } = useSelector((state: any) => state.authentication);

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

  const { t } = useTranslation();
  return (
    <AppBar
      position="sticky"
      ref={headerRef}
      sx={{
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ display: 'flex', gap: 2.5 }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src="/assets/logo.png" alt="Logo" style={{ height: '50px' }} />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                style={{ textDecoration: 'none', color: '#0b2727' }}
                className={({ isActive }) => (isActive ? 'active__link' : '')}
              >
                <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.5rem', '&:hover': { color: '#faa935' }, color: '#0b2727' }}>
                  {item.display}
                </Typography>
              </NavLink>
            ))}
          </Box>
          <LanguageSwitch />
          {isTokenValid ? (
            <MenuItem
              onClick={() => {
                dialog.handleOpen();
                dispatch(handleOpenDialog('logout'));
              }}
              sx={{
                background: '#faa935',
                border: 'none',
                borderRadius: '50px',
                padding: '0.4rem 1.5rem',
                ":hover": {
                  background: '#ff7e01'
                }
              }}
            >
              {t(tokens.nav.logout)}
            </MenuItem>
          ) : (
            <>
              <MenuItem
                onClick={() => {
                  dialog.handleOpen();
                  dispatch(handleOpenDialog('login'));
                }}
                sx={{
                  background: '#faa935',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.4rem 1.5rem',
                  ":hover": {
                    background: '#ff7e01'
                  }
                }}
              >
                {t(tokens.nav.login)}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dialog.handleOpen();
                  dispatch(handleOpenDialog('register'));
                }}
                sx={{
                  background: '#ff7e01',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.4rem 1.5rem',
                  ":hover": {
                    background: '#ff7e01'
                  }
                }}
              >
                {t(tokens.nav.register)}
              </MenuItem>
            </>
          )}
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
          )
          }

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }}>
            {navLinks.map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer}>
                <NavLink
                  to={item.path}
                  style={{ textDecoration: 'none', color: '#0b2727', width: '100%' }}
                  className={({ isActive }) => (isActive ? 'active__link' : '')}
                >
                  <ListItemText primary={item.display} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar >
  );
};