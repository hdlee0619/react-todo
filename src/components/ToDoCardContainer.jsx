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
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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

const ToDoCardContainer = (props) => {
  const deleteToDoCard = (id) => {
    let copy = [...props.toDo];
    props.setToDo(copy.filter((item) => props.item.id !== item.id));
  };
  const changeStateIsDone = () => {
    let copy = [...props.toDo.filter((item) => props.item.id !== item.id)];

    if (props.item.isDone === false) {
      props.item.isDone = true;
      props.setToDo([props.item, ...copy]);
    } else {
      props.item.isDone = false;
      props.setToDo([props.item, ...copy]);
    }
  };
  return (
    <ToDoCard>
      <div>
        <CardTitle>{props.item.title}</CardTitle>
        <CardComment>{props.item.comment}</CardComment>
      </div>
      <BtnContainer>
        <DeleteCardBtn onClick={deleteToDoCard}>삭제</DeleteCardBtn>
        <DoneCardBtn onClick={changeStateIsDone}>{props.children}</DoneCardBtn>
      </BtnContainer>
    </ToDoCard>
  );
};

export default ToDoCardContainer;
