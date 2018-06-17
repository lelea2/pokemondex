import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Searchbox.css';
import t from '../translations';

class Searchbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPokemon(this.state.searchText);
  }

  handleOnChange(e) {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
  }

  resetText() {
    this.setState({
      searchText: ''
    });
  }

  render() {
    return (
      <form className="searchbox" onSubmit={this.handleSubmit.bind(this)}>
        <input
          className="inputSearch"
          placeholder="search"
          onChange={this.handleOnChange.bind(this)}
          value={this.state.searchText}
        />
        <a onClick={this.resetText.bind(this)}><i>{t.resetText}</i></a>
      </form>
    );
  }
}

Searchbox.propTypes = {
  searchPokemon: PropTypes.func
};

export default Searchbox;