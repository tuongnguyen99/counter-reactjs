import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">Products
                    <span className="badge badge-light m-2">{this.props.totalCount}</span>
                </span>
            </nav>
        );
    }
}

export default Navbar;