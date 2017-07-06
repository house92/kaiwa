import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Carousel from "nuka-carousel";
import Layout from "./layout";
import ShowContainer from "./showContainer";

export default class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
            slidesToScroll: 4
        };
        this.setSlidesToScroll = this.setSlidesToScroll.bind(this);
    }

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

    setSlidesToScroll(index) {
        const numShows = this.props.shows.length;
        const numDisplays = Math.ceil(numShows / this.state.slidesToShow);
        if (index / this.state.slidesToShow == numDisplays - 1) {
            this.setState({ slidesToScroll: numShows % this.state.slidesToShow });
        } else {
            this.setState({ slidesToScroll: this.state.slidesToShow });
        }
    }

    render() {
        const shows = this.props.shows.map((show, i) => {
            return <ShowContainer show={show} key={`show${i}`} />;
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
                        <Carousel
                            slidesToShow={this.state.slidesToShow}
                            slidesToScroll={this.state.slidesToScroll}
                            cellSpacing={5}
                            wrapAround={true}
                            afterSlide={this.setSlidesToScroll}
                        >
                            {shows}
                        </Carousel>
                    </div>
                </Row>
            </Grid>
        );
    }
}
