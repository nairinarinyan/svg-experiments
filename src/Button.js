import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div className="button-wrapper">
                <button onClick={this.props.onClick}>Press me</button>
            </div>
        );
    }
}