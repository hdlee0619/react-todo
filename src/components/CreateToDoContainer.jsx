import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #eae0da;
  border-radius: 15px;
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

const CreateToDoContainer = (props) => {
  let [toDoTitle, setToDoTitle] = useState('');
  const changeToDoTitleValue = (event) => {
    setToDoTitle(event.target.value);
  };

  let [toDoComment, setToDoComment] = useState('');
  const changeToDoCommentValue = (event) => {
    setToDoComment(event.target.value);
  };

  const AddToDo = () => {
    if (toDoTitle === '') {
      alert('To Do는 입력해주세요 😉');
    }
    let copy = [{ id: props.toDo.length, title: toDoTitle, comment: toDoComment, isDone: false }, ...props.toDo];
    props.setToDo(copy);
    setToDoTitle('');
    setToDoComment('');
  };

  const postRequest = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormContainer action="/" onSubmit={postRequest}>
        <InputContainer>
          <InputHead>To Do</InputHead>
          <ToDoInput onChange={changeToDoTitleValue} value={toDoTitle} placeholder="할 일을 입력하세요"></ToDoInput>
        </InputContainer>
        <InputContainer>
          <InputHead>Comment</InputHead>
          <ToDoInput onChange={changeToDoCommentValue} value={toDoComment} placeholder="내용을 입력하세요"></ToDoInput>
        </InputContainer>
        <ToDoSubmitBtn onClick={AddToDo}>등록</ToDoSubmitBtn>
      </FormContainer>
    </>
  );
};

export default CreateToDoContainer;
