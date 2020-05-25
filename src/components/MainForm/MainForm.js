import React from 'react';
import Filter from '../Filter';
import TodoList from '../TodoList';

function MainForm() {
  return (
    <form>
      <h1>Todo List</h1>
      <Filter />
      <TodoList />
    </form>
  );
}

export default MainForm;
