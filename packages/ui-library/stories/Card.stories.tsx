import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible container component for grouping content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Internal padding',
    },
    border: {
      control: 'boolean',
      description: 'Show border',
    },
    hoverable: {
      control: 'boolean',
      description: 'Add hover effects',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3>Card Title</h3>
        <p>This is a simple card with default styling.</p>
      </div>
    ),
    padding: 'md',
  },
};

export const WithBorder: Story = {
  args: {
    children: (
      <div>
        <h3>Card with Border</h3>
        <p>Cards can have borders for better separation.</p>
      </div>
    ),
    padding: 'md',
    border: true,
  },
};

export const Hoverable: Story = {
  args: {
    children: (
      <div>
        <h3>Clickable Card</h3>
        <p>This card responds to hover events.</p>
      </div>
    ),
    padding: 'md',
    border: true,
    hoverable: true,
  },
};

export const DifferentPaddings: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Card padding="sm" border>
        <h4>Small Padding</h4>
        <p>Compact card with less padding.</p>
      </Card>
      <Card padding="md" border>
        <h4>Medium Padding</h4>
        <p>Standard card with regular padding.</p>
      </Card>
      <Card padding="lg" border>
        <h4>Large Padding</h4>
        <p>Spacious card with generous padding.</p>
      </Card>
    </div>
  ),
};

export const ImageCard: Story = {
  args: {
    children: (
      <div>
        <div style={{ height: '200px', backgroundColor: '#f0f0f0', marginBottom: '12px', borderRadius: '6px' }}>
          Image Placeholder
        </div>
        <h3>Product Card</h3>
        <p>Great for showcasing products or content.</p>
      </div>
    ),
    padding: 'md',
    border: true,
    hoverable: true,
  },
};
