import React from 'react';
import data from '../data.json';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section>
      <ul id="products" className="list-container">
        {data.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </ul>
    </section>
  );
}
