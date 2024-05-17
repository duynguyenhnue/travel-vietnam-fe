import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { Outlet } from 'react-router-dom';
import AuthProvider from 'src/contexts/auth-provider';

const RolePage = lazy(() => import('src/pages/role/index'));

export const rolesRoutes: RouteObject[] = [
  {
    path: 'roles',
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
            element: <RolePage />,
          },
        ],
      },
    ],
  },
];
