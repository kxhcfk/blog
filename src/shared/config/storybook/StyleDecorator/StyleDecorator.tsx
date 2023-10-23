import '@/app/styles/index.scss';
import { PartialStoryFn } from '@storybook/types';

export const StyleDecorator = (story: PartialStoryFn): any => story();
