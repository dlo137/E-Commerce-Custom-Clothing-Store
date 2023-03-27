import React from "react";
import '../components/Header.css'
import searchIcon from "../assets/search.png"
import closeIcon from '../assets/close-icon.png'

const Searchbar = ({searchbar, closeSearchbar}) => {

    return(
        <div className={searchbar?"searchbar searchbar--open":"searchbar"} >

            <div id="nation-wide-banner">
                <p>
                    Nation-Wide Shipping   
                </p>
            </div>

            <section className="search-section">
                <div>
                    <img src={searchIcon} alt="" />
                </div>

                <input type="text" id="search-input" name="search" placeholder="Search our store" />

                <div classname="close-icon-container" onClick={closeSearchbar}>
                    <img src={closeIcon} alt=""  style={{width: "25px", height: "25px"}}/>
                </div>
                
            </section>

        </div>
    )
}

export default Searchbar