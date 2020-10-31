import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    api: [],
    portfolio: [],
    masterApi: [],
    sort: "",
    filtered: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({ 
      api: stocks,
      masterApi: stocks 
    }))
  }

  stockClickHandler = (stockObj) => {
    this.setState(previousState => 
      ({ portfolio: [...previousState.portfolio, stockObj] }))
  }

  deletePortfolioStockClickHandler = (stockObj) => {
    let deleteStock = this.state.portfolio.filter(stock => stock.id !== stockObj.id)
    this.setState(() => ({portfolio: deleteStock}))
  }

  sortBy = (e) => {
    if(e.target.value === 'Alphabetically'){
      let sortAlpha = this.state.api.sort((a,b) => a.name > b.name ? 1 : -1)
      this.setState(() => ({ 
        api: sortAlpha,
        sort: 'Alphabetically' 
      }))
    } else if (e.target.value === 'Price'){
      let sortPrice = this.state.api.sort((a,b) => a.price > b.price ? 1 : -1)
      this.setState(() => ({ 
        api: sortPrice,
        sort: 'Price'
      }))
      
    }
  }

  filterBy = (e) => {

    let filterThing = e.target.value
    
    let filterArray = this.state.masterApi.filter(stock => stock.type.includes(filterThing))
    
    this.setState(() => ({
      
      api: filterArray,
      filter: filterThing
    }))
    

  }

  render() {
    return (
      <div>
        <SearchBar sortBy={this.sortBy} sort={this.state.sort} filter={this.state.filter} filterBy={this.filterBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.api} stockClickHandler={this.stockClickHandler}  />
                
            </div>
            <div className="col-4">

              <PortfolioContainer stockClickHandler={this.stockClickHandler} portfolio={this.state.portfolio} deletePortfolioStockClickHandler={this.deletePortfolioStockClickHandler}/>
            
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
