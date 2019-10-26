import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title">
      {" "}
      <h1>Marvel Studio Edition </h1>
      <h3>Click a Marvel movie but don't pick the same one twice!</h3>
      <h4>
        Score: {props.score} | Top Score: {props.topScore}
      </h4>
    </div>
  );
}

export default Title;
