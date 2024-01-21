import React from "react";
import Image from "../Components/Image";
import Name from "../Components/Name";
import Desc from "../Components/Desc";
import Price from "../Components/Price";
import { Button, Card } from "react-bootstrap";
import "../CSS/Card.css";
const Alldata = () => {
  return (
    <div className="myCards">
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Desc />
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Alldata;
