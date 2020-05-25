import React from 'react';
import './Filter.css';
import FilterCase from '../FilterCase';

function Filter(props) {
  return (
    <div className={'filter'}>
      <input
        className={'form-control filter__text'}
        placeholder={'Search...'}
      ></input>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {props.filterCases.map((filterCase, index) => (
          <FilterCase
            onClick={() => {
              props.filterCaseChange(index);
            }}
            text={filterCase}
            checked={index === props.currentCaseIndex}
            index={index}
            key={filterCase}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
