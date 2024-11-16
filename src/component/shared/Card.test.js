import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders its children correctly', () => {
    render(
      <Card>
        <p>Test Content</p>
      </Card>
    );
    const content = screen.getByText(/test content/i);
    expect(content).toBeInTheDocument();
  });

  test('applies the card class', () => {
    const { container } = render(<Card>Sample Text</Card>);
    expect(container.firstChild).toHaveClass('card');
  });
});
