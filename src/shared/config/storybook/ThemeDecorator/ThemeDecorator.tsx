import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib';

export const ThemeDecorator = (theme: Theme): any => (StoryComponent: StoryFn) => (
    <div className={classNames('app', theme)}>
        <StoryComponent />
    </div>
);
