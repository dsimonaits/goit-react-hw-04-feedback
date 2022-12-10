import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { List } from './Statistics/Statistics.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const data = { good, neutral, bad };

  const updateFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(data).reduce((total, d) => total + d, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.floor((good / countTotalFeedback()) * 100)
      : 0;
  };

  const emptyState = countTotalFeedback() === 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={data} onFeedbackClick={updateFeedback} />
      </Section>
      <Section title="Statistics">
        {emptyState ? (
          <List>
            <li>
              <p>There is no feedback</p>
            </li>
          </List>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
