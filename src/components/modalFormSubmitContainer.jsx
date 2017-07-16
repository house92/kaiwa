import React, { Component } from "react";
import axios from "axios";
import serialize from "form-serialize";
import RegistrationModal from "./registrationModal";
import LoginModal from "./loginModal";

export default class ModalFormSubmitContainer extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        const form = e.target.closest("form");
        axios.post(form.action, serialize(form))
            .then(res => {

            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        switch (this.props.childComponent) {
            case "registration":
                return (
                    <RegistrationModal show={this.props.modal == "registration"} hide={() => this.props.closeModal("registration")} />
                );
                break;
            case "login":
                return (
                    <LoginModal show={this.props.modal == "login"} hide={() => this.props.closeModal("login")} />
                );
                break;
            default:

        }
    }
}
