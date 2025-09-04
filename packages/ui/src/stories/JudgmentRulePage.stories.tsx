import { JudgmentRulePage } from '../pages/JudgmentRulePage';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Pages/JudgmentRulePage',
  component: JudgmentRulePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JudgmentRulePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
