import React from 'react';

function TodoItem(props) {
  return (
    <li
      className={'list-group-item'}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
      }}
    >
      {props.text}
      <span
        style={{
          justifySelf: 'flex-end',
          marginLeft: 'auto',
        }}
      >
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{ width: 40, marginRight: 10 }}
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          style={{ width: 40, marginRight: 10 }}
        >
          <i class="fas fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          style={{ width: 40 }}
        >
          <i className="fas fa-check"></i>
        </button>
      </span>
    </li>
  );
}

export default TodoItem;
