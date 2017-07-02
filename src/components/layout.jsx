import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class Layout extends Component {
  render() {
    return (
      <div className="wrap">
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
