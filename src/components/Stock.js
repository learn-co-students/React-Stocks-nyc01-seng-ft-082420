import React from 'react'

// const Stock = props => {

class Stock extends React.Component {

  localClickHandler = () => {
    this.props.clickHandler(this.props.stonk)
    console.log(this.props.stonk)
  }
  render(){

    return (
    <div>
  
      <div className="card" onClick={this.localClickHandler}>
        <div className="card-body">
          <h5 className="card-title">{
              //Company Name
              this.props.stonk.name
            }</h5>
          <p className="card-text">{
              //ticker: stock price
              this.props.stonk.price
            }</p>
        </div>
      </div>

    </div>
    )
  }

};

export default Stock
