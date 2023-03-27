import React from "react";
import closeIcon from '../assets/close-icon.png'
import '../components/Header.css'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebar, closeSidebar}) => {

    return(
        <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
            
            <div className="close-icon-container" onClick={closeSidebar}>
                <img src={closeIcon} alt="" />
            </div>

            <nav>
                <ul>
                    <Link to="/login" className="Links">
                        <li>Log in</li>
                    </Link>
                    <li><a href="https://www.instagram.com/hipporedprinting/" target="blank">Instagram</a></li>      
                </ul>
            </nav>  
        </div>
    )
}

export default Sidebar