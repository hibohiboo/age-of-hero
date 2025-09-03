import { createBrowserRouter } from 'react-router';
import { Page as CharacterCreationPage } from '@age-of-hero/frontend/page/rules/character-creation';
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
        {
          path: 'rules/character-creation',
          element: <CharacterCreationPage />,
        },
      ],
    },
  ]);
