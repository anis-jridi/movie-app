import React from "react";

const Description = ({ match, movie }) => {
  let item = movie.find((el) => el.id == match.params.id);
  return (
    <div>
      <h1> {item.name}</h1>
      <h3>{item.trailer}</h3>
      <h3> {item.description}</h3>
    </div>
  );
};

export default Description;
