import React from 'react'

const Stock = (props) => {
  const {ticker, name, type, price} = props.stock

  const clickHandler = () => {
    props.clickHandler(props.stock)
  }

  return (
    <div onClick={clickHandler}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: $${price}`}</p>
        </div>
      </div>
    </div>
  )
};

export default Stock
