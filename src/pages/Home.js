
import React from 'react'
import {Row, Col, Card, CardDeck, CardImg, Image} from 'react-bootstrap'
import './style.css';
import {Link, useHistory, NavLink, Route, Router, useLocation} from 'react-router-dom'
import Template from './Template'
import styleReducer from './styleReducer'
import Graduation from "../image/graduation.png"
import Birthday from "../image/birthday.png"
import Anniversary from "../image/anniversary.png"
import NewYear from "../image/newyear.png"

function Home(){
    const imageList = [Birthday, Graduation, Anniversary, NewYear]
    const type = ["Birthday", "Graduation", "Anniversary", "NewYear"]
    let history = useHistory();
    function handleClick(props) {
        const name = props.name
        history.push(`/design/${name}`)    
    }
    
    return (
        <div className="Home">
            <div> 
                <Row className="rowComp"> 
                    <Col> 
                        <div>
                            <h5 style={{color:'White'}}> In this web, we help making 
                                cards for your friends, families,
                                and loved ones
                            </h5>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p style={{color:'White'}}>You can design the card with</p>
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                   Font 
                                </li>
                                <li>
                                    Color
                                </li>
                                <li>
                                    Font Size
                                </li>
                                <li>
                                    Background Color
                                </li>
                                <li>
                                    Your wishes
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="deck">
                    <Col>
                    <h5 style={{color:'White'}}> Choose your occassion</h5>
                    <CardDeck className="deck">
                        {type.map((name) => 
                            <Card className="eachCard">
                            <Image className="imageCard" src={imageList[type.indexOf(name)]} onClick={()=> handleClick({name})}/>
                            <Card.Body className="cardBody">
                                <Card.Title>
                                    <p> {name} </p>
                                </Card.Title>
                            </Card.Body>
                            </Card>
                            
                        )}    
                    </CardDeck>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home