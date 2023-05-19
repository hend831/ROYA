import React from "react";
import "./cards.css";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <div className="imicd d-flex justify-content-center m-3 mb-1">
          <img className="imgicon p-2 mx-4 my-2" src={props.icon} />
        </div>
        <Card.Body>
          <Card.Title> {props.Title} </Card.Title>
          <Card.Text>{props.paragraph}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
