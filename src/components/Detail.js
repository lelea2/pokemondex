import React, { Component } from 'react';
import './styles/Detail.css';
import t from '../translations';

let img = `https://img.pokemondb.net/artwork/@@@NAME@@@.jpg`;

class DetailView extends Component {

  getEnName(data) {
    let obj = {};
    try {
      obj = data.filter((item) => {
        return item.language.name === 'en';
      })[0];
    } catch (ex) {
      // handle error here
    }
    return obj;
  }

  renderLoading() {
    return (
      <p>{t.loading_detail}</p>
    );
  }

  renderEmpty(data, err) {
    return (err) ? (
      <p>{t.renderDetailError}</p>
    ) : null;
  }

  renderData(data, err) {
    const { name, id, height, weight, types, habitat, species } = t.detail;
    return (err || !data) ? this.renderEmpty(data, err) : (
      <div>
        <h3 className='data-name'>{name}: {data.name} -- {id}: {data.id}</h3>
        <p className="data-char">{height}: {data.height} -- {weight}: {data.weight}</p>
        <p className="data-char">{types}: {data.types.map((val) => {
          return (val.type) ? val.type.name : ''
        }).join(', ')}</p>
        <p className="data-char">{species}: {this.getEnName(data.species.names).name} -- {habitat} : {data.species.habitat.name}</p>
      </div>
    );
  }

  render() {
    const { data, err, loading, search_result } = this.props;
    const name = (data && data.name) ? data.name : '';
    const imgUrl = (name) ? img.replace('@@@NAME@@@', name) : null;
    return (
      <section className="detail-view">
        {search_result ? <h2>{loading? t.searchHeaderLoad : t.searchHeader}</h2> : null}
        <img className='sprite-image' src={imgUrl} alt={name} />
        <div className='data-wrapper'>
          {loading ? this.renderLoading() : (
            this.renderData(data, err)
          )}
        </div>
      </section>
    );
  }
}

export default DetailView;
