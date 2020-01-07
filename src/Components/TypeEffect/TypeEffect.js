import React, { Component } from 'react';
import CommandImg from '../../Assets/Icon/command-line.png';
import './TypeEffect.scss'

export class TypeEffect extends Component {
    render() {
        return (
            <div className="typeEffect">
            <img src={CommandImg} className="typeEffect__image" alt="command-line" />
            <div className="typeEffect__wrap">
                <pre className="typeEffect__text">{`const Web Developer = {`}</pre>
                <pre className="typeEffect__text">{`name: "Paul Zhong",`}</pre>
                <pre className="typeEffect__text">{`location: "Toronto, Ontario",`}</pre>
                <pre className="typeEffect__text">{`message: "Welcome to my site."`}</pre>
                <pre className="typeEffect__text">{`}`}</pre>
            </div>
            </div>
        )
    }
}

export default TypeEffect
