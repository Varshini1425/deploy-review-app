import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';
import { FeedbackProvider } from '../context/FeedbackContext';

describe('FeedbackForm Component', () => {
  test('disables submit button for invalid input', () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const input = screen.getByPlaceholderText('Enter your review');
    const button = screen.getByRole('button', { name: /send/i });
    fireEvent.change(input, { target: { value: 'Short' } });
    expect(button).toBeDisabled();
    expect(screen.getByText(/Text must be at least 10 characters/i)).toBeInTheDocument();
  });

  test('enables submit button for valid input', () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const input = screen.getByPlaceholderText('Enter your review');
    const button = screen.getByRole('button', { name: /send/i });
    fireEvent.change(input, { target: { value: 'Valid review text' } });
    expect(button).not.toBeDisabled();
    expect(screen.queryByText(/Text must be at least 10 characters/i)).not.toBeInTheDocument();
  });
});
