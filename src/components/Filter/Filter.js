import React from 'react';
import './Filter.css';
import FilterCase from '../FilterCase';

function Filter() {
  return (
    <div className={'filter'}>
      <input
        className={'form-control filter__text'}
        placeholder={'Search...'}
      ></input>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <FilterCase text="All" checked={true} />
        <FilterCase text="Active" />
        <FilterCase text="Done" />
      </div>
    </div>
  );
}

export default Filter;
