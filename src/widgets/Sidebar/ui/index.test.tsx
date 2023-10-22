import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar';
import {
    renderWithTranslations,
} from '@/shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('widgets/Sidebar', () => {
    test('toggle', () => {
        renderWithTranslations(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sidebar-toggle'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
