import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import ShowTile from "./showTile";
import ShowCard from "./showCard";

export default class ShowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.handleTileClick = this.handleTileClick.bind(this);
    }

    handleTileClick(e) {
        const hyperlink = e.target.closest("a").href;
        axios.get(`/shows/${this.props.show.id}.json`)
            .then(res => {
                this.props.selectShow(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        if (this.state.expanded) {
            return (
                <ShowCard show={this.props.show} />
            );
        } else {
            return (
                <ShowTile show={this.props.show} handleClick={this.handleTileClick} />
            );
        }
    }
}
