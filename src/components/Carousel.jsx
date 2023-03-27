import "../components/Carousel.css" 
import { Link } from 'react-router-dom'



function Carousel (){
    return(
        <div className="carousel" >
            <div className="carousel-text">
                <h1>CUSTOMS</h1>

                <Link to="/custom">
                    <button>Shop Now</button>
                </Link>
            </div>
        </div>
    )
    
}

export default Carousel;