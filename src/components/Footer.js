import React from 'react'
import { Component } from 'react'
import '../css/footer.css'
import '../css/global.css'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <ul id="footerWrap">
                <li>Where Are We?</li>
                <li>©2020</li>
            </ul>
            </React.Fragment>
        )
    }
}

export default Footer