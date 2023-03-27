import React from "react";
import closeIcon from '../assets/close-icon.png'
import '../components/Header.css'

const CartSidebar = ({cartsidebar, closeCartSidebar}) => {

    return(
        <div className={cartsidebar?"cartsidebar cartsidebar--open":"cartsidebar" }>
            
            <header>
                
                <h1>Cart</h1>

                <div className="close-icon-container" id="cart-close-icon" onClick={closeCartSidebar}>
                    <img src={closeIcon} style={{width: '20px'}} alt="" />
                </div>
            </header>

            <nav>
                <ul>
                    <li>Your Cart is currently empty</li>     
                </ul>
            </nav>  
        </div>
    )
}

export default CartSidebar