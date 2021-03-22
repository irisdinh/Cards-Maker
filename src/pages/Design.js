import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Nav, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, useParams, NavLink, Route} from 'react-router-dom'
import {Button, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import styleReducer from './styleReducer'
import Template from './template'

const fontArray = ["Arial", "Times"]
const fontSizeArray = [11,12,13]
const colorArray = ["Black", "Blue", "Red"]
const backgroundArray = ["Black", "Blue", "White"]


function Design(){
    const [data, dispatch] = useState()
    const type = useParams().name

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
                    <Template> 

                    </Template>
                            
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
