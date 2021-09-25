import { Movie } from "@mui/icons-material";
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Movies = ({ list }) => {
  return (
    <div className="mymovie">
      {list.map((el) => (
        <Card
          style={{
            width: "300px",
            hegiht: "400px",
            backgroundColor: "black",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        >
          <Card.Title>
            <Rating rating={el.rating} />
          </Card.Title>
          <Card.Body>
            <img className="image" src={el.image} alt="" />
            <Card.Text style={{ color: "white", fontSize: "30px" }}>
              {el.name}
            </Card.Text>
            <Card.Text style={{ color: "white", fontSize: "20px" }}>
              {el.date}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Movies;
