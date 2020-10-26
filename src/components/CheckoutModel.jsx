import React from "react";

function CheckoutModal({ handleCheckout, totalPrice, numberOfItems }) {
  return (
    <div className='modal'>
      <div className='modal-inner'>
        <h2>Checkout</h2>
        <div className='col'>
          <img src='images/success.webp' alt='' />
        </div>
        <h3 className='badge badge-success'>
          Total Price of Rs {totalPrice}-/ paid successfully
        </h3>
        <button className='close' onClick={handleCheckout}>
          X
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;
