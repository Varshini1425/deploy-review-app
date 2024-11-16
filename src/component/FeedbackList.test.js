import { render, screen } from '@testing-library/react';
import FeedbackList from './FeedbackList';
import { FeedbackProvider } from '../context/FeedbackContext';

describe('FeedbackList Component', () => {
  test('renders feedback items', () => {
    const mockFeedback = [
      { id: 1, text: 'Feedback 1' },
      { id: 2, text: 'Feedback 2' },
    ];
    render(
      <FeedbackProvider value={{ feedback: mockFeedback }}>
        <FeedbackList />
      </FeedbackProvider>
    );
    expect(screen.getByText('Feedback 1')).toBeInTheDocument();
    expect(screen.getByText('Feedback 2')).toBeInTheDocument();
  });

  test('shows message when no feedback is available', () => {
    render(
      <FeedbackProvider value={{ feedback: [] }}>
        <FeedbackList />
      </FeedbackProvider>
    );
    expect(screen.getByText('No feedback yet')).toBeInTheDocument();
  });
});
