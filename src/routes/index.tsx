import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { hotelsRoutes } from './hotels';
import { toursRoutes } from './tours';
import { aboutRoutes } from './about';

const HomePage = lazy(() => import('src/pages/index'));
const Error404Page = lazy(() => import('src/pages/404'));

export const routes: RouteObject[] = [
  {
    element: (
      <>
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="*"
            element={<Error404Page />}
          />
        </Routes>
      </Suspense>
    ),
  },
  ...hotelsRoutes,
  ...toursRoutes,
  ...aboutRoutes,
];
