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
        <img src={product.image.mobile} alt={product.name} />
      </picture>
      {productInCart ? (
        <div>
          <button onClick={() => cartCtx.decreaseProductQuantity(product.name)}>
            -
          </button>
          <span>{productInCart.quantity}</span>
          <button onClick={() => cartCtx.addProduct(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => cartCtx.addProduct(product)}>
          <img src="/images/icon-add-to-cart.svg" alt="" />
          <p className="text4-bold">Add to Cart</p>
        </button>
      )}

      <p className="text4 rose500">{product.category}</p>
      <p className="text3 rose900">{product.name}</p>
      <p className="text3 red">${product.price.toFixed(2)}</p>
    </li>
  );
}
