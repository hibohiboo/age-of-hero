import { CharacterCreationPage } from './CharacterCreationPage';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CharacterCreationPage> = {
  title: 'Pages/CharacterCreationPage',
  component: CharacterCreationPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};