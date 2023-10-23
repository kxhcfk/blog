import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async webpackFinal(config) {
        const paths: BuildPaths = {
            src: path.resolve(__dirname, '..', '..', 'src'),
            html: '',
            build: '',
            entry: '',
        };

        config.resolve.modules.push(paths.src, 'node_modules');

        // eslint-disable-next-line no-param-reassign
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': paths.src,
        };
        config.resolve.extensions.push('.tsx', '.ts', '.js');

        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }

            return rule;
        });

        config.module.rules.push(buildSvgLoader());
        config.module.rules.push(buildCssLoader(true));

        return config;
    },
};

export default config;
