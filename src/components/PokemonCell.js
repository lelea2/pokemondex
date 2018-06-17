import React, { Component } from 'react';
import './styles/PokemonCell.css';
import PropTypes from 'prop-types';
import clss from 'classnames';

let img = `https://img.pokemondb.net/artwork/@@@NAME@@@.jpg`;

class PokemonCell extends Component {

  getDetail() {
    const { url } = this.props;
    this.props.getDetail(url);
  }

  render() {
    const { name, active } = this.props;
    const imgURL = img.replace('@@@NAME@@@', name);
    return (
      <button
        className={clss("poke-cell", { active })}
        onClick={this.getDetail.bind(this)}
      >
        <img src={imgURL} alt={name} width="50" height="50" />
      </button>
    );
  }
}

PokemonCell.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
  getDetail: PropTypes.func
};

export default PokemonCell;
