import React from "react";
import "./style.css";

const MovieCards = props => (
  <div className="card col-md-3" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MovieCards;
