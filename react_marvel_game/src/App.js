import React, { Component } from "react";
import CharacterCard from "./components/MovieCards";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import movies from "./marvelmovies.json.json";
import "./App.css";

class App extends Component {
  state = {
    movies
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
