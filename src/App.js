import React from 'react';
import './App.css';
import Input from './Components/Input/Input'
import Button from './Components/Button/Button'
import Display from './Components/Display/Display'
import Clarifai from 'clarifai'; 

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      url: '',
    }
  }

  onUrlChange = (event) =>{
    console.log(event.target.value);
    this.setState({url: event.target.value})
  }

  render(){
    return(
      <div>
        <h1>What Food?</h1>
        <p>Is that food? What food?</p>
        <div>
          <Input onUrlChange={this.onUrlChange}/>
          <Button/>
        </div>
        
        <Display url={this.state.url}/>
        {/* <Readout/> */}
      </div>
      
    )
  }
}

export default App;
