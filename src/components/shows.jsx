import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Layout from "./layout";

export default class Shows extends Component {
    componentDidMount() {
        axios.get("/api/shows.json")
            .then(res => {
                console.log(res.data);
                this.props.fetchShows(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

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
