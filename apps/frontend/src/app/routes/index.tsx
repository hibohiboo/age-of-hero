import {
  ArtifactClassPage,
  ArtsClassPage,
  BioClassPage,
  EsperantoClassPage,
  HeroBirthPage,
  HeroSkillPage,
  ItemsPage,
  MagicalClassPage,
  MuscleClassPage,
  PsychicClassPage,
  TechnologyClassPage,
  UltimateSkillPage,
} from '@age-of-hero/ui/index';
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
        {
          path: 'world/hero-birth',
          element: <HeroBirthPage />,
        },
        {
          path: 'character/hero-skill-guide',
          element: <HeroSkillPage />,
        },
        {
          path: 'character/muscle',
          element: <MuscleClassPage />,
        },
        {
          path: 'character/technology',
          element: <TechnologyClassPage />,
        },
        { path: 'character/bio', element: <BioClassPage /> },
        {
          path: 'character/esperanto',
          element: <EsperantoClassPage />,
        },
        {
          path: 'character/magical',
          element: <MagicalClassPage />,
        },
        {
          path: 'character/psychic',
          element: <PsychicClassPage />,
        },
        {
          path: 'character/artifact',
          element: <ArtifactClassPage />,
        },
        {
          path: 'character/arts',
          element: <ArtsClassPage />,
        },
        {
          path: 'character/ultimate-skill',
          element: <UltimateSkillPage />,
        },
        {
          path: 'character/item',
          element: <ItemsPage />,
        },
      ],
    },
  ]);
