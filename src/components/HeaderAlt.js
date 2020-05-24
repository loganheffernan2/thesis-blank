import React from 'react'
import { Component } from 'react'
import { Link } from '@reach/router'
import '../css/header-alt.css'
import '../css/global.css'

class HeaderAlt extends Component {

    componentDidMount(){
        document.title = this.props.title;
      }

    render() {
        return (
            <React.Fragment>
                <div id="headerBox">
                <div id="headerHome"><Link to="/" onClick={this.forceUpdate} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <p>Where Are We?</p>
                    </Link>
                </div>
                <div id="headerTitle">
                    <p>{this.props.title}</p>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HeaderAlt