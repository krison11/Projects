import React from 'react';
import './CSS/App.css';
import ListItems from './listItems';
import fire from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
  }

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      let messageRef = fire
        .database()
        .ref('lists')
        .orderByKey()
        .limitToLast(100);
      fire
        .database()
        .ref('lists')
        .push(items);
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      });
    }
  };

  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  };
  update = (text, key) => {
    console.log('items:' + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + '    ' + key);
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="add activity..."
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            update={this.update}
          />
        </header>
      </div>
    );
  }
}

export default App;
