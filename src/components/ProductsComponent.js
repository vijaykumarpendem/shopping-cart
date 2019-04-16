import React from 'react';

const ProductsComponent = function() {
  return (
    <div className="row mt-2">
      <div className="col-2 offset-1">
        <h4>Product Menu</h4>
        <ul className="list-group">
          <li className="list-group-item">Sports</li>
          <li className="list-group-item">Electronics</li>
          <li className="list-group-item">Fashion</li>
          <li className="list-group-item">Kitchen</li>
        </ul>
      </div>
      <div className="col-7">
        <h4>Products List</h4>
        <div className="container product-scroll">
          <div className="d-flex flex-wrap">
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-1.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-2.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-3.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-4.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-5.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
            <div className="card m-3">
              <div style={{minHeight: "230px", minWidth: "100px"}}>
                <img className="card-img-top img-fluid" style={{maxWidth:"220px", maxHeight: "200px"}} src="/product-6.jpg"/>
              </div>
              <div className="card-body" style={{maxWidth: "220px"}} style={{maxWidth: "220px"}}>
                <h5 className="card-title">Bowl</h5>
                <p className="card-text">This is a long description for the bowl</p>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsComponent;
