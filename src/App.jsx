import CreateToDoContainer from './components/CreateToDoContainer';
import styled from 'styled-components';
import { useState } from 'react';
import ToDoCardContainer from './components/ToDoCardContainer';

const AppContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex-column;
  align-items: center;
  margin: 50px auto 50px auto;
  background-color: #f9f5e7;
  padding: 30px;
  border-radius: 25px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 0 40px 0;
  background-color: #f8ead8;
  border-radius: 15px;
  color: #a7727d;
  font-size: 40px;
`;

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

const App = () => {
  return (
    <AppContainer>
      <Header>
        <h3>My To do List</h3>
        <h3>React</h3>
      </Header>
      <main>
        <CreateToDoContainer></CreateToDoContainer>
        <ListContainer>
          <ToDoTitle>Work.. 🔥</ToDoTitle>
          <ToDoList>
            <ToDoCardContainer></ToDoCardContainer>
          </ToDoList>
          <ToDoTitle>Done.. 🎉</ToDoTitle>
          <ToDoList></ToDoList>
        </ListContainer>
      </main>
    </AppContainer>
  );
};

export default App;
