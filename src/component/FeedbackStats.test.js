import { render, screen } from '@testing-library/react';
import FeedbackStats from './FeedbackStats';
import { FeedbackProvider } from '../context/FeedbackContext';

describe('FeedbackStats Component', () => {
  test('displays total feedback count', () => {
    const mockFeedback = [
      { id: 1, text: 'Feedback 1' },
      { id: 2, text: 'Feedback 2' },
    ];
    render(
      <FeedbackProvider value={{ feedback: mockFeedback }}>
        <FeedbackStats />
      </FeedbackProvider>
    );
    expect(screen.getByText(/Total List \(2\)/i)).toBeInTheDocument();
  });
});
