import { renderHook, act } from '@testing-library/react';
import { FeedbackProvider } from './FeedbackContext';

describe('FeedbackContext', () => {
  test('adds feedback correctly', () => {
    const { result } = renderHook(() => React.useContext(FeedbackContext), {
      wrapper: FeedbackProvider,
    });
    act(() => {
      result.current.addFeedback({ id: 1, text: 'New Feedback' });
    });
    expect(result.current.feedback).toHaveLength(1);
    expect(result.current.feedback[0].text).toBe('New Feedback');
  });

  test('deletes feedback correctly', () => {
    const { result } = renderHook(() => React.useContext(FeedbackContext), {
      wrapper: FeedbackProvider,
    });
    act(() => {
      result.current.addFeedback({ id: 1, text: 'Feedback to delete' });
      result.current.deleteFeedback(1);
    });
    expect(result.current.feedback).toHaveLength(0);
  });

  test('updates feedback correctly', () => {
    const { result } = renderHook(() => React.useContext(FeedbackContext), {
      wrapper: FeedbackProvider,
    });
    act(() => {
      result.current.addFeedback({ id: 1, text: 'Old Feedback' });
      result.current.updateFeedback(1, { text: 'Updated Feedback' });
    });
    expect(result.current.feedback[0].text).toBe('Updated Feedback');
  });
});
