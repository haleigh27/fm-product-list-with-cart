import React, { forwardRef, useContext } from 'react';
import CartContext from '../store/cartContext';

const Modal = forwardRef(function Modal({ onClose }, ref) {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.products.reduce(
    (totalPriceOfProducts, products) => {
      return totalPriceOfProducts + products.quantity * products.price;
    },
    0,
  );

  return (
    <dialog ref={ref}>
      <div className="confirmation-modal">
        <img
          className="tick-image"
          src="/public/images/icon-order-confirmed.svg"
          alt=""
        />
        <h2 className="text1 rose900">Order Confirmed</h2>
        <p className="text4 rose500">We hope you enjoyed your food!</p>
        <div>
          <div className="confirmation-modal__items">
            <ul>
              {cartCtx.products.map((product, index) => {
                return (
                  <li key={index}>
                    <img
                      className="thumbnail-image"
                      src={product.image.thumbnail}
                      alt=""
                    />
                    <div>
                      <p className="confirmation-modal__item-name text4-bold">
                        {product.name}
                      </p>
                      <div className="confirmation-modal__item-details">
                        <p className="text4-bold red">{product.quantity}x</p>
                        <p className="text4 rose500">@${product.price}</p>
                      </div>
                    </div>
                    <p className=" confirmation-modal__total-price text3 rose900">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="confirmation-modal__order-total">
              <p className="text4 rose900">Order Total</p>
              <p className="text2 rose900">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <button className="confirm-order-btn text3" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </dialog>
  );
});

export default Modal;
