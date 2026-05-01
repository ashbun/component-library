import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.{ts,tsx}', '../stories/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
