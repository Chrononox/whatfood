import React from 'react'

const Button = ({ onButtonClick }) =>{
    return (
        <div>
            <button onClick={onButtonClick}>Food?</button>
        </div>
    )
}

export default Button;