import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStock = () => {
    return this.props.stonks.map(stonk => <Stock key={stonk.id} stonk={stonk} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
