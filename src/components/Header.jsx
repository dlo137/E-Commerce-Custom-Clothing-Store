import React from 'react' 
import { Link } from 'react-router-dom'


import menu from '../assets/hamburger-menu.png'
import logo from '../assets/shirt-goat-logo.avif'
import user from '../assets/user.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'

import '../components/Header.css'







const Header = ({openSidebar, openSearchbar, openCartSidebar}) => {
    return(
            <div className="header">
                <header>
                    {/* Black Banner at Top */}
                    <div className="nation-wide-shipping-banner Header">
                        <p>
                            Nation Wide Shipping
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav>
                        {/*Menu-Icon Left*/}
                        <div className='hamburger-icon' onClick={openSidebar}>
                            <img src={menu} alt="hamburger menu icon"  /> 
                        </div>

                        {/* Logo Center*/}
                        <Link to="/" >
                            <div className="logo">
                                <img src={logo} alt="comapny logo" /> 
                            </div>
                        </Link>

                        {/* Links right*/}
                        <div className='links'>

                            <Link to='/login'> 
                                <img src={user} alt="user icon" style={{ width: '60 px', height: '60px', padding: '1rem'}} className="first-link"/> 
                            </Link>

                            <img src={search} onClick={openSearchbar} alt="search icon" style={{ width: '60px', height: '60px', padding: '1rem'
                            }} />

                            <img src={cart} onClick={openCartSidebar} alt="cart icon"style={{ width: '60px', height: '60px', padding: '1rem'}} /> 
                        </div>  
                    </nav>
                </header>
            </div>

    )
}



export default Header