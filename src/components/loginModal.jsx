import React, { Component } from "react";
import { Modal, Row, Col, Form, FormGroup, FormControl, Button } from "react-bootstrap";

export default class LoginModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form action="/users/login" method="POST">
                        <FormGroup controlId="email">
                            <FormControl type="email" name="email" placeholder="E-mail address" required />
                        </FormGroup>

                        <FormGroup controlId="password">
                            <FormControl type="password" name="password" placeholder="Password" required />
                        </FormGroup>

                        <Button type="submit">Log in</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
