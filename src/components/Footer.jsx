import React from "react";

function Footer({ numberOfItems, totalPrice, clearCart, handleCheckout }) {
  return (
    <div className='footer fixed'>
      <div className='container'>
        <div className='d-flex align-center justify-between'>
          <div className='left'>
            <div className='col'>
              <div className='btn btn-primary'>Qty: {numberOfItems}</div>
            </div>
            <div className='col'>
              <div className='btn btn-primary'>
                Total Price: {totalPrice} Rs
              </div>
            </div>
          </div>
          <div className='right'>
            <button className='btn btn-primary' onClick={clearCart}>
              Clear Cart
            </button>
            <button className='btn btn-primary' onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
