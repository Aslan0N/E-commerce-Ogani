import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../Context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomeComponents/Home";
import Shop from "../Pages/ShopComponents/Shop";
import Pages from "../Pages/PagesComponents/Pages";
import Blog from "../Pages/BlogComponents/Blog";
import Contact from "../Pages/ContactCom[ponents/Contact";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Basket from "../Pages/Basket";
import { ToastContainer } from "react-toastify";
import AllProducts from "../Pages/AllProducts";
import { GlobalTheme } from "../Context/GlobalTheme";
import Details from "../Pages/Details";
import WishList from "../Pages/WishList";

const AppRouter = () => {
  const { darkMode } = useContext(GlobalTheme);

  useEffect(() => {
    localStorage.setItem("Mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <main className={darkMode ? "dark" : "light"}>
        <ContextProvider>
          <BrowserRouter>
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/all" element={<AllProducts />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/wishlist" element={<WishList />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContextProvider>
      </main>
    </>
  );
};

export default AppRouter;
