import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      abandoned: [
        { _id: 1234, name: "Pikachu", imageUrl: "https://goo.gl/RSMTxH" },
        { _id: 5678, name: "Geodude", imageUrl: "https://goo.gl/mG1oPY" },
        { _id: 9123, name: "Exeggutor", imageUrl: "https://goo.gl/Jkfre1" },
        { _id: 4567, name: "Pikipek", imageUrl: "https://goo.gl/CD59CV" },
        { _id: 8912, name: "Minior", imageUrl: "https://goo.gl/P6rE1u" },
        { _id: 3456, name: "Mudbray", imageUrl: "https://goo.gl/dBBz8s" },
        { _id: 7891, name: "Muk", imageUrl: "https://goo.gl/49dND6" },
        { _id: 2345, name: "Guzzlord", imageUrl: "https://goo.gl/f4Pb6k" }
      ],
      adopted: []
    }
  }

  adoptPokemon(pokemon) {
    console.log(pokemon)
    this.setState({
      abandoned: this.state.abandoned.filter((p) => {
        return p._id !== pokemon._id
      }),
      adopted: [...this.state.adopted, pokemon]
    }) 
  }

  abandonPokemon(pokemon) {
    console.log(pokemon)
    this.setState({
      adopted: this.state.adopted.filter((p) => {
        return p._id !== pokemon._id
      }),
      abandoned: [...this.state.abandoned, pokemon]
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="abandoned">
        <h1>Abandoned Pokemon: {this.state.abandoned.length}</h1>
        <h2>Click To Adopt</h2>
          {this.state.abandoned.map((p) => {
            return (
              <div key={p._id}>
                <h2>{p.name}</h2>
                <img onClick={() => { this.adoptPokemon(p) }} src={p.imageUrl} alt={p.name} />
              </div>
            )
          })}
        </div>
        <div className="adopted">
          <h1>Adopted Pokemon: {this.state.adopted.length}</h1>
          <h2>Click To Abandon</h2>
          {this.state.adopted.map((p) => {
            return (
              <div key={p._id}>
                <h2>{p.name}</h2>
                <img onClick={() => { this.abandonPokemon(p) }} src={p.imageUrl} alt={p.name} />
              </div>
            )
          })}
        </div>        
      </div>
    );
  }
}

export default App;
