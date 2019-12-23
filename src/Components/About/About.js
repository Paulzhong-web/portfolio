import React, { Component } from 'react';
import './About.scss';

export class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="about__wrap">
                    <pre className="about__text">{`const Web Developer = {`}</pre>
                    <pre className="about__text">{`name: "Paul Zhong",`}</pre>
                    <pre className="about__text">{`location: "Toronto, Ontario",`}</pre>
                    <pre className="about__text">{`message: "Welcome to my site."`}</pre>
                    <pre className="about__text">{`}`}</pre>
                </div>
            </section>
        )
    }
}

export default About
