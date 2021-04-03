import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {Button, Row, Col, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
import {Link, NavLink, Route} from 'react-router-dom'
import Template from './Template'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


function Download(){
    const inputRef = useRef(null)
    function printimage() {
        const input = document.getElementById('review')
        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL('image/png')
        })
    }
    
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
                    <button className="buttonStyle"> Save to Open Library</button>
                </div>
            </Row>
        </div>
          
    )
}
export default Download