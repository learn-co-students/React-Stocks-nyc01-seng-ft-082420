import React from 'react';

const Stock = (props) => {

  const localClick =(e) => {
    return (props.clickHandler(props.stock))
  }
  return (
    <div onClick={localClick}>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              props.stock.name
            }</h5>
          <p className="card-text">{
              props.stock.price
            }</p>
        </div>
      </div>


    </div>
  );
}

export default Stock



