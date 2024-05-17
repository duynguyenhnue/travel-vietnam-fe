import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { Outlet } from 'react-router-dom';
import AuthProvider from 'src/contexts/auth-provider';

const PermissionsPage = lazy(() => import('src/pages/permissions/index'));

export const memberRoutes: RouteObject[] = [
  {
    path: 'permissions',
    children: [
      {
        element: (
          <AuthProvider>
            <DashboardLayout>
              <Suspense>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          </AuthProvider>
        ),
        children: [
          {
            path: '',
            element: <PermissionsPage />,
          },
        ],
      },
    ],
  },
];
