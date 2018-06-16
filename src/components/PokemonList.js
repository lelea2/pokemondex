import React, { Component } from 'react';
import PokemonCell from './PokemonCell';
import './styles/PokemonList.css';

class PokemonList extends Component {

  renderList() {
    const { data } = this.props;
    return data.map((item, i) => {
      return <PokemonCell key={item, i} {...item} getDetail={this.props.getDetail} />
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

export default PokemonList;
