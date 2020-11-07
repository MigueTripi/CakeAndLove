import React from "react";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css';
import Container from 'react-bootstrap/Container';

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            dropdownMenus: []
        };
        this.ChangeToArtisticCakes = this.ChangeToArtisticCakes.bind(this);
    }

    ChangeToArtisticCakes(){
        console.log("Change to artistics cakes");
    }

    componentDidMount(){
        //read data from some file or endpoint
        const menuItems = [
            {
                id: 1,
                title: "Tortas",
                subItems: [
                    {id: 1, title: "Artísticas", redirectEvent: this.ChangeToArtisticCakes },
                    {id: 2, title: "Temáticas", redirectEvent: this.ChangeToArtisticCakes },
                    {id: 3, title: "Cumpleaños", redirectEvent: this.ChangeToArtisticCakes }
                ]
            },
            {
                id: 2,
                title: "Eventos",
                subItems: [
                    {id: 1, title: "Desayunos", redirectEvent: this.ChangeToArtisticCakes },
                    {id: 1, title: "Fechas célebres", redirectEvent: this.ChangeToArtisticCakes }
                ]
            },
            {
                id: 3,
                title: "Pastelería",
                subItems: [
                    {id: 1, title: "Pastelería", redirectEvent: this.ChangeToArtisticCakes }
                ]
            }
        ];

        this.setState({
            dropdownMenus: menuItems
        });
    }

    render(){
        const menus = this.state.dropdownMenus.map(menu => 
            <Col className="dropdown-menu-align-left" lg="2">
                <DropdownButton key={menu.title + menu.id.toString()} title={menu.title}>
                    {menu.subItems.map(subItem =>
                        <Dropdown.Item key={subItem.title + subItem.id.toString()} eventKey="subItem.title" onClick={subItem.redirectEvent}>{subItem.title}</Dropdown.Item>
                        )}
                </DropdownButton>
            </Col>
            );

        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col lg="12">
                        {menus}
                        <Col className="menu-align-right" lg="4">Logo here</Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(
    <Header></Header>,
    document.getElementById('root')
)

export default Header;