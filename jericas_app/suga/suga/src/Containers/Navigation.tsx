import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Navigation.css';

class Navigation extends React.Component {
    render(){
        return <div className="Nav-Container" >
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{'testing'}
                Navigation bar
                </Navbar.Brand>
            </Navbar>
        </div>;
    }
}

export default Navigation;