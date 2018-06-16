import React, { Component } from 'react';
import { connect } from 'react-redux'
import PokemonList from './PokemonList';
import Searchbox from './Searchbox';
import Detail from './Detail';
import './styles/App.css';
import { fetchPokemonList, fetchPokemonDetail, resetPokemon, searchPokemon } from '../actions/action';
import t from '../translations';

class App extends Component {

  componentWillMount() {
    this.props.fetchPokemonList();
  }

  renderError() {
    return (
      <p>{t.renderError}</p>
    );
  }

  getDetail(url) {
    this.props.fetchPokemonDetail(url);
  }

  reset() {
    this.props.resetPokemon();
  }

  renderDetail() {
    const { pokemonDetail } = this.props;
    return (
      <Detail {...pokemonDetail} />
    );
  }

  renderData({ data, loading, pokemonDetail }) {
    return (loading) ? (
      <p>{t.loading_list}</p>
    ) : (
      <div>
        <div className="reset-region">
          <button className="reset" onClick={this.reset.bind(this)}>{t.resetBtn}</button>
        </div>
        <PokemonList data={data} pokemonDetail={pokemonDetail} getDetail={this.getDetail.bind(this)} />
        {this.renderDetail()}
      </div>
    );
  }

  render() {
    const { pokemonList, pokemonDetail } = this.props;
    const { data, loading, err } = pokemonList;
    return (
      <div className="Container">
        <div className="title">
          <h1>{t.title}</h1>
          <Searchbox searchPokemon={this.props.searchPokemon} />
        </div>
        <div className="App">
          {(err) ? this.renderError() : this.renderData({ data, loading, pokemonDetail }) }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemonList: () => dispatch(fetchPokemonList()),
    fetchPokemonDetail: (url) => dispatch(fetchPokemonDetail(url)),
    resetPokemon: () => dispatch(resetPokemon()),
    searchPokemon: (text) => dispatch(searchPokemon(text))
  };
};

export const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonList,
    pokemonDetail: state.pokemonDetail,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
