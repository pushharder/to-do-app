import React from 'react';
import TodoItem from '../TodoItem';

function TodoList() {
  return (
    <ul className="list-group">
      <TodoItem text={'Drink Coffe'}></TodoItem>
      <TodoItem text={'Make Awesome App'}></TodoItem>
      <TodoItem text={'Have a lunch'}></TodoItem>
    </ul>
  );
}

export default TodoList;
