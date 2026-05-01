import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    disableTelemetry: true,
  },
};

export default config;
