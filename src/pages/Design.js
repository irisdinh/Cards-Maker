import React from 'react'
import ReactDOM from 'react-dom'
import { Nav, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, NavLink, Route} from 'react-router-dom'
import {Button, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

const fontArray = ["Arial", "Times"]
const fontSizeArray = [11,12,13]
const colorArray = ["Black", "Blue", "Red"]
const backgroundArray = ["Black", "Blue", "White"]

function Design(){
    return (
        <div> 
            <Row> 
                <Col> 
                    <p>
                        Font
                    </p>
                    <NavDropdown className="navStyle">
                        {fontArray.map(name =>
                            <NavDropdown.Item>
                            {name}
                            </NavDropdown.Item>
                        )
                        }
                    </NavDropdown>
                    <p>
                        Font Size
                    </p>
                    <NavDropdown className="navStyle">
                        {fontSizeArray.map(name =>
                            <NavDropdown.Item>
                            {name}
                            </NavDropdown.Item>
                        )
                        }
                    </NavDropdown>
                    <p>
                        Color
                    </p>
                    <NavDropdown className="navStyle">
                        {colorArray.map(name =>
                            <NavDropdown.Item>
                            {name}
                            </NavDropdown.Item>
                        )
                        }
                    </NavDropdown>
                    <p>
                        Background Color
                    </p>
                    <NavDropdown className="navStyle">
                        {backgroundArray.map(name =>
                            <NavDropdown.Item>
                            {name}
                            </NavDropdown.Item>
                        )
                        }
                    </NavDropdown>
                </Col>
                <Col> 
                    <Container className = "review">
            
                        <p> From Iris</p>
                        <h5> Happy Birthday</h5>
                        <p> </p>
                        <p> To Claire</p>
                        
                    </Container>
                            
                </Col>
            </Row>
            <Row>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend >
                        <InputGroup.Text>
                        Your name
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl> 
                    </FormControl>
                </InputGroup>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                        Your receipt
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl> 
                    </FormControl>
                </InputGroup>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                        Your word
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl> 
                    </FormControl>
                </InputGroup>
            </Row>
            <Row className="buttonEnd"> 
                    <Link to={"/download"}>
                    <button className="buttonStyle" href="/download"> Finish</button>
                    </Link>

            </Row>
        </div>
    )
}
export default Design
