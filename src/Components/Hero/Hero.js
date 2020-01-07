import React, { Component } from 'react';
import TypeEffect from '../TypeEffect/TypeEffect';
import './Hero.scss';

export class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <TypeEffect />
            </section>
        )
    }
}

export default Hero
