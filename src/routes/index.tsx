import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { CSRBoard, Dashboard, Login, QueryBuilderComponent } from '../pages';

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
