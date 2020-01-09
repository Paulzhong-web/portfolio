import React, { Component } from 'react';
import './JumpingText.scss';

export class JumpingText extends Component {
    render() {
        return (
            <div>
                <p className="jumpText">
                    <span className="jumpText__letter">H</span>
                    <span className="jumpText__letter">e</span>
                    <span className="jumpText__letter">l</span>
                    <span className="jumpText__letter">l</span>
                    <span className="jumpText__letter">o</span>
                    <span className="jumpText__letter">!</span>
                </p>
            </div>
        )
    }
}

export default JumpingText
