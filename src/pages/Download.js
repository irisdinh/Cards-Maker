import React, {useRef, useState} from 'react'
import {Button, Row, Col, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Template from './Template'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
import Firebase from '../firebase/Firebase'


function Download(){
    const inputRef = useRef(null)
    const [modal, setModal] = useState(false)
    const style = useSelector((state) => state.style)

    function printImage() {
        const input = document.getElementById('template')
        html2canvas(input).then((canvas) => {
            return canvas.toDataURL('image/png')
        })
    }

    //get API from jsPDF and html2canvas and 
    //help from https://stackoverflow.com/questions/26481645/how-to-use-html2canvas-and-jspdf-to-export-to-pdf-in-a-proper-and-simple-way
    //fix the white space in image and pdf
    //https://github.com/niklasvh/html2canvas/issues/1438
    async function saveLibrary(){
        var savedStyle = {
            ...style,
            name : '',
            receipt :'',
            wish : '',
        }
        const input = document.getElementById('template')
        await html2canvas(input,{ 
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight
        }).then(async (canvas) => {
            const current = await canvas.toDataURL('image/png', 1)
            savedStyle = {
                ...savedStyle,
                image: current, 
            }
        })
        
        Firebase.addtoSaveCards(savedStyle)
        setModal(false)
    }

    const modalName = (
        //React Bootstrap doc
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
    
    //get help from Professor Stonedahl for square card
    function printpdf() {
        const input = document.getElementById('template')
        html2canvas(input, {     
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight
        }).then((canvas) => {
            const img = canvas.toDataURL('image/png', 1)
            const pdf = new jsPDF({
                unit: "px",
                format:[500,500]
            })
            pdf.addImage(img, 'JPEG', 0, 0, 500, 500)
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
                    <button className="buttonStyle" onClick = {() => printpdf()}> Download as PDF</button>
                    <button className="buttonStyle" onClick = {() => setModal(true)}> Save to Open Library</button>
                </div>
            </Row>
            {modalName}
        </div>  
    )
}
export default Download