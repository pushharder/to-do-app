import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <ListGroup>
      <TodoItem text={'Drink Coffe'}></TodoItem>
      <TodoItem text={'Make Awesome App'}></TodoItem>
      <TodoItem text={'Have a lunch'}></TodoItem>
    </ListGroup>
  );
}

export default TodoList;
