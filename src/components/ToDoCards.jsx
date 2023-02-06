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

const CardText = styled.h4`
  color: #594545;
  font-size: ${(props) => (props.toDoComment ? '16px' : '23px')};
`;

const CardBtn = styled.button`
  background-color: ${(props) => (props.doneBg ? '#b4cfb0' : '#ee6983')};
  color: ${(props) => (props.doneColor ? '#5f7161' : '#850e35')};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ToDoCards = ({ mapItem, toDo, setToDoHandler, children }) => {
  const deleteToDoCard = () => {
    let copy = [...toDo];
    setToDoHandler(copy.filter((item) => mapItem.id !== item.id));
  };
  const changeStateIsDone = () => {
    let copy = [...toDo.filter((item) => mapItem.id !== item.id)];

    if (mapItem.isDone === false) {
      mapItem.isDone = true;
      setToDoHandler([mapItem, ...copy]);
    } else {
      mapItem.isDone = false;
      setToDoHandler([mapItem, ...copy]);
    }
  };
  return (
    <ToDoCard>
      <div>
        <CardText>{mapItem.title}</CardText>
        <CardText toDoComment>{mapItem.comment}</CardText>
      </div>
      <BtnContainer>
        <CardBtn onClick={deleteToDoCard}>삭제</CardBtn>
        <CardBtn doneBg doneColor onClick={changeStateIsDone}>
          {children}
        </CardBtn>
      </BtnContainer>
    </ToDoCard>
  );
};

export default ToDoCards;
