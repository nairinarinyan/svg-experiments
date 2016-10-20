import React, { Component } from 'react';
import Button from './Button';
import Transformer from './Transformer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            svg: ''
        };
    }

    componentDidMount() {
        fetch('/svgs/yay.svg')
            .then(r => r.text())
            .then(r => {
                this.setState({svg: r})
            });
    }

    onClick() {
        this.setState({
            animating: !this.state.animating
        });
    }

    render() {
        return (
            <div>
                <div className="svg-wrapper">
                    <Transformer
                        type="scale"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="translate"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="scale"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="skew"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                </div>
                <div className="svg-wrapper">
                    <Transformer
                        type="skew"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="rotate"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="skew"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="translate"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                </div>
                <div className="svg-wrapper">
                    <Transformer
                        type="translate"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="skew"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="skew"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                    <Transformer
                        type="rotate"
                        svg={{ source: this.state.svg }}
                        animating={this.state.animating}
                        />
                </div>
                <Button onClick={::this.onClick} />
            </div>
        );
    }
}
