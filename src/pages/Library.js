import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Firebase from '../firebase/Firebase'

function Library(){
    const [savedCards, setSavedCards] = useState({});
    
    useEffect(() => {
        Firebase.getSavedCards().then((data) => setSavedCards(data))
    }, []);
    const listSavedCard = Object.keys(savedCards)
    let history = useHistory()

    function handleClick(name){
        history.push(`/design/${name}`)
    }

    return (
        <div className='libraryComp'>
            <h3 style={{color: 'White'}}> Open Library</h3>
            <div className='cardBox'>
                {listSavedCard.map(name => 
                    <Card className='card' onClick={()=> handleClick(name)}> 
                        <img src={savedCards[name].image}/>
                        <Card.Title> Theme: {savedCards[name].id}</Card.Title>
                        <Card.Text> 
                            <p> Font: {savedCards[name].font} </p>                            
                            <p> Font Color: {savedCards[name].color} </p>
                            <p> Background Color: {savedCards[name].background} </p>
                        </Card.Text>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Library