import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStock = () => {
    // console.log(this.props.stonks)
    return this.props.stonks.map(stonk => <Stock key={stonk.id} stonk={stonk} clickHandler ={this.props.clickHandler}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
