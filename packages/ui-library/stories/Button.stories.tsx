import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Button visual variant',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Button spans full width',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

// Danger button
export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
    size: 'md',
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
  ),
};

// Loading state
export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
    variant: 'primary',
    size: 'md',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'primary',
    size: 'md',
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// With icon
export const WithIcon: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'md',
    iconRight: '↓',
  },
};
