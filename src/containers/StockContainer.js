import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // render stocks and pass down props to stock card
  renderStock = () => {
    return this.props.stonks.map(stonk => <Stock key={stonk.id} stonk={stonk} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStock()}
      </div>
    );
  }

}

export default StockContainer;
