import React, { Component } from 'react';
import { connect } from 'react-redux'
import PokemonList from './PokemonList';
import Searchbox from './Searchbox';
import Detail from './Detail';
import './styles/App.css';
import { fetchPokemonList, fetchPokemonDetail, searchPokemon } from '../actions/action';
import t from '../translations';

class App extends Component {
  constructor() {
    super();
  }

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

  renderDetail() {
    const { pokemonDetail } = this.props;
    return (
      <Detail {...pokemonDetail} />
    );
  }

  renderData(data, loading) {
    if (loading) {
      return (
        <p>{t.loading_list}</p>
      );
    } else {
      return (
        <div>
          <PokemonList data={data} getDetail={this.getDetail.bind(this)} />
          {this.renderDetail()}
        </div>
      );
    }
  }

  render() {
    const { pokemonList } = this.props;
    const { data, loading, err } = pokemonList;
    return (
      <div className="Container">
        <div className="title">
          <h1>{t.title}</h1>
          <Searchbox searchPokemon={this.props.searchPokemon} />
        </div>
        <div className="App">
          {(err) ? this.renderError() : this.renderData(data, loading) }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    fetchPokemonList: () => dispatch(fetchPokemonList()),
    fetchPokemonDetail: (url) => dispatch(fetchPokemonDetail(url)),
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
