import React from 'react'


//setup printout in function then return the function?

const Readout = ({ foods }) =>{

    return(
        <div>
          {foods.map(food =>(<p>{food}</p>))}  
        </div>
    )
}

export default Readout;
