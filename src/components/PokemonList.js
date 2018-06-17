import React, { Component } from 'react';
import PokemonCell from './PokemonCell';
import PropTypes from 'prop-types';
import './styles/PokemonList.css';

class PokemonList extends Component {

  renderList() {
    const { data, pokemonDetail } = this.props;
    const currentName = (pokemonDetail) ? (pokemonDetail.name) : null;
    return data.map((item, i) => {
      return <PokemonCell
        key={`${i}${item}`}
        {...item}
        getDetail={this.props.getDetail}
        active={(item.name === currentName) ? true : false}
      />
    });
  }

  render() {
    return (
      <section className="poke-list">
        {this.renderList()}
      </section>
    );
  }
}

PokemonList.propTypes = {
  data: PropTypes.array,
  pokemonDetail: PropTypes.object,
  getDetail: PropTypes.func
};

export default PokemonList;
