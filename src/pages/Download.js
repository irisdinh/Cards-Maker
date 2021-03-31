import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {Button, NavDropdown, Navbar, Container, Alert } from 'react-bootstrap'
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
        const input = document.getElementById('try')
        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL('image/png', 1)
            const pdf = new jsPDF()
            pdf.addImage(img, 'JPEG', 0, 0)
            pdf.save('download.pdf')
        })

    }
    return (
        <div className='Review'> 
            <div id='try' className='Review'>
                <Template id='try' className='reviewBox' ref={inputRef}/> 
            </div>
            <div className="buttonEnd">
                <button className="buttonStyle" onClick = {() => printpdf()}> Download as PDF</button>
                <button className="buttonStyle"> Save to Open Library</button>  
            </div>
        </div>
      
    )
}
export default Download