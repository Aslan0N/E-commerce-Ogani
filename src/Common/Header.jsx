import React, { useContext, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useCart } from 'react-use-cart'



const Header = ({changeMood}) => {
  const context = useContext(GlobalContext)
  const [opn, setOpn] = useState(false)

  const toogleNav = ()=>{
    setOpn((value)=> !value)
  }
  const { totalUniqueItems} = useCart()

  return (
    <>
      <header>
      <div className="res">
            {/* <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" /> */}
            <div className="logo"></div>
      </div>

      <button onClick={toogleNav} className='fa-solid fa-bars res'></button>
      <div className="items res myW">
            <i className="fa-solid fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <p>item: <b>$150.00</b></p>
          </div>


       <div className="header-con">
       <div className="header-top">
         <div className="item">
         <div className="p-con">
            <div className="left">
              <i className="fa-solid fa-envelope"></i>
              hello@colorlib.com
            </div>
            <span className='span'></span>
            <div className="right">Free Shipping for all Order of $99</div>
          </div>
          <div className="i-con">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-pinterest"></i>
            <span className='span'></span>
            <div className="lang">
              English
            </div>
            <span className='span'></span>
            <div className="login">
              <i className="fa-solid fa-user" onClick={changeMood}></i>
              Login
            </div>
          </div>
         </div>
        </div>
        <div className="header-bottom">
         <div className="item">
         <div className="logo">
            {/* <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" /> */}
          </div>
          <nav>
            <ul>
              <li>
              <LinkContainer to={'/'}>
              <NavLink className={'text-none'}>
                  Home
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/shop'}>
              <NavLink className={'text-none'}>
                  Shop
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/pages'}>
              <NavLink className={'text-none'}>
                  Pages
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/blog'}>
              <NavLink className={'text-none'}>
                  Blog
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/contact'}>
              <NavLink className={'text-none'}>
                  Contact
              </NavLink>
              </LinkContainer>
              </li>
            </ul>
          </nav>
          <div className="items">
            
            <LinkContainer to={'/all'}>
              <NavLink className={'text-none'}>
              <i className="fa-solid fa-search"></i>
              </NavLink>
              </LinkContainer>
            <LinkContainer to={'/basket'}>
              <NavLink className={'text-none'}>
              
              <i class="fa-solid fa-bag-shopping">
              <span className='count' style={totalUniqueItems === 0?{display:"none" }:{display:"inline-block"}}>{totalUniqueItems}</span>
              </i>
              </NavLink>
            </LinkContainer>
            <p>item: <b>$150.00</b></p>
          </div>
         </div>
        </div>
       </div>


      </header>

      <div className={!opn ? "header-con2" : "header-con2 transform-none"}>
        <div className="logo">
        <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" />
        </div>
        <div className="items">
        <LinkContainer to={'/all'}>
              <NavLink className={'text-none'}>
              <i className="fa-solid fa-search"></i>
              </NavLink>
              </LinkContainer>
            <i class="fa-solid fa-bag-shopping"></i>
            <p>item: <b>$150.00</b></p>
          </div>
            <div className="lang-con">
            <div className="lang">
              English
            </div>
            <span className='span'></span>
            <div className="login">
              <i className="fa-solid fa-user"></i>
              Login
            </div>
            </div>
           
           <div className={context.isOpen ? "nav-menu opn" : "nav-menu"}>
           <button onClick={context.toggleMenu}>MENU<i className="fa-solid fa-bars"></i></button>
           <nav>
            <ul>
              <li>
              <LinkContainer to={'/'}>
              <NavLink className={'text-none'}>
                  Home
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/shop'}>
              <NavLink className={'text-none'}>
                  Shop
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/pages'}>
              <NavLink className={'text-none'}>
                  Pages
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/blog'}>
              <NavLink className={'text-none'}>
                  Blog
              </NavLink>
              </LinkContainer>
              </li>
              <li>
              <LinkContainer to={'/contact'}>
              <NavLink className={'text-none'}>
                  Contact
              </NavLink>
              </LinkContainer>
              </li>
            </ul>
          </nav>
           </div>

          <div className="i-con">
          <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
          <div className="left">
              <i className="fa-solid fa-envelope"></i>
              hello@colorlib.com
            </div>
            <div className="right">Free Shipping for all Order of $99</div>
      </div>
    </>
  )
}

export default Header