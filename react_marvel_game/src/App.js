import React, { Component } from "react";
import CharacterCard from "./components/MovieCards";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import movies from "./marvelmovies.json";
import "./App.css";

// function to shuffle array of images
function shuffleImage(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
class App extends Component {
  state = {
    movies,
    score: 0,
    topScore: 0,
    clickedMovies: []
  };

  render() {
    return (
      <Wrapper>
        <Title> Marvel Movie Titles </Title>
        {this.state.movies.map(movie => (
          <CharacterCard
            id={movie.id}
            key={movie.id}
            name={movie.name}
            image={movie.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
