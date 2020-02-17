import React from 'react'
import './Display.css';

const Display = ({ url }) =>{
    return(
        <div>
            <img src={url}/>
        </div>
    )
}

export default Display;