import MainPage from "./components/MainPage/MainPage";
import React from 'react';
import './index.css';
import AfterSearch from "./components/AfterSearch/AfterSearch"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountSettings from "./components/MainPage/Header/AccountSettings/AccountSettings";
import AccountLinksList from "./components/MainPage/Header/AccountLinksList/AccountLinksList";
import AccountStartShop from "./components/MainPage/Header/AccountBecomePages/AccountStartShop";
import AccountBecomeDriver from "./components/MainPage/Header/AccountBecomePages/AccountBecomeDriver";
import AccountReportProblem from "./components/MainPage/Header/AccountReportProblem/AccountReportProblem";
import AccountPromos from "./components/MainPage/Header/AccountPromos/AccountPromos";
import AuthForm from "./components/AuthenticationPage/AuthForm";
import SingleShopPage from "./components/SingleShopPage/SingleShopPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {

  return (
  
    <Router>

      <Routes>
        {/* <Route path='/' element={<MainPage />}> */}
        <Route path='/' element={<SingleShopPage />}>
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


        </Route>
        <Route path='/after' element={<AfterSearch />}></Route>
        <Route path='/auth' element={<AuthForm />}></Route>
        <Route path='/single' element={<SingleShopPage />}></Route>
      </Routes>
    </Router>
  
  );
}

export default App;
