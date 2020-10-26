import React from "react";

function Product({ products, handleAdd, handleDelete }) {
  return (
    <div className='d-flex flex-wrap'>
      {products.map(
        (
          {
            brandName,
            productName,
            quantity,
            mrp,
            price,
            offer,
            imgUrl,
            id,
            numberOfItems,
          },
          index
        ) => (
          <div className='col d-flex flex-wrap' key={index}>
            <div className='product-img'>
              <img src={imgUrl} alt='product' />
              <div className='overlay'>{offer}</div>
            </div>
            <div className='product-detail'>
              <h4 className='brand'>{brandName}</h4>
              <h5 className='product-name'>{productName}</h5>
              <p className='quantity'>{quantity}</p>
              <p className='mrp'>MRP: {mrp}</p>
              <p className='price'>Rs {price}</p>
              <div className='d-flex align-center'>
                <button
                  className='btn btn-primary m-0'
                  onClick={() => handleAdd(id, price)}
                >
                  Add to Cart
                </button>
                <div className='no_of_items d-flex justify-center align-center'>
                  <button
                    className={
                      numberOfItems === 0
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
                    onClick={() => handleDelete(id)}
                    disabled={numberOfItems === 0 ? "disabled" : ""}
                  >
                    -
                  </button>
                  <div className='p-2'>{numberOfItems}</div>
                  <button
                    className='btn btn-primary'
                    onClick={() => handleAdd(id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Product;
