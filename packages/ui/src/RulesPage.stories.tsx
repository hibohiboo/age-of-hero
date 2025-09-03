import { RulesPage } from './RulesPage';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof RulesPage> = {
  title: 'Pages/RulesPage',
  component: RulesPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};