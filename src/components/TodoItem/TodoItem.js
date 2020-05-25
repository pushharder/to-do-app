import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={'list-group-item todo-item'}>
      {props.text}
      <span className={'todo-item__buttons-wrap'}>
        <button
          type="button"
          className="btn btn-outline-danger todo-item__button"
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-warning todo-item__button"
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success todo-item__button"
        >
          <i className="fas fa-check"></i>
        </button>
      </span>
    </li>
  );
}

export default TodoItem;
