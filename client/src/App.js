import StartPage from "./components/MainPage/StartPage";
import MainPage from "./components/MainPage/MainPage";
import React from 'react';
import './index.css';
import AfterSearch from "./components/AfterSearch/AfterSearch"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from "./components/AuthenticationPage/AuthForm";
import SingleShopPage from "./components/SingleShopPage/SingleShopPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Checkout from "./components/CheckoutPage/Checkout"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


const App = () => {

  return (

    <Router>

      <Routes>

        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<StartPage />} />
          <Route path='/single-shop' element={<SingleShopPage />} />
          <Route path='/after' element={<AfterSearch />}></Route>
          <Route path='/auth' element={<AuthForm />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/cart' element={<ShoppingCart />}></Route>
        </Route>



      </Routes>
    </Router>

  );
}

export default App;
