import React from 'react';
import Filter from '../Filter';
import TodoList from '../TodoList';
import NewItem from '../NewItem';

function MainForm() {
  return (
    <form>
      <h1>Todo List</h1>
      <Filter />
      <TodoList />
      <NewItem />
    </form>
  );
}

export default MainForm;
