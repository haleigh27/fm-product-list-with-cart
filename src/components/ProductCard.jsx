import React, { useContext } from 'react';
import CartContext from '../store/cartContext';

export default function ProductCard({ product }) {
  const cartCtx = useContext(CartContext);

  const productInCart = cartCtx.products.find((p) => p.name === product.name);

  return (
    <li>
      <picture>
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        <img
          src={product.image.mobile}
          alt={product.name}
          className={productInCart ? 'img-border' : ''}
        />
      </picture>
      {productInCart ? (
        <div className="add-to-cart-btn quantity">
          <button
            className="quantity-btn"
            onClick={() => cartCtx.decreaseProductQuantity(product.name)}
          >
            <img
              src="./images/icon-decrement-quantity.svg"
              alt="Decrease quantity"
            />
          </button>
          <span className="text4-bold">{productInCart.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => cartCtx.addProduct(product)}
          >
            <img
              src="./images/icon-increment-quantity.svg"
              alt="Increase quantity"
            />
          </button>
        </div>
      ) : (
        <button
          className="add-to-cart-btn empty"
          onClick={() => cartCtx.addProduct(product)}
        >
          <img src="./images/icon-add-to-cart.svg" alt="" />
          <p className="text4-bold">Add to Cart</p>
        </button>
      )}
      <div className="product-cart--item-details">
        <p className="text4 rose500">{product.category}</p>
        <p className="text3 rose900">{product.name}</p>
        <p className="text3 red">${product.price.toFixed(2)}</p>
      </div>
    </li>
  );
}
