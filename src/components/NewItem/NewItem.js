import React from 'react';
import './NewItem.css';

function NewItem() {
  return (
    <div className={'new-item'}>
      <input
        className={'form-control new-item__text'}
        placeholder={'Add new item...'}
      ></input>
      <button
        type="button"
        className={'btn btn-outline-success new-item__button'}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default NewItem;
