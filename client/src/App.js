import StartPage from "./components/MainPage/StartPage";
import MainPage from "./components/MainPage/MainPage";
import React from 'react';
import './index.css';
import AfterSearch from "./components/AfterSearch/AfterSearch"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AccountSettings from "./components/MainPage/Header/AccountSettings/AccountSettings";
import AccountLinksList from "./components/MainPage/Header/AccountLinksList/AccountLinksList";
import AccountStartShop from "./components/MainPage/Header/AccountBecomePages/AccountStartShop";
import AccountBecomeDriver from "./components/MainPage/Header/AccountBecomePages/AccountBecomeDriver";
import AccountReportProblem from "./components/MainPage/Header/AccountReportProblem/AccountReportProblem";
import AccountPromos from "./components/MainPage/Header/AccountPromos/AccountPromos";
import AuthForm from "./components/AuthenticationPage/AuthForm";
import SingleShopPage from "./components/SingleShopPage/SingleShopPage";
import ShopProductsPage from "./components/SingleShopPage/ShopProductsPage/ShopProductsPage";
import ShopGalleryPage from "./components/SingleShopPage/ShopGalleryPage/ShopGalleryPage";
import { ImageProvider } from "./components/SingleShopPage/ShopGalleryPage/ImageContext";
import ShopReviewsPage from "./components/SingleShopPage/ShopReviewsPage/ShopReviewsPage";
import ShopAboutPage from "./components/SingleShopPage/ShopAboutShopPage/ShopAboutPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Checkout from "./components/CheckoutPage/Checkout"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


const App = () => {

  return (

    <Router>

      <Routes>

        <Route path='/' element={<MainPage />}>
          {/* <Route index element={<StartPage />} /> */}
          <Route path='/menu' element={
            <AccountLinksList
            />
          }>
          </Route>
          <Route path='/account-settings' element={
            <AccountSettings
            />
          } />
          <Route path='/account-start-shop' element={
            <AccountStartShop
            />
          } />

          <Route path='/account-become-driver' element={
            <AccountBecomeDriver
            />
          } />
          <Route path='/account-report-problem' element={
            <AccountReportProblem
            />
          } />
          <Route path='/account-promos' element={
            <AccountPromos
            />
          } />
          <Route path='/single-shop' element={<SingleShopPage />}>
            <Route path='/single-shop/shop-products' element={
              <ShopProductsPage
              />
            } />
            <Route
              path='/single-shop/shop-gallery'
              element={
                <ImageProvider >
                  <ShopGalleryPage />
                </ImageProvider>
              }
            />
            <Route path='/single-shop/shop-reviews' element={
              <ShopReviewsPage
              />
            } />
            <Route path='/single-shop/about-shop' element={
              <ShopAboutPage
              />
            } />

          </Route>

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
