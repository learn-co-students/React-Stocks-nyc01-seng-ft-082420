import React from 'react'

class Stock extends React.Component {
  
  lowestClickHandler = () => {
      this.props.stockClickHandler(this.props.stock)
  }

  deleteClickHandler = () => {
    // console.log("deleting this stock")
    this.props.deletePortfolioStockClickHandler(this.props.stock)
}

  render(){ 
    return (
    <div>
      <div className="card" >
        <div className="card-body" onClick={this.props.portfolio ? this.deleteClickHandler : this.lowestClickHandler}>
          <h5 className="card-title">{
              this.props.stock.name
            }</h5>
          <p className="card-text">{
              this.props.stock.price
            }</p>
        </div>
      </div>
    </div>
    )
  }

};

export default Stock
