import React, { Component } from "react";
import { Link } from "react-router";

export default class ShowTile extends Component {
    render() {
        const show = this.props.show;
        return (
            <Link className="show-tile" to={`/shows/${show.id}`} onClick={this.props.handleClick}>
                <img src={`/images/${show.image}`} />
                <div>{show.name}</div>
            </Link>
        );
    }
}
