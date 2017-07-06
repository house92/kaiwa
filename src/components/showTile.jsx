import React, { Component } from "react";

export default class ShowTile extends Component {
    render() {
        const show = this.props.show;
        return (
            <div className="show-tile">
                <img src={`/images/${show.image}`} />
                <div>{show.name}</div>
            </div>
        );
    }
}