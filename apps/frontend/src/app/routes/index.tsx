import { createBrowserRouter } from 'react-router';
import { TopPage } from '@age-of-hero/frontend/page/top';
import { Layout } from '@age-of-hero/frontend/shared/layout';


export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '',
          element: <TopPage />,
        },
      ],
    },
  ]);
