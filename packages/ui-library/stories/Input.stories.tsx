import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input field with label, validation, and helper text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helper: {
      control: 'text',
      description: 'Helper text below input',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
  },
};

export const WithHelper: Story = {
  args: {
    placeholder: 'Enter email',
    label: 'Email',
    helper: 'We will never share your email.',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter email',
    label: 'Email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    label: 'Disabled',
    disabled: true,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email',
    label: 'Email',
    iconLeft: '✉️',
  },
};

export const Textarea: Story = {
  render: () => (
    <div>
      <label>Message</label>
      <textarea
        placeholder="Enter your message..."
        rows={4}
        style={{
          width: '100%',
          padding: '16px',
          border: '1px solid var(--color-border)',
          borderRadius: '6px',
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
        }}
      />
    </div>
  ),
};
