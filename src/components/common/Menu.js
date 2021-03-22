import React from 'react';
import './style.css';
import { Nav, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, NavLink, Route, Router, useLocation} from 'react-router-dom'

const routes = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/design/New',
        label: 'Design'
    },
    {
        href: '/library',
        label: 'Library'
    },
];

export default function Menu(){
    const location = useLocation();

    return (
      <div className="menu">
        <Navbar>
          <Navbar.Brand>
              <h3  className='name'>Cards Maker</h3>
          </Navbar.Brand>
          <Nav className='bar'>
            {
                routes.map((route) => 
                <Nav.Link 
                    href={route.href}
                    active={location.pathname === route.href}>
                    <p className = "navItem">{route.label}</p>
                </Nav.Link>)
            }
          </Nav>
        </Navbar>
    
      </div>
    )
  }