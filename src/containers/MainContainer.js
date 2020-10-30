import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    user_portfolio: [],
    search_type: null,
    toggle_alpha: null,
    toggle_price: null
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks').then(resp => resp.json()).then(data => this.setState({
      stocks: data
    }))
  }

  grabStock = (stockObj) => {
    let currentPortfolio = [...this.state.user_portfolio, stockObj]
    this.setState({
      user_portfolio: currentPortfolio
    })
    console.log(this.state.user_portfolio)
  }

  sellStock = (stockObj) => {
    let currentPortfolio = [...this.state.user_portfolio]
    let foundStock = currentPortfolio.find(x=> x.id === stockObj.id)
    let newArray = currentPortfolio.filter(x => x !== foundStock)

    this.setState({
      user_portfolio: newArray
    })

  }

  sortAlphabeticalName = (state) => {
    console.log(`the current state of alphRadio is ${state}`)
    this.setState({
      toggle_alpha: state
    })

  }

  sortPrice = (state) => {
    console.log(`the current state of priceRadio is ${state}`)
    this.setState({
      toggle_price: state
    })
    

  }

  getType = (typevalue) => {

    console.log(`this is the type value ${typevalue}`)
    //what happens when you get the value of the field bac?
    //we need to pass this value to stocks container and stock container will render based off of which value was chosen
    
    this.setState({
      search_type: typevalue
    })
  
  }



  

  render() {
    
    return (
      <div>
        <SearchBar stocks={this.state.stocks} radioAlph={this.sortAlphabeticalName} radioPrice={this.sortPrice} fieldType={this.getType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickFunction={this.grabStock} type={this.state.search_type} toggleA={this.state.toggle_alpha} toggleP={this.state.toggle_price}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.user_portfolio} clickFunction={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchStocks()
    
  }

}

export default MainContainer;
