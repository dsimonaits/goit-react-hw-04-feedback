import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { List } from './Statistics/Statistics.styled';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback() {
    const data = this.state;
    return Object.values(data).reduce((total, d) => total + d, 0);

    // return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const emptyState = this.countTotalFeedback() === 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onFeedbackClick={this.updateFeedback}
          />
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
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
