import "../components/Gallery.css" 

import { Link } from 'react-router-dom';






function Gallery() {
    return(
        <div className="Gallery">
            
            <h1 id="title">SHOP OUR TEES</h1>
            <section className="grid" id="grid">

                <Link to="/custom" className="Links">
                    <div  className="grid-div" id="div-img-1">
                        <h1>CUSTOM ORDER / SAMPLE ORDER </h1>
                    </div>
                </Link>


                <Link to="/graphic" className="Links">
                    <div  className="grid-div"  id="div-img-2">
                        <h1>Adult Graphic Tees </h1>
                    </div>
                </Link>

                <div  className="grid-div"  id="div-img-3">
                    <h1>Youth Graphic Tees </h1>
                </div>
                
                <div  className="grid-div"  id="div-img-4">
                    <h1> Toddler Graphic Tees </h1>
                </div>

                <div  className="grid-div"  id="div-img-5">
                    <h1> Valentine's Day </h1>
                </div>

                <div  className="grid-div"  id="div-img-6">
                    <h1> Teacher </h1>
                </div>

                <div  className="grid-div"  id="div-img-7">
                    <h1> Popular </h1>
                </div>
                
                <div  className="grid-div"  id="div-img-8">
                    <h1> Father's Day </h1>
                </div>
            </section>
        </div>
    )
}
  
  export default Gallery;