import React, { Component } from 'react';
import { Link, animateScroll } from 'react-scroll';
import './Nav.scss';

export class Nav extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul className="navBar__list">
                    <div className="navBar__list--wrap">
                    {/* <li className="navBar__list-item">
                        <Link
                            className="navBar__list-item-tab logo"
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >Paul Zhong</Link>
                    </li> */}
                    <li className="navBar__list-item">
                        <p 
                            className="navBar__list-item-tab logo"
                            onClick={() => animateScroll.scrollToTop()}
                        >
                            PAUL ZHONG
                        </p>
                    </li>
                    <li className="navBar__list-item">
                        <Link
                            className="navBar__list-item-tab"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >ABOUT</Link>
                    </li>
                    </div>
                    <div className="navBar__list--wrap">
                    <li className="navBar__list-item">
                        <Link
                        className="navBar__list-item-tab"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >PROJECTS</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link
                        className="navBar__list-item-tab"
                            activeClass="active"
                            to="skill"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >SKILLS</Link>
                    </li>
                    <li className="navBar__list-item">
                        <a
                        className="navBar__list-item-tab"
                        href="mailto:paulzhong114@gmail.com"
                        >CONTACT</a>
                    </li>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Nav
