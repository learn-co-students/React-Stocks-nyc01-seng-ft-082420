import React from 'react'



class Stock extends React.Component {
  
  handleClick = () => {
    this.props.clickHandler(this.props.stock)
  }

  handleRemove = () => {
    this.props.removeHandler(this.props.stock)
  }

  render() {
    return(
      <div>
      <div className="card" onClick={this.props.portfolio ? this.handleRemove : this.handleClick }>
        <div className="card-body">
          <h5 className="card-title">{
              this.props.stock.name
            }</h5>
          <p className="card-text">{
              this.props.stock.ticker + ' ' + this.props.stock.price
            }</p>
        </div>
      </div>
      </div>
    )
  }

}



export default Stock