import React from 'react'

const Input =({ onUrlChange })=>{
    return(
        <div>
            <input placeholder="enter url" onChange={onUrlChange}></input>
        </div>
    )
}

export default Input;