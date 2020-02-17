import React from 'react'


//setup printout in function then return the function?

const Readout = ({ foods }) =>{



    return(
        <ul className="center">
          {foods.map(food => <li key={food.value}>{food.name} ~{food.value.toFixed(4)}%</li>)}
        </ul>
    )
}

export default Readout;
