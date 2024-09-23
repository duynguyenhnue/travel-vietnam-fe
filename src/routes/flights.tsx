import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';

const FlightsPage = lazy(() => import('src/pages/flights/index'));
const FlightBookingPage = lazy(() => import('src/sections/flights/flight-booking'));
const Error404Page = lazy(() => import('src/pages/404'));

export const flightsRoutes: RouteObject[] = [
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
        path: '/flights',
        element: <FlightsPage />,
      },
      {
        path: '/flights/:flightId',
        element: <FlightBookingPage />,
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
