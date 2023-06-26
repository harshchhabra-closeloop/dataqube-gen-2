import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from 'src/components/layout';

import {
  CSRBoard,
  Dashboard,
  KPIBuilder,
  KPIListing,
  Login,
  QueryBuilderComponent,
} from '../pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/boards/:board" element={<CSRBoard />} />
      <Route path="query" element={<QueryBuilderComponent />} />
      <Route path="kpi" element={<Layout />}>
        <Route path="list" element={<KPIListing />} />
        <Route path="builder" element={<KPIBuilder />} />
      </Route>
    </Route>,
  ),
);

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default AppRoutes;
