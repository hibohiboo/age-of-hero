import { Layout } from '../components/Layout';
import { BioClassPage } from '../pages/BioClassPage';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Pages/Classes/BioClassPage',
  component: BioClassPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Layout title="Age of Hero TRPG">
        <Story />
      </Layout>
    ),
  ],
} satisfies Meta<typeof BioClassPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};