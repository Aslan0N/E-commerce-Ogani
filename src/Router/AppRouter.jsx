import React, { useState } from "react";
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
import { ToastContainer } from 'react-toastify';
import AllProducts from "../Pages/AllProducts";

const AppRouter = () => {


  const [dark, setDark] = useState(false)
  const changeMood = () =>{
    setDark(!dark)
    if(dark === true){
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
    if(dark === false){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }
    
  }


  return (
    <>
      <ContextProvider>
        <BrowserRouter>
        <ToastContainer />
        <Header changeMood={changeMood} dark={dark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/all" element={<AllProducts/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default AppRouter;
