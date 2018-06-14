import React, { Component } from 'react';
import './styles/Searchbox.css';

class Searchbox extends Component {

  constructor(props) {
    super(props);
    this.searchInput = null;
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.searchInput.value;
    this.props.searchPokemon(text);
  }

  render() {
    return (
      <form className="searchbox" onSubmit={this.handleSubmit.bind(this)}>
        <input ref={(ref) => this.searchInput = ref } className="inputSearch" placeholder="search" />
      </form>
    );
  }
}

export default Searchbox;