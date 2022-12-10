import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import { ListItem } from './FeedbackOptions.styled';
import { FeedBackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedbackClick }) => {
  const optionsArr = Object.keys(options);
  return (
    <List>
      {optionsArr.map(option => {
        const buttonName = option[0].toUpperCase() + option.slice(1);
        const color = option => {
          if (option === 'good') {
            return 'green';
          }
          if (option === 'neutral') {
            return 'yellow';
          }
          if (option === 'bad') {
            return 'red';
          }
        };
        return (
          <ListItem key={option}>
            <FeedBackBtn
              name=" {buttonName}"
              color={color(option)}
              type="button"
              onClick={() => onFeedbackClick(option)}
            >
              {buttonName}
            </FeedBackBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};
