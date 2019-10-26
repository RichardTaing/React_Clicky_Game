import React, { Component } from "react";
import MovieCards from "./components/MovieCards";
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

  clickedImage = id => {
    let clickedMovies = this.state.clickedMovies;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedMovies.indexOf(id) === -1) {
      clickedMovies.push(id);
      this.handleIncrement();
      this.movieShuffle();
    } else if (this.state.score === 12) {
      alert("You win!");
      this.setState({
        score: 0,
        clickedMovies: []
      });
    } else {
      this.setState({
        score: 0,
        clickedMovies: []
      });
      alert("Sorry you have picked the same movie twice, try again!");
    }

    if (score > topScore) {
      topScore = score;
      this.setState({ topScore });
    }
  };

  // function to increment 1 point to score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  movieShuffle = () => {
    this.setState({ movies: shuffleImage(movies) });
  };

  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          message={this.state.message}
          topScore={this.state.topScore}
        />
        <div class="container">
          <div class="row">
            {this.state.movies.map(movie => (
              <MovieCards
                id={movie.id}
                key={movie.id}
                name={movie.name}
                image={movie.image}
                clickedImage={this.clickedImage}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
