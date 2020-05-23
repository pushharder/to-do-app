import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
  return (
    <ListGroup.Item
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
        <Button variant="outline-danger" style={{ width: 40, marginRight: 10 }}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button variant="outline-success" style={{ width: 40 }}>
          <FontAwesomeIcon icon={faExclamation} />
        </Button>
      </span>
    </ListGroup.Item>
  );
}

export default TodoItem;
