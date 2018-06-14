import React, { Component } from 'react';
import './styles/PokemonCell.css';

let img = `https://img.pokemondb.net/artwork/@@@NAME@@@.jpg`;

class PokemonCell extends Component {
  constructor(props) {
    super(props);
  }

  getDetail() {
    const { url } = this.props;
    this.props.getDetail(url);
  }

  render() {
    const { name } = this.props;
    const imgURL = img.replace('@@@NAME@@@', name);
    return (
      <button className="poke-cell" onClick={this.getDetail.bind(this)}>
        <img src={imgURL} alt={name} width="50" height="50" />
      </button>
    );
  }
}

export default PokemonCell;
