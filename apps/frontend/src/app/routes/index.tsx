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
import { Page as CharacterCreatePage } from '@age-of-hero/frontend/page/character-create';
import { Page as CharacterDetailPage } from '@age-of-hero/frontend/page/character-detail';
import { Page as CharacterEditPage } from '@age-of-hero/frontend/page/character-edit';
import { Page as CharacterListPage } from '@age-of-hero/frontend/page/character-list';
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
import { useSpreadSheetSkillData } from '@age-of-hero/frontend/shared/spreadsheet';

const ClassPageWrapper = ({ className, Component }: { className: string; Component: React.ComponentType<{ skills?: any[] }> }) => {
  const skillData = useSpreadSheetSkillData();
  const filteredSkills = skillData.filter(skill => skill.class === className);
  return <Component skills={filteredSkills} />;
};

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
          path: 'character/create',
          element: <CharacterCreatePage />,
        },
        {
          path: 'character-list',
          element: <CharacterListPage />,
        },
        {
          path: 'character/:id',
          element: <CharacterDetailPage />,
        },
        {
          path: 'character/:id/edit',
          element: <CharacterEditPage />,
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
          element: <ClassPageWrapper className="マッスル" Component={MuscleClassPage} />,
        },
        {
          path: 'character/technology',
          element: <ClassPageWrapper className="テクノロジー" Component={TechnologyClassPage} />,
        },
        {
          path: 'character/bio',
          element: <ClassPageWrapper className="バイオ" Component={BioClassPage} />
        },
        {
          path: 'character/esperanto',
          element: <ClassPageWrapper className="エスペラント" Component={EsperantoClassPage} />,
        },
        {
          path: 'character/magical',
          element: <ClassPageWrapper className="マジカル" Component={MagicalClassPage} />,
        },
        {
          path: 'character/psychic',
          element: <ClassPageWrapper className="サイキック" Component={PsychicClassPage} />,
        },
        {
          path: 'character/artifact',
          element: <ClassPageWrapper className="アーティファクト" Component={ArtifactClassPage} />,
        },
        {
          path: 'character/arts',
          element: <ClassPageWrapper className="アーツ" Component={ArtsClassPage} />,
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
