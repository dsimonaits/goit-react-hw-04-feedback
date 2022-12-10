import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedBackBtn = styled.button`
  cursor: pointer;
  padding: 5px;
  width: 80px;
  height: auto;
  border-radius: 5px;
  color: white;
  background-color: black;

  &:hover {
    background-color: ${props => props.color};
    color: black;
  }
`;
