import React from 'react';

import { Form, Card, FormControl, ToggleButtonGroup } from 'react-bootstrap';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

function MainForm() {
  return (
    <Form style={{ paddingTop: '.75rem' }}>
      <Card.Title>Todo List</Card.Title>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <FormControl style={{ marginRight: 10 }} />
        <ToggleButtonGroup type="radio" name="filter" defaultValue={1}>
          <FilterButton text={'All'} />
          <FilterButton text={'Active'} />
          <FilterButton text={'Done'} />
        </ToggleButtonGroup>
      </div>
      <TodoList />
    </Form>
  );
}

export default MainForm;
