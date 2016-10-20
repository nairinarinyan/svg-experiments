import React, { Component } from 'react';

export default class Transformer extends Component {
    createSvg() {
        return {
            __html: this.props.svg.source
        };
    }

    transform(type, amount) {
        switch(type) {
            case 'rotate':
                return `rotate(${amount} 50 50)`
            case 'translate':
                return `translate(${amount})`
            case 'skew':
                return `skewX(${amount})`
            case 'scale':
                return `scale(${(amount + 5)/(amount + 20)})`
        }
    }

    draw(amount = 1) {
        amount += 5
        if (amount >= 360) amount = 0;
        this.targetEl.setAttribute('transform', this.transform(this.props.type, amount))
        this.animID = requestAnimationFrame(this.draw.bind(this, amount));
    }

    componentWillReceiveProps({ animating }) {
        if (animating) {
            this.draw();
        } else {
            cancelAnimationFrame(this.animID);
        }
    }

    render() {
        return (
            <div
                ref={el => {
                        if (el && el.childNodes.length) {
                            this.svgEl = el.childNodes[0];
                            this.targetEl = this.svgEl.childNodes[0];
                        }
                    }}
                dangerouslySetInnerHTML={this.createSvg()}>
            </div>
        );
    }
}