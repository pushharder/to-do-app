import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todoList.map((element) => (
        <TodoItem
          todoUnit={element}
          key={element.text}
          importantBtnClick={props.importantBtnClick}
          doneBtnClick={props.doneBtnClick}
        />
      ))}
    </ul>
  );
}

export default TodoList;
