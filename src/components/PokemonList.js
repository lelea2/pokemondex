import React, { Component } from 'react';
import PokemonCell from './PokemonCell';
import './styles/PokemonList.css';

const LIMIT = 20;

class PokemonList extends Component {
  constructor() {
    super();
  }

  renderList() {
    const { data } = this.props;
    const list = data.slice(0, LIMIT);
    return list.map((item) => {
      return <PokemonCell key={item} {...item} getDetail={this.props.getDetail} />
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
