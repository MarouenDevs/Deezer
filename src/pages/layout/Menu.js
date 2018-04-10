import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";




class Menu extends Component {


    render() {

        return (

            <Navbar inverse  staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Deezer</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Menu;
