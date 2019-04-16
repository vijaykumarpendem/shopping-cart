import React from 'react';

const CartComponent = function() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-2">
        <h5>Total Price: Rs. 1271</h5>
        <button className="btn btn-primary">Checkout</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src="/product-1.jpg" style={{maxWidth:"100px", maxHeight: "100px"}}/>
          </div>
          <div className="col-6 offset-1">
            <div className="mt-4">Product 1</div>
          </div>
          <div className="col-3">
            <div className="mt-4">
              <button className="btn btn-danger">-</button>
              <span className="mx-2">0</span>
              <button className="btn btn-primary">+</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <img src="/product-1.jpg" style={{maxWidth:"100px", maxHeight: "100px"}}/>
          </div>
          <div className="col-6 offset-1">
            <div className="mt-4">Product 1</div>
          </div>
          <div className="col-3">
            <div className="mt-4">
              <button className="btn btn-danger">-</button>
              <span className="mx-2">0</span>
              <button className="btn btn-primary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComponent;
