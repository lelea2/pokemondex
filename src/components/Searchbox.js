import React, { Component } from 'react';
import './styles/Searchbox.css';

class Searchbox extends Component {

  constructor(props) {
    super(props);
  }

  handleOnChange() {

  }

  render() {
    return (
      <div className="searchbox">
        <input className="inputSearch" onChange={this.handleOnChange} placeholder="search" />
      </div>
    );
  }
}

export default Searchbox;