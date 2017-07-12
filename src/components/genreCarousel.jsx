import React, { Component } from "react";
import Carousel from "nuka-carousel";
import createReactClass from "create-react-class";
import ShowContainer from "./showContainer";

export default class GenreCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
            slidesToScroll: 4,
            currentSlide: 0
        };
        this.setSlidesToScroll = this.setSlidesToScroll.bind(this);
        this.setSlidesAccordingToScreenSize = this.setSlidesAccordingToScreenSize.bind(this);
        this.handleSlide = this.handleSlide.bind(this);
    }

    setSlidesToScroll(index) {
        this.setState({currentSlide: index});
    }

    setSlidesAccordingToScreenSize() {
        if (window.innerWidth > 1200) {
            this.setState({slidesToShow: 5, slidesToScroll: 5})
        } else if (window.innerWidth > 992) {
            this.setState({slidesToShow: 4, slidesToScroll: 4})
        } else if (window.innerWidth > 768) {
            this.setState({slidesToShow: 3, slidesToScroll: 3})
        }
    }

    componentDidMount() {
        this.setSlidesAccordingToScreenSize();
        let delay;
        window.addEventListener("resize", () => {
            clearTimeout(delay);
            delay = setTimeout(() => {
                this.setSlidesAccordingToScreenSize();
            }, 10);
        });
    }

    handleSlide(e, callback) {
        const numShows = this.props.genre.shows.length;
        if (numShows % this.state.slidesToShow == 0) {
            this.setState({ slidesToScroll: this.state.slidesToShow }, callback);
            return;
        }
        const decorator = e.target.tagName == "BUTTON" ? e.target.closest("div") : e.target;
        const numDisplays = Math.ceil(numShows / this.state.slidesToShow);
        if (this.state.currentSlide / this.state.slidesToShow == numDisplays - 1 && decorator.dataset.direction == "next") {
            this.setState({ slidesToScroll: numShows % this.state.slidesToShow }, callback);
        } else if (this.state.currentSlide > 0 && this.state.currentSlide <= this.state.slidesToShow && decorator.dataset.direction == "previous") {
            this.setState({ slidesToScroll: this.state.currentSlide }, callback);
        } else {
            this.setState({ slidesToScroll: this.state.slidesToShow }, callback);
        }
    }

    render() {
        const genre = this.props.genre;
        const shows = genre.shows.map((show, i) => {
            return <ShowContainer show={show} key={`show${i}`} selectShow={this.props.selectShow} />;
        });

        const handleSlide = this.handleSlide;
        const carouselDecorators = [
            {
                component: createReactClass({
                    render() {
                        return (
                            <div style={{height: "100%", background: "rgba(250, 250, 250, 0.1)"}} data-direction="previous" onClick={e => handleSlide(e, this.props.previousSlide)}>
                                <button style={{border: "none", background: "none", fontSize: "24px", marginTop: "calc(15rem + 10.5%)"}}>❮</button>
                            </div>
                        );
                    }
                }),
                position: "CenterLeft",
                style: {
                    top: "-63px",
                    left: 0,
                    height: "calc(100% + 63px)"
                }
            },
            {
                component: createReactClass({
                    render() {
                        return (
                            <div style={{height: "100%", background: "rgba(250, 250, 250, 0.1)"}} data-direction="next" onClick={e => handleSlide(e, this.props.nextSlide)}>
                                <button style={{border: "none", background: "none", fontSize: "24px", marginTop: "calc(15rem + 10.5%)"}}>❯</button>
                            </div>
                        );
                    }
                }),
                position: "CenterRight",
                style: {
                    top: "-63px",
                    right: 0,
                    height: "calc(100% + 63px)"
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
