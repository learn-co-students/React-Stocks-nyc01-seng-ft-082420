import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderUserStocks = () => {
    return this.props.portfolio.map(x=> 
    {
      return <Stock stock={x} key={x.id} ticker={x.ticker} name={x.name} type={x.type} price={x.price} clickFunction={this.props.clickFunction}/>
    })
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderUserStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
