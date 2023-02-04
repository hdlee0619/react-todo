import styled from 'styled-components';

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
  font-size: 25px;
`;

const InputHead = styled.h4`
  margin-left: 20px;
`;

const ToDoInput = styled.input`
  margin: auto 0 auto 0;
  padding: 10px;
  margin-left: 15px;
  background-color: #f7f5eb;
  border: none;
  border-radius: 10px;
  font-size: 18px;
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
  font-size: 20px;
`;

const CreateToDo = () => {
  return (
    <>
      <FormContainer>
        <InputContainer>
          <InputHead>To Do</InputHead>
          <ToDoInput placeholder="할 일을 입력하세요"></ToDoInput>
        </InputContainer>
        <InputContainer>
          <InputHead>Comment</InputHead>
          <ToDoInput placeholder="내용을 입력하세요"></ToDoInput>
        </InputContainer>
        <ToDoSubmitBtn>등록</ToDoSubmitBtn>
      </FormContainer>
    </>
  );
};

export default CreateToDo;
