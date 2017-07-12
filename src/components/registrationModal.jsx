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
                    <Form action="/users/register" method="POST">
                        <FormGroup controlId="firstName">
                            <FormControl type="text" name="user[firstName]" placeholder="First name" required />
                        </FormGroup>

                        <FormGroup controlId="lastName">
                            <FormControl type="text" name="user[lastName]" placeholder="Last name" required />
                        </FormGroup>

                        <FormGroup controlId="email">
                            <FormControl type="email" name="user[email]" placeholder="E-mail address" required />
                        </FormGroup>

                        <FormGroup controlId="password">
                            <FormControl type="password" name="user[password]" placeholder="Password" required />
                        </FormGroup>

                        <FormGroup controlId="confirmed_password">
                            <FormControl type="password" name="user[confirmed_password]" placeholder="Confirm password" required />
                        </FormGroup>

                        <Button type="submit">Sign up</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
