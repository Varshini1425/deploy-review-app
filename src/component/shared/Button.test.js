import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  test('renders with correct text and styles', () => {
    render(<Button version="primary" type="button" isDisabled={false}>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn btn-primary');
    expect(button).not.toBeDisabled();
  });

  test('renders as disabled when isDisabled is true', () => {
    render(<Button version="secondary" type="submit" isDisabled={true}>Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn btn-secondary');
  });

  test('calls onClick handler when clicked', async () => {
    const onClick = jest.fn();
    render(
      <Button version="primary" type="button" isDisabled={false} onClick={onClick}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
