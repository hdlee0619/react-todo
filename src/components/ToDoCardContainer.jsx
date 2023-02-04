import styled from 'styled-components';

const ToDoCard = styled.div`
  background-color: #e3caa5;
  margin: 10px 20px;
  padding: 10px 30px;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: #594545;
`;

const CardComment = styled.h4`
  color: #594545;
`;

const DeleteCardBtn = styled.button`
  background-color: #ee6983;
  color: #850e35;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
`;

const DoneCardBtn = styled.button`
  background-color: #b4cfb0;
  color: #5f7161;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ToDoCardContainer = () => {
  return (
    <ToDoCard>
      <div>
        <CardTitle>test title</CardTitle>
        <CardComment>test comment</CardComment>
      </div>
      <BtnContainer>
        <DeleteCardBtn>삭제</DeleteCardBtn>
        <DoneCardBtn>취소</DoneCardBtn>
      </BtnContainer>
    </ToDoCard>
  );
};

export default ToDoCardContainer;
