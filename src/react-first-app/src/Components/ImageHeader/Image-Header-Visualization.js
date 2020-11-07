import React from "react";
import ReactDOM from "react-dom";
import "./Image-Header-Visualization.css";
import Image from "../../Resources/Images/Header-Visualization/cheesecake-red.jpg";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class ImageHeaderVisualization extends React.Component{
    
    
    render(){
        return (
            <div className="image-header-visualization">
                <button className="previous-image">Previous</button>
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={Image} className="sliderimg" alt=""/>
                    <img src={Image} className="sliderimg" alt=""/>
                </AliceCarousel>
                <button className="next-image">Next</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ImageHeaderVisualization></ImageHeaderVisualization>,
    document.getElementById('root')
)

export default ImageHeaderVisualization;