import AddInput from './components/AddInput';
import ToDoList from './components/ToDoList';

import styled from 'styled-components';
import { useState } from 'react';

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
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

const ToDoListContainer = styled.div`
  margin-top: 50px;
  background-color: #f6dfbf;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const App = () => {
  let [toDo, setToDo] = useState([
    { id: 0, title: '리액트공부하기', comment: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 1, title: '항해99', comment: 'todolist 만들기', isDone: true },
  ]);

  return (
    <AppContainer>
      <Header>
        <h3>My To do List</h3>
        <h3>React</h3>
      </Header>
      <main>
        <AddInput toDo={toDo} setToDo={setToDo}></AddInput>
        <ToDoListContainer>
          <ToDoList toDo={toDo} setToDo={setToDo} isDone={false}>
            Work.. 🔥
          </ToDoList>
          <ToDoList toDo={toDo} setToDo={setToDo} isDone={true}>
            Done.. 🎉
          </ToDoList>
        </ToDoListContainer>
      </main>
    </AppContainer>
  );
};

export default App;
