import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import {Button, Row, Col, Modal, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, NavLink, Route} from 'react-router-dom'
import Template from './Template'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
import Firebase from '../firebase/Firebase'

function Download(props){
    const inputRef = useRef(null)
    const [modal, setModal] = useState(false)
    const style = useSelector((state) => state.style)

    function printimage() {
        const input = document.getElementById('review')
        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL('image/png')
        })
    }

    function saveLibrary(){
        const savedStyle = {
            ...style,
            name : '',
            receipt :'',
            wish : ''
        }
        Firebase.addtoSaveCards(savedStyle)
        setModal(false)
    }

    const modalName = (
        <Modal show={modal} onHide={() => setModal(false)} centered>
        <Modal.Header closeButton>
            <Modal.Title> Ask for Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p> If you want to contribute your card to open library</p>
            <p> Our website will remove all the personal information that you have in the card</p>
            <p> Do you want to continue? </p>
            <Modal.Footer>
                <Button variant='primary' onClick = {() => setModal(false)}> Close </Button> 
                <Button variant='primary' onClick = {() => saveLibrary()}>Contribute</Button>
            </Modal.Footer>
        </Modal.Body>
        </Modal> 
    )

    function printpdf() {
        const input = document.getElementById('template')
        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL('image/png', 1)
            const pdf = new jsPDF({
                unit: "in",
                format:[5,5]
            })
            pdf.addImage(img, 'JPEG', 0, 0, 5, 5)
            pdf.save('download.pdf')
        })

    }
    return (
        <div>
            <Row>
                <Col className='reviewSide'> 
                    <div  className='reviewBox'>
                        <div id='try'>
                            <Template id='try' className='reviewBox' ref={inputRef}/> 
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='reviewSide'> 
                <div className="buttonEnd">
                    <Link to={"/design"}>
                        <button className="buttonStyle" href="/design"> Go Back</button>
                    </Link> 
                    <button className="buttonStyle" onClick = {() => printpdf()}> Download as PDF</button>
                    <button className="buttonStyle" onClick = {() => setModal(true)}> Save to Open Library</button>
                </div>
            </Row>
            {modalName}
        </div>
          
    )
}
export default Download