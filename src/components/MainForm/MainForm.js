import React from 'react';
import Filter from '../Filter';
import TodoList from '../TodoList';
import NewItem from '../NewItem';
import TodoUnit from '../../entities/TodoUnit';

class MainForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        text: null,
        cases: ['All', 'Active', 'Done'],
        currentCaseIndex: 0,
      },
      todoList: [
        new TodoUnit('Drink Coffe', false, true),
        new TodoUnit('Make Awesome App', true),
        new TodoUnit('Have a lunch'),
      ],
    };
  }

  getVisibleTodoList() {
    switch (this.state.filter.currentCaseIndex) {
      case 0:
        return this.state.todoList;
      case 1:
        return this.state.todoList.filter((todoUnit) => !todoUnit.done);
      case 2:
        return this.state.todoList.filter((todoUnit) => todoUnit.done);
      default:
        return this.state.todoList;
    }
  }

  filterCaseChange = (index) => {
    let filter = this.state.filter;

    filter.currentCaseIndex = index;
    this.setState({ filter });
  };

  importantBtnClick = (todoUnit) => {
    let todoList = this.state.todoList;
    let index = todoList.findIndex((item) => item === todoUnit);

    todoList[index].important = !todoUnit.important;

    this.setState({ todoList });
  };

  doneBtnClick = (todoUnit) => {
    let todoList = this.state.todoList;
    let index = todoList.findIndex((item) => item === todoUnit);

    todoList[index].done = !todoUnit.done;

    this.setState({ todoList });
  };

  render() {
    return (
      <form>
        <h1>Todo List</h1>
        <Filter
          filterCases={this.state.filter.cases}
          currentCaseIndex={this.state.filter.currentCaseIndex}
          filterCaseChange={this.filterCaseChange}
        />
        <TodoList
          todoList={this.getVisibleTodoList()}
          importantBtnClick={this.importantBtnClick}
          doneBtnClick={this.doneBtnClick}
        />
        <NewItem />
      </form>
    );
  }
}

export default MainForm;
