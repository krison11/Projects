import React from 'react';
import './CSS/App.css';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={e => {
              props.update(e.target.value, item.key);
            }}
          />
          <button
            className="list-btn"
            onClick={() => {
              props.deleteItem(item.key);
            }}
          >
            X
          </button>
        </p>
      </div>
    );
  });
  return listItems;
}

export default ListItems;
