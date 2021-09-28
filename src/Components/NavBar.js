import React from "react";
import ReactStars from "react-rating-stars-component";

import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

export const NavBar = ({ text, handelChange, ratingChanged }) => {
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
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />{" "}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};