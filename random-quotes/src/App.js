import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      quotes: [
        {_id:1, quote: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss"},
        {_id:2, quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
        {_id:3, quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
        {_id:3, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"}  
      ],
      ranNum: 0
    }
  }

  random() {
    var max = this.state.quotes.length - 1
    var min = 0
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
      ranNum: random
    })
    return random
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.quotes[this.state.ranNum])}
        <h1>Random Quote Picker</h1>
        <h2>{this.state.quotes[this.state.ranNum].quote}</h2>
        <h3>-{this.state.quotes[this.state.ranNum].author}</h3>
        <button onClick={this.random.bind(this)}>new Quote</button>
      </div>
    );
  }
}

export default App;
