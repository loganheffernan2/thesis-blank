import React from 'react'
import { Component } from 'react'
import '../css/header.css'
import '../css/global.css'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <ul id="headerWrap">
                <li>Home</li>
                <li>{this.props.title}</li>
                <li>{this.props.date}</li>
            </ul>
            <div id="headerBumper"></div>
            </React.Fragment>
        )
    }
}

export default Header