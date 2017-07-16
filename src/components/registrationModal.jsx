import React, { Component } from "react";
import { Modal, Row, Col, Form, FormGroup, FormControl, Button } from "react-bootstrap";

export default class RegistrationModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form action="/users/registration" method="POST">
                        <FormGroup controlId="firstName">
                            <FormControl type="text" name="firstName" placeholder="First name" required />
                        </FormGroup>

                        <FormGroup controlId="lastName">
                            <FormControl type="text" name="lastName" placeholder="Last name" required />
                        </FormGroup>

                        <FormGroup controlId="email">
                            <FormControl type="email" name="email" placeholder="E-mail address" required />
                        </FormGroup>

                        <FormGroup controlId="password">
                            <FormControl type="password" name="password" placeholder="Password" required />
                        </FormGroup>

                        <FormGroup controlId="confirmedPassword">
                            <FormControl type="password" name="confirmedPassword" placeholder="Confirm password" required />
                        </FormGroup>

                        <Button type="submit" onClick={this.props.submitForm}>Sign up</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
