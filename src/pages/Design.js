import React, { useState, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Nav, NavDropdown, Navbar, Container, Alert, Form } from 'react-bootstrap'
import {Link, useParams, NavLink, Route} from 'react-router-dom'
import {Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import styleReducer from './styleReducer'
import Template from './Template'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch} from 'react-redux'

const fontArray = ["Arial", "Times New Roman", "Georgia", "Verdana", "Lucida Console"]
const fontSizeArray = [14,15,16,17,18]
const colorArray = ["Black", "Blue", "Red", "Green", "Yellow", "White"]
const backgroundArray = ["Black", "Blue", "White", "Green", "Red", "Yellow"]
const fontStyleArray= ["Normal", "Italic", "Oblique"]

function SetAction(key) {
    const action = {
        type:'set',
        key
    }
    
    return action
    
}
function UpdateAction(key, value) {
    const action = {
        type:'update',
        key,
        value
    }
    return action
    
}

function Design(){
    const styleTemplate = useSelector((state) => state.style)
    const dispatch = useDispatch()
    const nameTemp = useParams().name

    useEffect(() =>{
        if (nameTemp != 'New') {
            dispatch(SetAction(nameTemp))
        }
    }, [])

    return (
        <div> 
            <Row> 
                <Col > 
                    <div className='selectStyle'>
                    <Form.Group controlId = 'font'>
                        <Form.Label style={{color:'White'}}> Font </Form.Label>
                        <Form.Control as='select' 
                            //value={font}
                            onChange={(e) => dispatch(UpdateAction('font', e.target.value))}> 
                            {fontArray.map(name =>
                                <option>{name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId = 'fontsize'>
                        <Form.Label style={{color:'White'}}> Font Size</Form.Label>
                        <Form.Control as='select'
                            onChange={(e) => dispatch(UpdateAction('size', e.target.value))}> 
                            {fontSizeArray.map(name =>
                                <option>{name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId = 'fontstyle'>
                        <Form.Label style={{color:'White'}}> Font Style</Form.Label>
                        <Form.Control as='select'
                            onChange={(e) => dispatch(UpdateAction('fontstyle', e.target.value))}> 
                            {fontStyleArray.map(name =>
                                <option>{name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId = 'color'>
                        <Form.Label style={{color:'White'}}> Color </Form.Label>
                        <Form.Control as='select'
                            onChange={(e) => dispatch(UpdateAction('color', e.target.value))}> 
                            {colorArray.map(name =>
                                <option>{name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId = 'background'>
                        <Form.Label style={{color:'White'}}> Background Color </Form.Label>
                        <Form.Control as='select'
                            onChange={(e) => dispatch(UpdateAction('background', e.target.value))}> 
                            {backgroundArray.map(name =>
                                <option>{name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    </div>
                </Col>
                <Col> 
                    <div className='template'> 
                        <Template id='review' 
                            type={nameTemp}> 
                        </Template>
                    </div>       
                </Col>
            </Row>
            <Row>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend >
                        <InputGroup.Text>
                        Your name
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(e) => dispatch(UpdateAction('name', e.target.value))}> 
                    </FormControl>
                </InputGroup>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                        Your receipt
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(e) => dispatch(UpdateAction('receipt', e.target.value))}> 
                    </FormControl>
                </InputGroup>
                <InputGroup className="formStyle">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                        Your word
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(e) => dispatch(UpdateAction('word', e.target.value))}> 
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
