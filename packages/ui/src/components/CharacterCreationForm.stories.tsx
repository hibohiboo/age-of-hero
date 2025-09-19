import { CharacterCreationForm } from './CharacterCreationForm';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CharacterCreationForm> = {
  title: 'Components/CharacterCreationForm',
  component: CharacterCreationForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Character creation submitted:', data);
    },
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Character creation submitted:', data);
    },
    isLoading: true,
  },
};
