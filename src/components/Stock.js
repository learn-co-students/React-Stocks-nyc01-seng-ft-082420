import React from 'react'

class Stock extends React.Component {

  clickHub = () => {
    this.props.clickFunction(this.props.stock)
  }

  render() {
    return (
      <div>

    <div className="card">
      <div onClick={this.clickHub} className="card-body">
        <h5 className="card-title">{this.props.name
            
          }</h5>
        <p className="card-text">{
           this.props.ticker
          }</p>
          <p>Price : {this.props.price}</p>
      </div>
    </div>


  </div>
    )
  }

} 
  


export default Stock
