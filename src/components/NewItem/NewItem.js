import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  render() {
    return (
      <div className={'new-item'}>
        <input
          onInput={(e) => {
            this.setState({ text: e.target.value });
          }}
          className={'form-control new-item__text'}
          placeholder={'Add new item...'}
        ></input>
        <button
          onClick={() => {
            this.props.addNewTodoUnit(this.state.text);
          }}
          type="button"
          className={'btn btn-outline-success new-item__button'}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default NewItem;
