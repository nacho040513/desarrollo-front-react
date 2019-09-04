import React from 'react';

import AppBar from 'material-ui/AppBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

import NavDropdown from 'react-bootstrap/NavDropdown';
import data from '../../requests/menu';

import {indigo600} from 'material-ui/styles/colors';


export default class MyAppBar extends React.Component {
    constructor(props){
        super(props);
    }

    menu1(){
      return data.menu.map(menu=>{
        return(
          <div>
        {menu.title1}
          </div>
        );
      })
    }
    menu(){
      return data.menu.map(menu=>{
        return(
          <div>
        {menu.submenu1}
          </div>
        );
      })
    }
    men(){
      return data.menu.map(menu=>{
        return(
          <div>
        {menu.submenu2}
          </div>
        );
      })
    }
    menu2(){
      return data.menu.map(menu=>{
        return(
          <div>
            <Nav.Link href="#home">{menu.title}</Nav.Link>
        
          </div>
        );
      })
    }

    render(){
        return(
            <div>
            <AppBar
            style={{'backgroundColor':indigo600}}
            showMenuIconButton={false}
            >

            
            <div className="navbar" style={{'alingItems':'center', 'padding-left':'20%', 'padding-right':'20%'}}>
          <Navbar bg="light" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                
              <NavDropdown title={this.menu1()} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">{this.menu()}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">{this.men()}</NavDropdown.Item>
                </NavDropdown>
                {this.menu2()}
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
          </AppBar>
          </div>

        );
    }
}