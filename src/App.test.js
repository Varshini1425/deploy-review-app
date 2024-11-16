import { render, screen } from '@testing-library/react';
import App from './App';
import { FeedbackProvider } from './context/FeedbackContext';

describe('App Component', () => {
  test('renders Header and Feedback components', () => {
    render(
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    );

    expect(screen.getByText('Review App')).toBeInTheDocument();
    expect(screen.getByText(/Total List/i)).toBeInTheDocument();
  });
});
