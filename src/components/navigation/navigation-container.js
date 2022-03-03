import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/about-me" activeClassName='nav-link-active'>About</NavLink>
                    <NavLink exact to="/contact">Contact</NavLink>
                    <NavLink exact to="/blog">Blog</NavLink>
                    { false ? <button>Add Blog</button> : null }
                </div>

                <div className="right-side">
                    ADAM LIND
                </div>
            </div>
        );
    }
}