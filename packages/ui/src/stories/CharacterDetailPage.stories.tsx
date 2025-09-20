import type { Meta, StoryObj } from '@storybook/react';
import { CharacterDetailPage, type CharacterDetail } from '../pages/CharacterDetailPage';

const meta: Meta<typeof CharacterDetailPage> = {
  title: 'Pages/CharacterDetailPage',
  component: CharacterDetailPage,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCharacter: CharacterDetail = {
  id: '1',
  name: '山田太郎',
  createdAt: '2024-01-15T10:30:00Z',
  updatedAt: '2024-01-20T14:45:00Z',
  characterData: {
    selectedClasses: {
      primary: 'マッスル',
      secondary: 'テクノロジー',
    },
    abilities: {
      physical: 6,
      reflex: 4,
      sensory: 5,
      intellectual: 3,
      supernatural: 0,
    },
    skills: {
      'パワー': {
        baseValue: 60,
        allocatedPoints: 20,
        totalValue: 80,
      },
      '技術': {
        baseValue: 40,
        allocatedPoints: 20,
        totalValue: 60,
      },
      '運動': {
        baseValue: 40,
        allocatedPoints: 30,
        totalValue: 70,
      },
      'タフネス': {
        baseValue: 60,
        allocatedPoints: 5,
        totalValue: 65,
      },
      '知覚': {
        baseValue: 50,
        allocatedPoints: 5,
        totalValue: 55,
      },
      '情報': {
        baseValue: 30,
        allocatedPoints: 10,
        totalValue: 40,
      },
      '交渉': {
        baseValue: 30,
        allocatedPoints: 5,
        totalValue: 35,
      },
    },
    heroSkills: {
      'パワードライブ': {
        name: 'パワードライブ',
        level: 3,
        maxLevel: 7,
        timing: 'メジャーアクション',
        skill: 'パワー',
        target: '単体',
        range: '近接',
        cost: 3,
        effect: 'パワー+レベルで攻撃。成功時追加ダメージ。',
      },
      'ファイトバック': {
        name: 'ファイトバック',
        level: 2,
        maxLevel: 5,
        timing: 'リアクション',
        skill: '運動',
        target: '自分',
        range: '自分',
        cost: 2,
        effect: '攻撃を受けた際、回避判定に+レベルのボーナス。',
      },
    },
    specialAttacks: {
      'パワースマッシュ': {
        name: 'パワースマッシュ',
        level: 4,
        maxLevel: 7,
        timing: 'メジャーアクション',
        skill: 'パワー',
        target: '単体',
        range: '近接',
        cost: 4,
        effect: '近接攻撃。成功時ダメージ+レベル。対象は1ラウンド行動不能。',
      },
    },
    items: {
      '特製グローブ': {
        type: '白兵',
        skill: 'パワー',
        modifier: '+5%',
        attackPower: '+2',
        guardValue: '1',
        range: '至近',
        price: 25,
        effect: '近接攻撃の命中率が向上する特製グローブ',
      },
      'エナジードリンク': {
        type: '消耗品',
        price: 15,
        effect: 'マイナーアクションで使用可能。HPを2D点回復する。',
        quantity: 3,
      },
    },
    status: {
      hp: 68,
      sp: 42,
      actionValue: 14,
    },
    sessions: [
      {
        id: 'session1',
        sessionName: '街に現れた怪物',
        gmName: '佐藤GM',
        sessionDate: '2024-01-20',
        currentHp: 65,
        currentSp: 40,
        currentFc: 12,
        experiencePoints: 15,
        memo: '初回セッション。チームワークが良かった。',
        createdAt: '2024-01-20T22:30:00Z',
      },
      {
        id: 'session2',
        sessionName: '地下施設の謎',
        gmName: '佐藤GM',
        sessionDate: '2024-01-27',
        currentHp: 68,
        currentSp: 35,
        currentFc: 8,
        experiencePoints: 18,
        memo: '謎解きが難しかったが、最終的に解決できた。新しいスキルを習得。',
        createdAt: '2024-01-27T23:15:00Z',
      },
    ],
    metadata: {
      version: '1.0.0',
    },
  },
};

export const Default: Story = {
  args: {
    character: sampleCharacter,
    loading: false,
    error: null,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    loading: false,
    error: 'キャラクターの取得に失敗しました',
    onRetry: () => console.log('Retry clicked'),
  },
};

export const NotFound: Story = {
  args: {
    character: undefined,
    loading: false,
    error: null,
  },
};

export const MinimalCharacter: Story = {
  args: {
    character: {
      id: '2',
      name: '新人ヒーロー',
      createdAt: '2024-01-25T12:00:00Z',
      updatedAt: '2024-01-25T12:00:00Z',
      characterData: {
        selectedClasses: {
          primary: 'バイオ',
          secondary: 'バイオ',
        },
        abilities: {
          physical: 4,
          reflex: 4,
          sensory: 4,
          intellectual: 4,
          supernatural: 0,
        },
        skills: {
          'パワー': {
            baseValue: 40,
            allocatedPoints: 0,
            totalValue: 40,
          },
          '運動': {
            baseValue: 40,
            allocatedPoints: 20,
            totalValue: 60,
          },
        },
        heroSkills: {},
        specialAttacks: {},
        items: {},
        status: {
          hp: 72,
          sp: 38,
          actionValue: 16,
        },
        sessions: [],
        metadata: {
          version: '1.0.0',
        },
      },
    },
    loading: false,
    error: null,
  },
};