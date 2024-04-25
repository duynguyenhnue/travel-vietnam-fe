import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { Outlet } from 'react-router-dom';
import AuthProvider from 'src/contexts/auth-provider';

const CandidatesPage = lazy(() => import('src/pages/hr/candidate'));

export const hrRoutes: RouteObject[] = [
  {
    path: 'hr',
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
            path: '/hr/candidate',
            element: <CandidatesPage />,
          },
        ],
      },
    ],
  },
];
