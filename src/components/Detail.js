import React, { Component } from 'react';
import './styles/Detail.css';

class DetailView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="detail-view">
        <img className='sprite-image' />
        <div className='data-wrapper'>
          <h1 className='data-name'></h1>
          <p className="data-char"></p>
        </div>
      </section>
    );
  }
}

export default DetailView;
