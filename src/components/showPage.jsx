import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class ShowPage extends Component {
    componentWillMount() {
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
        const showId = this.props.location.pathname.split("/")[2];
        const show = this.props.shows.find(show => show.id == showId);
        if (show) {
            return (
                <Grid>
                    <div className="show-page">
                        <Row>
                            <Col md={6}>
                                <h1>{show.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <img src={`/images/${show.image}`} />
                            </Col>
                            <Col md={6}>
                                <div className="description">{show.description}</div>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            );
        } else {
            return null;
        }
    }
}
