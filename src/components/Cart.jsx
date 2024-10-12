import React, { useContext, useRef } from 'react';
import CartContext from '../store/cartContext';
import Modal from './Modal';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const dialogRef = useRef(null);

  const handleOpenModal = () => {
    dialogRef.current?.showModal();
  };

  const handleOrderConfirmation = () => {
    dialogRef.current?.close();
    cartCtx.clearCart();
  };

  const totalCartProducts = cartCtx.products.reduce(
    (totalNumberOfProducts, products) => {
      return totalNumberOfProducts + products.quantity;
    },
    0,
  );

  const totalPrice = cartCtx.products.reduce(
    (totalPriceOfProducts, products) => {
      return totalPriceOfProducts + products.quantity * products.price;
    },
    0,
  );

  return (
    <aside className="cart-container">
      <p className="text2 red">Your Cart ({totalCartProducts})</p>
      {cartCtx.products.length === 0 ? (
        <div className="center">
          <img
            src="/images/illustration-empty-cart.svg"
            alt=""
            className="center"
          />
          <p className="text4-bold rose500 py16">
            Your added item will appear here
          </p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartCtx.products.map((product, index) => {
              return (
                <li key={index} className="cart-item">
                  <div className="">
                    <p className="text4-bold rose900">{product.name}</p>
                    <div className="cart-item__details">
                      <p className="text4-bold red">{product.quantity}x</p>
                      <p className="text4 rose500">
                        @${product.price.toFixed(2)}
                      </p>
                      <p className="text4-bold rose500">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => cartCtx.removeProduct(product.name)}
                  >
                    <img
                      src="/public/images/icon-remove-item.svg"
                      alt="Remove Item"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="order-total">
            <p className="text4 rose900">Order Total</p>
            <p className="text2 rose900">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="carbon-free">
            <img src="/public/images/icon-carbon-neutral.svg" alt="" />
            <p className=" text4 rose900">
              This is a{' '}
              <span className="text4-bold rose900">carbon-neutral</span>delivery
            </p>
          </div>
          <button className="confirm-order-btn text3" onClick={handleOpenModal}>
            Confirm Order
          </button>
        </>
      )}
      {/* Confirmation Modal */}
      <Modal ref={dialogRef} onClose={handleOrderConfirmation} />
    </aside>
  );
}
