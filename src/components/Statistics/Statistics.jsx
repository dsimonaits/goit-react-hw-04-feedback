import PropTypes from 'prop-types';
import { ListItem } from './Statistics.styled';
import { List } from './Statistics.styled';
import { Span } from './Statistics.styled';
import { SpanFeedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <List>
        <ListItem>
          <p>
            <Span color="green">Good:</Span> {good}
          </p>
        </ListItem>
        <ListItem>
          <p>
            <Span color="yellow">Neutral:</Span> {neutral}
          </p>
        </ListItem>
        <ListItem>
          <p>
            <Span color="red">Bad:</Span> {bad}
          </p>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <p>Total: {total}</p>
        </ListItem>
        <ListItem>
          <p>
            <SpanFeedback mood={positivePercentage}>
              Positive feedback:
            </SpanFeedback>{' '}
            {positivePercentage}%
          </p>
        </ListItem>
      </List>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
