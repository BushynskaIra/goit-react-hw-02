import PropTypes from 'prop-types';
import './Feedback.css';

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="feedback-container">
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired
};

export default Feedback;
