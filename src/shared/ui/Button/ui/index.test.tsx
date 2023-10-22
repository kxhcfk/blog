import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './index';

describe('ui/Button', () => {
    test('text', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});
