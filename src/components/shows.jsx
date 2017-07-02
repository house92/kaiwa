import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Layout from "./layout";

export default class Shows extends Component {
    render() {
        return (
            <Grid className="shows">
                <Row>
                    <Col md={6}>
                        <h1>Shows</h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
