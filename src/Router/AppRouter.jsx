import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "../Context/GlobalContext";
import Contact from "../Pages/ContactCom[ponents/Contact";
import { GlobalTheme } from "../Context/GlobalTheme";
import React, { useContext, useEffect } from "react";
import Pages from "../Pages/PagesComponents/Pages";
import PrivateRoute from "../Routes/PrivateRoute";
import Home from "../Pages/HomeComponents/Home";
import Shop from "../Pages/ShopComponents/Shop";
import Blog from "../Pages/BlogComponents/Blog";
import { ToastContainer } from "react-toastify";
import AllProducts from "../Pages/AllProducts";
import WishList from "../Pages/WishList";
import Details from "../Pages/Details";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Basket from "../Pages/Basket";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";

const AppRouter = () => {
  const { darkMode } = useContext(GlobalTheme);

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
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContextProvider>
      </main>
    </>
  );
};

export default AppRouter;
