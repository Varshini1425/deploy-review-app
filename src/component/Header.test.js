import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders with default props', () => {
    render(<Header />);
    expect(screen.getByText('Review App')).toBeInTheDocument();
  });

  test('applies custom styles when props are provided', () => {
    render(<Header bgColor="blue" textColor="yellow" />);
    const header = screen.getByRole('banner');
    expect(header).toHaveStyle({ backgroundColor: 'blue', color: 'yellow' });
  });
});
