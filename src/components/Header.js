import React from 'react'
import { Component } from 'react'
import { Link } from '@reach/router'
import '../css/header.css'
import '../css/global.css'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <ul id="headerWrap">
                <li>{this.props.title}</li>
                <li><Link to="/" onClick={this.forceUpdate} style={{ color: 'inherit', textDecoration: 'inherit'}}>Where Are We?</Link></li>
                <li>{this.props.date}</li>
            </ul>
            </React.Fragment>
        )
    }
}

export default Header