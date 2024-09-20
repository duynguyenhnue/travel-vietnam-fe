import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet, Route, Routes } from 'react-router-dom';
import { UserLayout } from 'src/layouts/user/layout';

const HomePage = lazy(() => import('src/pages/home/index'));
const Error404Page = lazy(() => import('src/pages/404'));

export const routes: RouteObject[] = [
  {
    element: (
      <UserLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </UserLayout>
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
];
