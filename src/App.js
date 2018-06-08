import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

// COMPONENTS
import Recipes from './components/Recipes.js'
import Button from './components/Button.js';
import { getRandomRecipe } from './services/foodService';

require('dotenv').config();

class App extends Component {

  state = {
    recipe : null,
    buttonText: `Let's get cookin'!`
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.freeiconspng.com/uploads/pizza-png-15.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to random recipe generator!</h1>
        </header>
        {/* <br /> */}
        <Recipes recipe={this.state.recipe} />
        <Button onClick={() => {this.buttonClickHandler(); this.changeButtonText()}}>
          {this.state.buttonText}
        </Button>
      </div>
    );
  }

  buttonClickHandler() {
    getRandomRecipe().then(recipe => {
      this.setState({
          recipe: recipe
      })
    })
  }

  changeButtonText() {
    this.setState({
      buttonText: 'Try another one!'
    })
  }
}

export default App;
