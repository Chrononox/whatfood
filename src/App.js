import React from 'react';
import Clarifai from 'clarifai'
import './App.css';
import Input from './Components/Input/Input'
import Button from './Components/Button/Button'
import Display from './Components/Display/Display'
import Readout from './Components/Readout/Readout'


const app = new Clarifai.App({
  apiKey: '1c2b03fe40a04c859c1dc5a20ff6b097'
 });

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      input: '',
      url: '',
      foods: [],
      route: 'input',
    }
  }


  onUrlChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onButtonClick = () =>{
    //add check for empty url
    this.setState({url: this.state.input})
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", this.state.input)
    .then(response => {
      response.outputs[0].data.concepts.map((item, index) =>{
        this.state.foods.push(item)        
      })
    }).then(() => this.setState({route: 'display'}))
    .catch(err => console.log(`X.X error is ${err}`))
  }


  render(){
    return(
      <div>
        <h1>What Food?</h1>
        <p>Is that food? What food?</p>
        <div>
          <Input onUrlChange={this.onUrlChange}/>
          <Button onButtonClick={this.onButtonClick}/>
        </div>
        
        <Display input={this.state.input}/>
        
        { this.state.route === 'display' 
        ? <Readout foods={this.state.foods}/>
        :<div></div> }
        
      </div>
      
    )
  }
}

export default App;
