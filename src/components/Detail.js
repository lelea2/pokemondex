import React, { Component } from 'react';
import './styles/Detail.css';

let img = `https://img.pokemondb.net/artwork/@@@NAME@@@.jpg`;

class DetailView extends Component {
  constructor() {
    super();
  }

  renderLoading() {
    return (
      <div>Loading</div>
    );
  }

  renderData(data, err) {
    if (err) {
      return (
        <div>Error getting detail</div>
      );
    } else if (!!data) {
      return (
        <div>
          <h2 className='data-name'>{data.name}</h2>
          <p className="data-char">Height: {data.height}</p>
          <p className="data-char">Weight: {data.weight}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { data, err, loading } = this.props;
    const imgUrl = (data && data.name) ? img.replace('@@@NAME@@@', data.name) : null;
    return (
      <section className="detail-view">
        <img className='sprite-image' src={imgUrl} />
        <div className='data-wrapper'>
          {loading ? this.renderLoading : (
            this.renderData(data, err)
          )}
        </div>
      </section>
    );
  }
}

export default DetailView;
