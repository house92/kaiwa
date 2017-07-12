import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Layout from "./layout";
import GenreCarousel from "./genreCarousel";

export default class Shows extends Component {
    componentWillMount() {
        axios.get("/api/genres.json")
            .then(res => {
                this.props.fetchGenres(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const genres = this.props.genres.map((genre, i) => {
            return <GenreCarousel genre={genre} key={`genreCarousel${i}`} selectShow={this.props.selectShow} />;
        });
        return (
            <Grid className="shows">
                <Row>
                    <Col md={6}>
                        <h1>Shows</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="shows-grid">
                        {genres}
                    </div>
                </Row>
            </Grid>
        );
    }
}
