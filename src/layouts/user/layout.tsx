import type { FC, ReactNode } from 'react';
import { Stack } from '@mui/material';
import NavBar from './top-nav';
import Footer from './footer';

interface VerticalLayoutProps {
  children?: ReactNode;
}

export const UserLayout: FC<VerticalLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <Stack>{children}</Stack>
      <Footer />
    </>
  );
};
