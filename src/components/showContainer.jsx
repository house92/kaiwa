import React, { Component } from "react";
import ShowTile from "./showTile";
import ShowCard from "./showCard";

export default class ShowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        if (this.state.expanded) {
            return (
                <ShowCard show={this.props.show} />
            );
        } else {
            return (
                <ShowTile show={this.props.show} />
            );
        }
    }
}
