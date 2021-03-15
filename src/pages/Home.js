
import React from 'react'
import {Row, Col, Card, CardDeck, CardImg, Image} from 'react-bootstrap'
import Cat from "../image/IMG_3998.jpg"
import './style.css';
function Home(){
    const type = ["Birthday", "Graduation", "Anniversary", "New Year"]
    return (
        <div className="Home">
            <div> 
                <Row className="rowComp"> 
                    <Col> 
                        <div>
                            <h5> In this web, we help making 
                                cards for your friends, families,
                                and loved ones
                            </h5>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>You can design the card with</p>
                            <ul>
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
                                    Your wishes
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="deck">
                    <Col>
                    <h5> Choose your occassion</h5>
                    <CardDeck className="deck">
                        {type.map((name) => 
                            <Card className="eachCard">
                            <Image className="imageCard" src={Cat}/>
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