import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react',
    options: {},
  },
  core: {
    disableTelemetry: true,
    builder: 'webpack5',
  },
};

export default config;
