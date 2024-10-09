import React from 'react';

export default function Cart() {
  return (
    <aside className="cart-container">
      <p className="text2 red">Your Cart(0)</p>
      <div>
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p className="text4-bold rose500">Your added item will appear here</p>
      </div>
    </aside>
  );
}
