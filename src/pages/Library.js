import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Card, Nav, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, useHistory, NavLink, Route} from 'react-router-dom'
import Firebase from '../firebase/Firebase'

function Library(){
    const [savedCards, setSavedCards] = useState({});
    
    useEffect(() => {
        Firebase.getSavedCards().then((data) => setSavedCards(data))
    }, []);
    const listSavedCard = Object.keys(savedCards)
    let history = useHistory()

    function handleClick(name){
        console.log(name)
        /*history.push(`/design/one`)*/
        history.push(`/design/${name}`)
    }

    return (
        <div>
            <h3> Open Library</h3>
            <div  className='cardBox'>
                {listSavedCard.map(name => 
                    <Card className='car' onClick={()=> handleClick(name)}> 
                        <Card.Title>{savedCards[name].id}</Card.Title>
                        <Card.Text> 
                            <p> {savedCards[name].font} </p>
                            <p> {savedCards[name].color} </p>
                        </Card.Text>
                    </Card>
                )}
                
            </div>
        </div>
    )
}
export default Library