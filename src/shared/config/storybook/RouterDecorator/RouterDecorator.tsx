import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (): any => (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
