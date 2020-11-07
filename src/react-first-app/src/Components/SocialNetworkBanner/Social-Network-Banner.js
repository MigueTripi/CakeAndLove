import React from "react";
import ReactDOM from "react-dom";
import {RiInstagramLine} from "react-icons/ri";
import {RiFacebookBoxLine} from "react-icons/ri";
import {RiWhatsappLine} from "react-icons/ri";
import Row from "react-bootstrap/Row";

class SocialNetworkBanner extends React.Component{
    render(){
        return (
            <div className="social-network-media">
                <Row>
                <RiInstagramLine></RiInstagramLine>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Sígueme en Instagram
                    </a>
                </Row>
                <Row>
                <RiFacebookBoxLine></RiFacebookBoxLine>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Sígueme en Facebook
                    </a>
                </Row>
                <Row>
                <RiWhatsappLine></RiWhatsappLine>
                <a
                    className="App-link"
                    href=" https://wa.me/5491125057150"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Contáctame por Whatsapp
                    </a>
                </Row>
            </div>
        )
    }
}

ReactDOM.render(
    <SocialNetworkBanner />,
    document.getElementById('root')
)

export default SocialNetworkBanner;