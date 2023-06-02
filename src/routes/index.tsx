import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CSRBoard, Dashboard, Login, QueryBuilderComponent } from '../pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/boards/:board',
    element: <CSRBoard />,
  },
  {
    path: '/query',
    element: <QueryBuilderComponent />,
  },
]);

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={privateRoutes} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default AppRoutes;
