import React, { createContext, useReducer } from 'react';

const CartContext = createContext({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  decreaseProductQuantity: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_PRODUCT') {
    const cartProductIndex = state.products.findIndex(
      (product) => product.name === action.product.name,
    );

    const updatedCartProducts = [...state.products];

    if (cartProductIndex > -1) {
      const existingProduct = state.products[cartProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      updatedCartProducts[cartProductIndex] = updatedProduct;
    } else {
      updatedCartProducts.push({ ...action.product, quantity: 1 });
    }

    return { ...state, products: updatedCartProducts };
  }

  if (action.type === 'DECREASE_PRODUCT_QUANTITY') {
    const cartProductIndex = state.products.findIndex(
      (product) => product.name === action.name,
    );

    const updatedCartProducts = [...state.products];

    const existingProduct = state.products[cartProductIndex];

    if (existingProduct.quantity === 1) {
      updatedCartProducts.splice(cartProductIndex, 1);
    } else {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      };
      updatedCartProducts[cartProductIndex] = updatedProduct;
    }

    return { ...state, products: updatedCartProducts };
  }

  if (action.type === 'REMOVE_PRODUCT') {
    const updatedCartProducts = state.products.filter(
      (product) => product.name !== action.name,
    );
    return { ...state, products: updatedCartProducts };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { products: [] });

  function addProduct(product) {
    dispatchCartAction({ type: 'ADD_PRODUCT', product });
  }

  function removeProduct(name) {
    dispatchCartAction({ type: 'REMOVE_PRODUCT', name });
  }

  function decreaseProductQuantity(name) {
    dispatchCartAction({ type: 'DECREASE_PRODUCT_QUANTITY', name });
  }

  const cartContext = {
    products: cart.products,
    addProduct,
    decreaseProductQuantity,
    removeProduct,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
