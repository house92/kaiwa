import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default class Layout extends Component {
  render() {
    return (
      <div className="wrap">
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato|Philosopher" rel="stylesheet" />
        </Helmet>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src="/images/navbar-logo.png" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/shows" onClick={(e) => location = e.target.href}>Shows</NavItem>
              <NavItem eventKey={2} href="/">Community</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/">Log in</NavItem>
              <NavItem eventKey={2} href="/">Sign up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.any.isRequired
};
