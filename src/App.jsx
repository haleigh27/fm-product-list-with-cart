import React from 'react';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartContextProvider } from './store/cartContext.jsx';

function App() {
  return (
    <CartContextProvider>
      <div className="main-container">
        <div>
          <header>
            <h1 className="text1 rose900">Desserts</h1>
          </header>
          <ProductList />
        </div>
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
