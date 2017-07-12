import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

class Layout extends Component {
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

                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.any.isRequired
};

function mapStateToProps(state) {
    return {
        shows: state.shows,
        genres: state.genres,
        show: state.show
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
