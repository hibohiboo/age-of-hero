import { createBrowserRouter } from 'react-router';
import {
  AcclaimRulePage,
  BattleRulePage,
  JudgmentRulePage,
  RulesPage,
  SessionProgressPage,
} from '@age-of-hero/frontend/page/rules';
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
          path: 'rules',
          element: <RulesPage />,
        },
        {
          path: 'rules/character-creation',
          element: <CharacterCreationPage />,
        },
        {
          path: 'rules/judgment',
          element: <JudgmentRulePage />,
        },
        {
          path: 'rules/session',
          element: <SessionProgressPage />,
        },
        {
          path: 'rules/applause',
          element: <AcclaimRulePage />,
        },
        {
          path: 'rules/combat',
          element: <BattleRulePage />,
        },
      ],
    },
  ]);
