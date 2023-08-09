import MainPage from "./components/MainPage/MainPage";
import React from 'react';
import './index.css';
import AfterSearch from "./components/AfterSearch/AfterSearch"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountSettings from "./components/MainPage/Header/AccountSettings/AccountSettings";
import AccountLinksList from "./components/MainPage/Header/AccountLinksList/AccountLinksList";

const App = () => {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/menu' element={
            <AccountLinksList
            />
          }>
          </Route>
          <Route path='/account-settings' element={
            <AccountSettings
            />
          } />

        </Route>
        <Route path='/after' element={<AfterSearch />}></Route>

      </Routes>
    </Router>

  );
}

export default App;
