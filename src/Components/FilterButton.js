import React from 'react';
import { ToggleButton } from 'react-bootstrap';

function FilterButton(props) {
  return (
    <ToggleButton value={props.text} variant="outline-info">
      {props.text}
    </ToggleButton>
  );
}

export default FilterButton;
