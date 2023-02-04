import React from 'react';
import styled from 'styled-components';
import ToDoCards from './ToDoCardContainer';

const ListContainer = styled.div`
  margin-top: 50px;
  background-color: #f6dfbf;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
`;

const ToDoTitle = styled.h4`
  font-size: 24px;
  margin-left: 17px;
`;

const ToDoList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ToDoListContainer = () => {
  return (
    <ListContainer>
      <ToDoTitle>Work.. 🔥</ToDoTitle>
      <ToDoList>
        <ToDoCards></ToDoCards>
      </ToDoList>
      <ToDoTitle>Done.. 🎉</ToDoTitle>
      <ToDoList></ToDoList>
    </ListContainer>
  );
};

export default ToDoListContainer;
