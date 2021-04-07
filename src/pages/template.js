import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

export default function Template(props) {
    const style = useSelector((state) => state.style);
    const type = props.type
    
    return (
        <div id='template'
            style={{
                backgroundColor: style.background,
                color: style.color,
                fontFamily: style.font, 
                fontStyle: style.fontstyle,
            }}>
                <p className='from' style={{fontSize: style.size + 'px'}}> From {style.name}</p>
                <p> </p> 
                <p style={{fontSize: style.size + 'px'}}> To {style.receipt}</p>
                <p style={{fontSize: style.size * 1.5 + 'px'}}> Happy {style.id}</p>
                
                <p> </p>
                <p style={{fontSize: style.size + 'px'}}> {style.wish} </p>
                    
        </div>
    )
}