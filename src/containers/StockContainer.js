import React, { Component } from 'react';
import Stock from '../components/Stock'
//import SearchBar from '../components/SearchBar'

class StockContainer extends Component {

  state = {
    currentListings: [],
    filterListings: []
    

  }

  // stateChanger = () => {
  //   let masterStocks = this.props.stocks
  //   let aToggle = this.props.toggleA
  //   let pToggle = this.props.toggleP
  //   this.setState({
  //     currentListings: [...masterStocks],
  //     alphabetToggle: aToggle,
  //     priceToggle: pToggle })

  // }

filterAlphabetical = () => {
  
    let filterArray =  this.props.stocks.sort(x=> x.name)

    return filterArray.map(x => {
      return <Stock stock={x} key={x.id} ticker={x.ticker} name={x.name} type={x.type} price={x.price} clickFunction={this.props.clickFunction} />
    })
  
}

filterPrice = () => {
  let filterArray =  this.props.stocks.sort(x=> x.price)

  return filterArray.map(x => {
    return <Stock stock={x} key={x.id} ticker={x.ticker} name={x.name} type={x.type} price={x.price} clickFunction={this.props.clickFunction} />
  })
  
}

filterStocks = () => {
  let filterArray = this.props.stocks.filter (x=> x.type === this.props.type)
  
  this.setState({
    filterListings: filterArray

  })
  

  return filterArray.map(x=> {
    return <Stock stock={x} key={x.id} ticker={x.ticker} name={x.name} type={x.type} price={x.price} clickFunction={this.props.clickFunction} />
  })
    
  
}



  
renderStocks = () => {
 
    return this.props.stocks.map(x => {
      return <Stock stock={x} key={x.id} ticker={x.ticker} name={x.name} type={x.type} price={x.price} clickFunction={this.props.clickFunction}/> 
    })
  }

  render() {
    
    
    
    return (
      
      <div>
        
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.type === null ? this.renderStocks() : this.filterStocks()
          //this.props.aToggle === true ? this.filterAlphabetical() : this.filterStocks()
          //this.props.pToggle === true ? this.filterPrice() : this.filterStocks()
        }
      </div>
    );
  }

  

}

export default StockContainer;
