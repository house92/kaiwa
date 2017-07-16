import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import ModalFormSubmitContainer from "./modalFormSubmitContainer";
import RegistrationModal from "./registrationModal";

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
                            <NavItem eventKey={1} data-modal="login" onClick={() => this.props.openModal("login")}>Log in</NavItem>
                            <NavItem eventKey={2} data-modal="registration" onClick={() => this.props.openModal("registration")}>Sign up</NavItem>
                        </Nav>
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
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
