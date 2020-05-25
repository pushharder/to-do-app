import React from 'react';

function FilterCase(props) {
  return (
    <label className="btn btn-outline-info">
      <input
        type="radio"
        name="options"
        value={props.text}
        checked={props.checked}
      />
      {props.text}
    </label>
  );
}

export default FilterCase;
