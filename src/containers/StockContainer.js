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
    console.log(this.props.sort)
    let stocks;
    if (this.props.filter) {
      stocks = this.state.stocks.filter( stock => stock.type === this.props.filter)
    } else {
      stocks = this.state.stocks
    }
    if (this.props.sort) {
      if (this.props.sort === "Alphabetically") {
        stocks = stocks.sort((a, b) => a.name.localeCompare(b.name))
      } else {
        stocks = stocks.sort((a,b) => a.price - b.price)
      }
    }
    return stocks.map( stock => <Stock key={stock.id} clickHandler={this.props.clickHandler} stock={stock}/>)
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
