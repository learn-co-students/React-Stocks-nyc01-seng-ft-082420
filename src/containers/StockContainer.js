import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  state = {
    stocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(res => this.setState({stocks: res}))
  }

  renderStocks = () => {
    return this.state.stocks.map( stock => <Stock key={stock.id} clickHandler={this.props.clickHandler} stock={stock}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
