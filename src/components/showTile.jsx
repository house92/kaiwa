import React, { Component } from "react";

export default class ShowTile extends Component {
    render() {
        const show = this.props.show;
        return (
            <a className="show-tile" href={`/shows/${show.id}`}>
                <img src={`/images/${show.image}`} />
                <div>{show.name}</div>
            </a>
        );
    }
}
