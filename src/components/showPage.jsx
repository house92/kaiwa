import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import axios from "axios";

export default class ShowPage extends Component {
    componentDidMount() {
        if (Object.keys(this.props.show).length) return;
        const showId = window.location.pathname.split("/")[2];
        axios.get(`/shows/${showId}.json`)
            .then(res => {
                this.props.selectShow(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const show = this.props.show;
        if (show && Object.keys(show).length) {
            return (
                <Grid>
                    <div className="show-page">
                        <Row>
                            <Col md={6}>
                                <h1>{show.name}</h1>
                            </Col>
                        </Row>
                        <Row className="content">
                            <Col md={4}>
                                <img src={`/images/${show.image}`} />
                            </Col>
                            <Col md={8}>
                                <div className="description">{show.description}</div>
                                <div className="star-ratings-css">
                                    <div className="star-ratings-css-top" style={{width: "90%"}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="star-ratings-css-bottom">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <Col xs={12} sm={10} smOffset={1} md={4} mdOffset={1}>
                                        <Button className="add-to-list"><Glyphicon glyph="plus-sign" />Add to list</Button>
                                    </Col>
                                    <Col xs={12} sm={10} smOffset={1} md={4} mdOffset={2} >
                                        <Button className="suggest-to-friend"><Glyphicon glyph="send" />Suggest to friend</Button>
                                    </Col>
                                </div>
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
