import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #eae0da;
  border-radius: 15px;
  color: #a0c3d2;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputHead = styled.h4`
  margin-left: 20px;
  font-size: 20px;
`;

const ToDoInput = styled.input`
  margin: auto 0 auto 0;
  padding: 10px;
  margin-left: 15px;
  background-color: #f7f5eb;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 2px solid #a0c3d2;
  }
`;

const ToDoSubmitBtn = styled.button`
  height: 40px;
  margin-left: 60px;
  width: 100px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0c3d2;
  border-radius: 8px;
  border: 1px solid #eac7c7;
  color: #144272;
  font-size: 15px;
`;

const CreateToDoContainer = ({ toDo, setToDo }) => {
  let [toDoTitle, setToDoTitle] = useState('');

  let [toDoComment, setToDoComment] = useState('');

  const postRequest = (event) => {
    event.preventDefault();
    if (toDoTitle === '') {
      return alert('To Do는 입력해주세요 😉');
    }
    let copy = [{ id: Date.now(), title: toDoTitle, comment: toDoComment, isDone: false }, ...toDo];
    setToDo(copy);
    setToDoTitle('');
    setToDoComment('');
  };

  return (
    <>
      <FormContainer action="/" onSubmit={postRequest}>
        <InputContainer>
          <InputHead>To Do</InputHead>
          <ToDoInput onChange={(e) => setToDoTitle(e.target.value)} value={toDoTitle} placeholder="할 일을 입력하세요"></ToDoInput>
        </InputContainer>
        <InputContainer>
          <InputHead>Comment</InputHead>
          <ToDoInput onChange={(e) => setToDoComment(e.target.value)} value={toDoComment} placeholder="내용을 입력하세요"></ToDoInput>
        </InputContainer>
        <ToDoSubmitBtn>등록</ToDoSubmitBtn>
      </FormContainer>
    </>
  );
};

export default CreateToDoContainer;
