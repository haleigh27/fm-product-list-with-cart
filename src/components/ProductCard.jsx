import React from 'react';

export default function ProductCard({ product }) {
  return (
    <>
      <li>
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt={product.name} />
        </picture>
        <button>
          <img src="/images/icon-add-to-cart.svg" alt="" />
          <p className="text4-bold">Add to Cart</p>
        </button>
        <p className="text4 rose500">{product.category}</p>
        <p className="text3 rose900">{product.name}</p>
        <p className="text3 red">${product.price}</p>
      </li>
    </>
  );
}
