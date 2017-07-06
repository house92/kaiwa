import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class ShowCard extends Component {
    render() {
        const show = this.props.show;
        return (
            <div className="show-card">
                <Row>
                    <Col md={4}>
                        <img src={`/images/${show.image}`} />
                    </Col>
                    <Col md={8}>
                        <div>{show.name}</div>
                        <p>{show.description}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
