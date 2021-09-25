import React from "react";
import Rating from "./Rating";

import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

export const NavBar = ({ text, handelChange, rating, handelRating }) => {
  return (
    <div className="navBar">
      <Navbar expand="lg">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#"
              disabled
              style={{
                marginLeft: "100px",
                fontSize: "50px",
                fontFamily: "Comic Sans MS, Comic Sans, cursive",
                color: "Yellow",
              }}
            >
              My Movie App{" "}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              value={text}
              onChange={handelChange}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Rating rating={rating} handelRating={handelRating} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
