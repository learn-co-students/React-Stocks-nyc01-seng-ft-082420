import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: []
  }

  /* fetch json */
  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
        /* setState */
      .then(stocks => this.setState({stocks: stocks}))
      .catch(console.log)
  }

  /* need to pass down API as props to stock card */

  /*clickHandler for catching the info from the stock card in container*/
  // clickHandler = () => {

  // }

  /* the individual stock must get passed down as props to Portfolio Container*/



  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stonks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
