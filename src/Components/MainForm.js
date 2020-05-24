import React from 'react';

import {
  Form,
  Card,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import TodoList from './TodoList';

function MainForm() {
  return (
    <Form style={{ paddingTop: '.75rem' }}>
      <Card.Title>Todo List</Card.Title>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <FormControl style={{ marginRight: 10 }} />
        <ToggleButtonGroup type="radio" name="filter" defaultValue={'All'}>
          <ToggleButton value={'All'} variant="outline-info">
            All
          </ToggleButton>
          <ToggleButton value={'Active'} variant="outline-info">
            Active
          </ToggleButton>
          <ToggleButton value={'Done'} variant="outline-info">
            Done
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <TodoList />
    </Form>
  );
}

export default MainForm;
