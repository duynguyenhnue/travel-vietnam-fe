import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { Outlet } from 'react-router-dom';
import AuthProvider from 'src/contexts/auth-provider';

const MemberPage = lazy(() => import('src/pages/member/index'));

export const memberRoutes: RouteObject[] = [
  {
    path: 'member',
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
            element: <MemberPage />,
          },
        ],
      },
    ],
  },
];
