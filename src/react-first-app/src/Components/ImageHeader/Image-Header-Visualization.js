import React from "react";
import ReactDOM from "react-dom";
import "./Image-Header-Visualization.css";

class ImageHeaderVisualization extends React.Component{
    
    
    render(){
        return (
            <div className="image-header-visualization">
                <button className="previous-image">Previous</button>
                <img src="http://localhost:3000/Resources/Images/Header-Visualization/cheesecake-red.jpg" alt="hola">

                    
                </img>
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