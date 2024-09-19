import React, { useState } from 'react';
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

const SIDE_NAV_WIDTH = 280;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { t } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accessToken = localStorage.getItem(localStorageConfig.accessToken);

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
                  {accessToken ? (
                    <MenuItem onClick={handleClose}>
                      <RouterLink href="/">{t(tokens.nav.logout)}</RouterLink>
                    </MenuItem>
                  ) : (
                    <>
                      <MenuItem onClick={handleClose}>
                        <RouterLink href="/auth/login">{t(tokens.nav.login)}</RouterLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <RouterLink href="/auth/register">{t(tokens.nav.register)}</RouterLink>
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
                {accessToken ? (
                  <StyledButton
                    color="inherit"
                    variant="outlined"
                  >
                    <RouterLink href="/">{t(tokens.nav.logout)}</RouterLink>
                  </StyledButton>
                ) : (
                  <>
                    <StyledButton
                      color="inherit"
                      startIcon={<FaUser />}
                    >
                      <RouterLink href="/auth/login">{t(tokens.nav.login)}</RouterLink>
                    </StyledButton>
                    <StyledButton
                      color="inherit"
                      variant="outlined"
                    >
                      <RouterLink href="/auth/login">{t(tokens.nav.register)}</RouterLink>
                    </StyledButton>
                  </>
                )}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
