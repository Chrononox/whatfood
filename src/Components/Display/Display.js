import React from 'react'
import './Display.css';

const Display = ({ input }) =>{
        if(input === ''){
            return(
                <div>
                    <img alt={'placeholder image'} src={'https://images.unsplash.com/photo-1553709225-9eb59ce4d215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}/>
                </div>
            )
        }else{
            return(
                <div>
                    <img alt={'food'} src={input}/>
                </div>
            )
        }
}

export default Display;