import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CustomPage from './pages/CustomPage';
import ContactPage from './pages/ContactPage';
import GraphicTeesPage from './pages/GraphicTeesPage';

import Header from './components/Header'
import Footer from './components/Footer'

import './components/Header.css'

import Searchbar from "./components/Searchbar"
import CartSidebar from './components/CartSidebar';
import Sidebar from './components/Sidebar'
import Backdrop from './components/Backdrop';

{/* If lost, delete 4 imports ^ and usestates & components then restart*/}

const App = ({openSidebar, openSearchbar, openCartSidebar})  => {

  {/* ============== USE-STATE FOR ALL HEADER ANIMATIONS ================*/}

  {/* SIDEBAR */}
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar ((prevState) => !prevState)
  }

  {/* CART */}

  const [cartsidebar, setCartSidebar] = useState(false);

  const toggleCartSidebar = () => {
    setCartSidebar ((prevState) => !prevState)
  }
  
  {/* SEARCHBAR */}

  const [searchbar, setSearchbar] = useState(false);

  const toggleSearchbar = () => {
    setSearchbar ((prevState) => !prevState)
  }

  {/* ====================== HTML /JSX ===========================*/}

  return (
    <BrowserRouter>
      <Header openSidebar = {toggleSidebar} openSearchbar = {toggleSearchbar} openCartSidebar = {toggleCartSidebar} />

      <Searchbar searchbar = {searchbar} closeSearchbar = {toggleSearchbar}/>
      <CartSidebar cartsidebar = {cartsidebar} closeCartSidebar = {toggleCartSidebar}/>

      <Sidebar sidebar = {sidebar} closeSidebar = {toggleSidebar}/>
      <Backdrop sidebar = {sidebar} closeSidebar = {toggleSidebar} />


        <div className='App'>
            <Routes>
              <Route path='/' element= { <HomePage /> }> </Route>
              <Route path='/login' element= { <LoginPage /> }> </Route>
              <Route path='/custom' element = { <CustomPage />}> </Route>
              <Route path='/contact' element = { <ContactPage />}> </Route>
              <Route path='/graphic' element = { <GraphicTeesPage/>}> </Route>
            </Routes>
        </div>  

        <Footer />
    </BrowserRouter>

  );
}

export default App;
