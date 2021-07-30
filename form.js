import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        
        <label>Name</label>
        <input type="text" name="name" />
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('name'));