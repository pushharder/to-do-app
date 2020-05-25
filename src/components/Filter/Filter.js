import React from 'react';
import FilterCase from '../FilterCase';

function Filter() {
  return (
    <div style={{ display: 'flex', marginBottom: 10 }}>
      <input className={'form-control'} style={{ marginRight: 10 }}></input>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <FilterCase text="All" checked={true} />
        <FilterCase text="Active" />
        <FilterCase text="Done" />
      </div>
    </div>
  );
}

export default Filter;
