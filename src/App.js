import React from "react";
import "./sass/style.scss";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "./Context/GlobalTheme";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
