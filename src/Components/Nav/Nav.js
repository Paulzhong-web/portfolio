import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../Assets/Icon/paul-logo.svg';
import './Nav.scss';

export class Nav extends Component {
    render() {
        return (
            <nav className="navBar">
                <img className="navBar__logo" src={Logo} alt="logo"/>
                <ul className="navBar__list">
                    <li className="navBar__list-item">
                        <Link
                            className="navBar__list-item-tab"
                            activeClass="navBar__active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >ABOUT</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link
                        className="navBar__list-item-tab"
                            activeClass="navBar__active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >PROJECTS</Link>
                    </li>
                    <li className="navBar__list-item">
                        <Link
                        className="navBar__list-item-tab"
                            activeClass="navBar__active"
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >EDUCATION</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav
