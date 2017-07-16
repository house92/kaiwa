import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";
import axios from "axios";
import * as actionCreators from "../actions/actionCreators";
import ModalFormSubmitContainer from "./modalFormSubmitContainer";
import RegistrationModal from "./registrationModal";

class Layout extends Component {
    render() {
        let userNav;
        if (Object.keys(this.props.user).length) {
            userNav = (
                <Nav pullRight>
                    <NavItem eventKey={1}>{this.props.user.firstName}</NavItem>
                    <NavItem eventKey={2} href="/users/logout" onClick={e => window.location = e.target.href}>Log out</NavItem>
                </Nav>
            );
        } else {
            userNav = (
                <Nav pullRight>
                    <NavItem eventKey={1} data-modal="login" onClick={() => this.props.openModal("login")}>Log in</NavItem>
                    <NavItem eventKey={2} data-modal="registration" onClick={() => this.props.openModal("registration")}>Sign up</NavItem>
                </Nav>
            );
        }
        return (
            <div className="wrap">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"><img src="/images/navbar-logo.png" /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}><Link to="/shows">Shows</Link></NavItem>
                            <NavItem eventKey={2} href="/">Community</NavItem>
                        </Nav>
                        {userNav}
                    </Navbar.Collapse>
                </Navbar>

                <ModalFormSubmitContainer {...this.props} childComponent="login" />
                <ModalFormSubmitContainer {...this.props} childComponent="registration" />

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
        show: state.show,
        modal: state.modal,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
