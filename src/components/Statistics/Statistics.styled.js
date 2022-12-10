import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
  color: white;
  background-color: black;

  border-radius: 5px;

  &:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ListItem = styled.li`
  /* font-size: 10px; */
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Span = styled.span`
  color: ${props => props.color};
`;

export const SpanFeedback = styled.span`
  color: ${({ mood }) => {
    if (mood > 60) {
      return 'green';
    }
    if (mood < 30) {
      return 'red';
    } else {
      return 'yellow';
    }
  }};
`;
