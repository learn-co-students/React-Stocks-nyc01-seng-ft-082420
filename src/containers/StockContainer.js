import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map((stock) => <Stock key={stock.id} stock={stock} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
