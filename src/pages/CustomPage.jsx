import React,  {Link} from 'react'
import "../components/CustomPage.css" 
import CustomHero from "../components/CustomHero"

import customT from "../assets/customT.png"
import customHoodie from "../assets/custom-hoodie.png"
import customWindbreaker from "../assets/custom-windbreaker.png"
import customCrewneck from "../assets/custom-crewneck.png"



function CustomPage() {
  return (
    <div className='CustomPage'>
        <CustomHero />

        <main>
            <p className='custom-shirtsp'>
                Custom Shirts are shipping out withing 1-2 business days (weekends are not included.) 
            </p>

            <p>
              If you need to contact us directly you can email us &nbsp; <br /> <a href="mailto:shirtgoatlv@gmail.com" className='email-link'>SHIRTGOATLV@GMAIL.COM</a>
            </p>

            <section className="clothing-options">
                    <div>
                        <img src={customT} alt="" className='clothing-imgs'/>
                        <p className='h2-title'>CUSTOM T-SHIRT</p>
                        <p className='price-text'>from $25.00</p>
                    </div>


                <div>
                    <img src={customHoodie} alt="" className='clothing-imgs'/>
                    <p className='h2-title'>Custom HOODIE Print</p>
                    <p className='price-text'>from $45.00</p>
                </div>

                <div>
                    <img src={customWindbreaker} alt="" className='clothing-imgs'/>
                    <p className='h2-title'>Custom Satin Jacket</p>
                    <p className='price-text'>from $100.00</p>
                </div>

                <div>
                    <img src={customCrewneck} alt="" className='clothing-imgs'/>
                    <p className='h2-title'>Custom Crewneck <br /> Sweatshirt</p>
                    <p className='price-text'>from $40.00</p>
                </div>      
            </section>
        </main>
    </div>

  )
}

export default CustomPage