import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import LoginModal from "./loginModal";
import RegistrationModal from "./registrationModal";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showRegistrationModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e) {
        if (e.target.dataset.modal == "login") {
            this.setState({ showLoginModal: true });
        } else if (e.target.dataset.modal == "registration") {
            this.setState({ showRegistrationModal: true });
        }
    }

    closeModal() {
        this.setState({ showLoginModal: false, showRegistrationModal: false });
    }

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
                            <NavItem eventKey={1} data-modal="login" onClick={this.openModal}>Log in</NavItem>
                            <NavItem eventKey={2} data-modal="registration" onClick={this.openModal}>Sign up</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <LoginModal show={this.state.showLoginModal} hide={this.closeModal} />
                <RegistrationModal show={this.state.showRegistrationModal} hide={this.closeModal} />

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
