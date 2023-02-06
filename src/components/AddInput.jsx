import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: #eae0da;
  color: #a0c3d2;
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
  padding: 10px;
  margin: auto 0 auto 15px;
  border: none;
  border-radius: 10px;
  background-color: #f7f5eb;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 2px solid #a0c3d2;
  }
`;

const ToDoSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  padding: 12px;
  border: 1px solid #eac7c7;
  border-radius: 8px;
  margin-left: 60px;
  background-color: #a0c3d2;
  color: #144272;
  font-size: 15px;
`;

const AddInput = ({ toDo, setToDoHandler }) => {
  let [toDoTitle, setToDoTitle] = useState('');

  let [toDoComment, setToDoComment] = useState('');

  const postRequest = (event) => {
    event.preventDefault();
    if (toDoTitle === '') {
      return alert('To Do는 입력해주세요 😉');
    }
    let copy = [{ id: Date.now(), title: toDoTitle, comment: toDoComment, isDone: false }, ...toDo];
    setToDoHandler(copy);
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

export default AddInput;
