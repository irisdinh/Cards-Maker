
import React, {Component} from 'react'
import { Nav, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './style.css'

export default function Template(props) {
    const style = useSelector((state) => state.style);
    const type = props.type
    
    return (
        <div className = 'template'
            style={{
                backgroundColor: style.background,
                color: style.color,
                fontSize: style.size + 'px',
                fontFamily: style.font
            }}>
                <p> </p>
                <p style={{fontSize: style.size + 'px'}}> From {style.name}</p>
                <h4> Happy Birthday</h4>
                <p> </p> 
                <p style={{fontSize: style.size + 'px'}}> To {style.receipt}</p>
                <p> </p>
                <p style={{fontSize: style.size + 'px'}}> {style.word} </p>
                    
            </div>
    )
}