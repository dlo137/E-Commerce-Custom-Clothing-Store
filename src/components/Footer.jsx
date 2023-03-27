import "../components/Footer.css" 
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className="Footer">
            <div className="footer-wrapper">
                <div className="customer-service-section">
                    <h1 className="dropdown-btn">CUSTOMER SERVICE</h1>

                    <ul className="dropdown-content">
                        <li>Refund Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>


                        <Link to='/contact' className="Links"> <li>Contact Us</li> </Link>
                    </ul>
                </div>

                <div className="main-menu-section">
                    <h1>MAIN MENU</h1>

                    <ul>
                        <Link to='/' className="Links">
                            <li>Home</li>
                        </Link>

                        <Link to='/custom' className="Links">
                            <li>Custom Prints</li>
                        </Link>
                    </ul>

                </div>

                <div className="sign-up-section">
                    <h1 className="h1">SIGN UP AND SAVE</h1>

                    <p className="p"> Subscribe to get special offers, free giveaways, and <br /> once in-a-lifetime deals.</p>

                    <form>
                        <input type="email" id="email" name="email" className="labels" placeholder="Enter your email address"/>

                        <input type="submit" id="submit"  name="submit" className="labels"></input>
                    </form>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer