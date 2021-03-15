import React from 'react'
import ReactDOM from 'react-dom'
import {Button, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, NavLink, Route} from 'react-router-dom'

function Download(){
    return (
        <div> 
            <Container className = "review">
                <p> From Iris</p>
                <h5> Happy Birthday</h5>
                <p> </p>
                <p> To Claire</p>
            </Container>
            <div className="buttonEnd">
                <button className="buttonStyle"> Download as PDF</button>
                <button className="buttonStyle"> Save to Open Library</button>  
            </div>
            
        </div>
      
    )
}
export default Download