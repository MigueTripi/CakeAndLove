import React from "react";
import ReactDOM from "react-dom";
import SocialNetworkBanner from "../SocialNetworkBanner/Social-Network-Banner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css"

class Footer extends React.Component{

    render(){
        return (
            <div className="Footer">                
                <Row>
                    <Col xs={3} className="social-network-banner">
                        <SocialNetworkBanner></SocialNetworkBanner>
                    </Col>
                    <Col>
                        <h1>Hello I'm the Footer</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}

ReactDOM.render(
    <Footer></Footer>,
    document.getElementById('root')
)

export default Footer;