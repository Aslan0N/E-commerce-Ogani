import React from "react";
import "./sass/style.scss";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  );
};

export default App;
