import React from "react";
import "./sass/style.scss";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "./Context/GlobalTheme";
import { WishlistProvider } from "react-use-wishlist";

const App = () => {
  return (
    <>
      <WishlistProvider>
        <ThemeProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </ThemeProvider>
      </WishlistProvider>
    </>
  );
};

export default App;
