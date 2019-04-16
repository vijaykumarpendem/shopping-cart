import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = function() {
  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
      <h3 className="navbar-brand mx-auto">Online Shopping</h3>
      <Link to="/cart">
        <button className="btn btn-info">Cart</button>
      </Link>
    </div>
  )
};

export default HeaderComponent;
