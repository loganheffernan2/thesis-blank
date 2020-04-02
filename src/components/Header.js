import React from 'react'
import { Component } from 'react'
import '../css/header.css'

class Header extends Component {
    render() {
        return (
            <ul id="headerWrap">
                <li>Home</li>
                <li>{this.props.title}</li>
                <li>04.02.2020</li>
            </ul>
        )
    }
}

export default Header