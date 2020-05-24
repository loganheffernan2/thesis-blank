import React from 'react'
import { Component } from 'react'
import '../css/footer.css'
import '../css/global.css'

class Footer extends Component {

    render() {

        var year = new Date().getFullYear();

        return (
            <React.Fragment>
            <div id="footerBox">
            <div id="footerCred">
                <p>© {year} Where Are We?</p>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer