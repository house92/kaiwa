import React, { Component } from "react";
import Carousel from "nuka-carousel";
import createReactClass from "create-react-class";
import ShowContainer from "./showContainer";

export default class GenreCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
            slidesToScroll: 4
        };
        this.setSlidesToScroll = this.setSlidesToScroll.bind(this);
    }

    setSlidesToScroll(index) {
        const numShows = this.props.genre.shows.length;
        const numDisplays = Math.ceil(numShows / this.state.slidesToShow);
        if (index / this.state.slidesToShow == numDisplays - 1) {
            this.setState({ slidesToScroll: numShows % this.state.slidesToShow });
        } else {
            this.setState({ slidesToScroll: this.state.slidesToShow });
        }
    }

    render() {
        const genre = this.props.genre;
        const shows = genre.shows.map((show, i) => {
            return <ShowContainer show={show} key={`show${i}`} />;
        });

        const carouselDecorators = [
            {
                component: createReactClass({
                    render() {
                        return (
                            <div style={{height: "100%", background: "rgba(250, 250, 250, 0.1)"}} onClick={this.props.previousSlide}>
                                <button style={{border: "none", background: "none", fontSize: "24px", marginTop: "calc(15rem + 10.5%)"}}>❮</button>
                            </div>
                        );
                    }
                }),
                position: "CenterLeft",
                style: {
                    top: "11.8rem",
                    left: 0,
                    height: "calc(30rem + 21%)"
                }
            },
            {
                component: createReactClass({
                    render() {
                        return (
                            <div style={{height: "100%", background: "rgba(250, 250, 250, 0.1)"}} onClick={this.props.nextSlide}>
                                <button style={{border: "none", background: "none", fontSize: "24px", marginTop: "calc(15rem + 10.5%)"}}>❯</button>
                            </div>
                        );
                    }
                }),
                position: "CenterRight",
                style: {
                    top: "11.8rem",
                    right: 0,
                    height: "calc(30rem + 21%)"
                }
            },
            {
                component: React.createClass({
                    render() {
                        var self = this;
                        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
                        return (
                            <ul style={self.getListStyles()}>
                                {
                                    indexes.map(function(index) {
                                        return (
                                            <li style={self.getListItemStyles()} key={index}>
                                                <button
                                                    style={self.getButtonStyles(self.props.currentSlide === index)}
                                                    onClick={self.props.goToSlide.bind(null, index)}>
                                                    &bull;
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    },
                    getIndexes(count, inc) {
                        var arr = [];
                        for (var i = 0; i < count; i += inc) {
                            arr.push(i);
                        }
                        return arr;
                    },
                    getListStyles() {
                        return {
                            position: 'relative',
                            margin: 0,
                            top: -10,
                            padding: 0
                        }
                    },
                    getListItemStyles() {
                        return {
                            listStyleType: 'none',
                            display: 'inline-block'
                        }
                    },
                    getButtonStyles(active) {
                        return {
                            border: 0,
                            background: 'transparent',
                            color: 'black',
                            cursor: 'pointer',
                            padding: 10,
                            outline: 0,
                            fontSize: 24,
                            opacity: active ? 1 : 0.5
                        }
                    }
                }),
                position: 'BottomCenter'
            }
        ];

        return (
            <div className="genre">
                <h2>{genre.name}</h2>
                <Carousel
                    slidesToShow={this.state.slidesToShow}
                    slidesToScroll={this.state.slidesToScroll}
                    cellSpacing={5}
                    wrapAround={true}
                    afterSlide={this.setSlidesToScroll}
                    decorators={carouselDecorators}
                >
                    {shows}
                </Carousel>
            </div>
        );
    }
}
